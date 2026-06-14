import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../../App.css";
import rcmLogo from "../../assets/rcm.png";

// Override alert bawaan browser agar menggunakan SweetAlert2
window.alert = (msg) => {
  const message = String(msg);
  const lowerMsg = message.toLowerCase();
  const isError = lowerMsg.includes("gagal") || lowerMsg.includes("error") || lowerMsg.includes("salah") || lowerMsg.includes("wajib");
  const isSuccess = lowerMsg.includes("sukses") || lowerMsg.includes("berhasil") || lowerMsg.includes("terima kasih") || lowerMsg.includes("masuk");
  
  let icon = "info";
  let title = "Informasi";
  if (isError) { icon = "error"; title = "Perhatian!"; }
  else if (isSuccess) { icon = "success"; title = "Berhasil!"; }
  
  Swal.fire(title, message, icon);
};

// Menggunakan Environment Variable agar aman saat di-deploy (Vercel)
const API_URL =
  import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3000`;
const playNotificationSound = () => {
  const audio = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
  );
  audio.play().catch((e) => console.log("Audio play di-block browser", e));
};
// 1. DASHBOARD PWA PELANGGAN
function CustomerApp() {
  const [menus, setMenus] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [categoriesList, setCategoriesList] = useState(["Semua"]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [nomorMeja, setNomorMeja] = useState(1);
  const [lastOrderItems, setLastOrderItems] = useState([]);
  const [lastOrderId, setLastOrderId] = useState(null);
  const [feedbackData, setFeedbackData] = useState({});
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mejaDariUrl = params.get("meja");
    if (mejaDariUrl) setNomorMeja(parseInt(mejaDariUrl));
    axios
      .get(`${API_URL}/api/categories`)
      .then((res) =>
        setCategoriesList(["Semua", ...res.data.map((c) => c.name)]),
      )
      .catch((err) => console.log(err));
    axios
      .get(`${API_URL}/api/menu`)
      .then((res) => setMenus(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let result = menus;
    if (category !== "Semua")
      result = result.filter((m) => m.categories?.name === category);
    if (searchQuery.trim() !== "")
      result = result.filter((m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    setFilteredMenus(result);
  }, [menus, category, searchQuery]);
  const filterCategory = (cat) => setCategory(cat);
  const updateQuantity = (item, qtyDelta) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      const newQty = existing.qty + qtyDelta;
      setCart(
        newQty <= 0
          ? cart.filter((c) => c.id !== item.id)
          : cart.map((c) => (c.id === item.id ? { ...c, qty: newQty } : c)),
      );
    } else if (qtyDelta > 0) setCart([...cart, { ...item, qty: 1, notes: "" }]);
  };
  const updateItemNote = (itemId, note) =>
    setCart(cart.map((c) => (c.id === itemId ? { ...c, notes: note } : c)));
  const getItemQuantity = (itemId) => {
    const item = cart.find((c) => c.id === itemId);
    return item ? item.qty : 0;
  };
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const finalTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const originalTotal = cart.reduce(
    (sum, item) => sum + item.original_price * item.qty,
    0,
  );
  const handleCheckout = () => {
    if (!nomorMeja || cart.length === 0) return alert("Pilih meja dan menu!");
    
    const taxCustomer = finalTotal * 0.10;
    const serviceCustomer = finalTotal * 0.05;
    const grandTotalCustomer = finalTotal + taxCustomer + serviceCustomer;

    Swal.fire({
      title: "Konfirmasi Pesanan",
      html: `Subtotal: Rp ${finalTotal.toLocaleString("id-ID")}<br/>
             Pajak (10%): Rp ${taxCustomer.toLocaleString("id-ID")}<br/>
             Service (5%): Rp ${serviceCustomer.toLocaleString("id-ID")}<br/><br/>
             <b>Total Akhir: Rp ${grandTotalCustomer.toLocaleString("id-ID")}</b>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Pesan Sekarang",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${API_URL}/api/checkout`, {
            table_id: nomorMeja,
            items: cart.map((item) => ({
              menu_item_id: item.id,
              quantity: item.qty,
              notes: item.notes,
            })),
          })
          .then((res) => {
            setLastOrderId(res.data.data.id);
            setLastOrderItems(cart);
            setCart([]);
            setIsCartOpen(false);
            setCheckoutSuccess(true);
          })
          .catch((err) =>
            alert("Gagal Checkout: " + (err.response?.data?.error || err.message)),
          );
      }
    });
  };
  const submitFeedback = () => {
    const feedbacks = Object.keys(feedbackData).map((menuId) => ({
      menu_item_id: parseInt(menuId),
      rating: feedbackData[menuId].rating || 5,
      review_text: feedbackData[menuId].review || "",
    }));
    if (feedbacks.length === 0) return alert("Beri rating minimal 1 menu.");
    axios
      .post(`${API_URL}/api/feedback`, { order_id: lastOrderId, feedbacks })
      .then(() => {
        alert("Terima kasih!");
        setCheckoutSuccess(false);
        setFeedbackData({});
      })
      .catch((err) => alert("Gagal."));
  };
  if (checkoutSuccess) {
    return (
      <div className="app-container">
        <header className="header confirmation-header">
          <h2>Pesanan Berhasil!</h2>
        </header>
        <div className="confirmation-page-content">
          <div className="success-icon">✓</div>
          <p>Pesanan sedang disiapkan.</p>
          <div style={{ marginTop: "30px", width: "100%", textAlign: "left" }}>
            <h3
              style={{
                color: "var(--coffee-main)",
                borderBottom: "2px solid #eee",
                paddingBottom: "10px",
                marginBottom: "15px",
              }}
            >
              Bantu Kami Lebih Baik! 🌟
            </h3>
            {lastOrderItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#f9f9f9",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <h4 style={{ marginBottom: "10px" }}>{item.name}</h4>
                <select
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  onChange={(e) =>
                    setFeedbackData({
                      ...feedbackData,
                      [item.id]: {
                        ...feedbackData[item.id],
                        rating: e.target.value,
                      },
                    })
                  }
                  defaultValue="5"
                >
                  <option value="5">⭐⭐⭐⭐⭐ (Sangat Enak)</option>
                  <option value="4">⭐⭐⭐⭐ (Enak)</option>
                  <option value="3">⭐⭐⭐ (Biasa Saja)</option>
                  <option value="2">⭐⭐ (Kurang Enak)</option>
                  <option value="1">⭐ (Tidak Enak)</option>
                </select>
                <input
                  type="text"
                  placeholder="Ulasan (opsional)..."
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  onChange={(e) =>
                    setFeedbackData({
                      ...feedbackData,
                      [item.id]: {
                        ...feedbackData[item.id],
                        review: e.target.value,
                      },
                    })
                  }
                />
              </div>
            ))}
            <button
              className="submit-order-btn"
              style={{ marginTop: "15px" }}
              onClick={submitFeedback}
            >
              Kirim Ulasan
            </button>
            <button
              className="btn-secondary"
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "15px",
                borderRadius: "10px",
              }}
              onClick={() => setCheckoutSuccess(false)}
            >
              Lewati & Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (isCartOpen) {
    return (
      <div className="app-container">
        <header className="header cart-header">
          <button className="back-btn" onClick={() => setIsCartOpen(false)}>
            ❮
          </button>
          <h2>Keranjang Anda</h2>
        </header>
        <div className="cart-page-content">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-row-wrapper">
              <div className="cart-item-row">
                <div className="cart-item-info">
                  <h4>
                    {item.name}{" "}
                    {item.original_price > item.price && (
                      <span className="discount-badge-small">Promo</span>
                    )}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    {item.original_price > item.price && (
                      <p className="original-price-small">
                        Rp {item.original_price.toLocaleString("id-ID")}
                      </p>
                    )}
                    <p>
                      Rp {item.price.toLocaleString("id-ID")} x {item.qty}
                    </p>
                  </div>
                </div>
                <strong>
                  Rp {(item.price * item.qty).toLocaleString("id-ID")}
                </strong>
              </div>
              <input
                type="text"
                className="note-input"
                placeholder="Tulis catatan..."
                value={item.notes}
                onChange={(e) => updateItemNote(item.id, e.target.value)}
              />
            </div>
          ))}
          <div className="cart-summary-box">
            <p className="total-items">Jumlah Item: {totalItems}</p>
            {originalTotal > finalTotal && (
              <p
                style={{
                  color: "#28a745",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Hemat: Rp {(originalTotal - finalTotal).toLocaleString("id-ID")}
              </p>
            )}
            <h3>Total: Rp {finalTotal.toLocaleString("id-ID")}</h3>
            <button className="submit-order-btn" onClick={handleCheckout}>
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="app-container">
      <header className="header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <img
            src={rcmLogo}
            alt="Raya Cafe Logo"
            style={{
              height: "48px",
              width: "48px",
              objectFit: "contain",
              borderRadius: "50%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          />
          <div>
            <h1>Raya Cafe Madiun</h1>
            <p>Self-Order Meja {nomorMeja}</p>
          </div>
        </div>
        <div
          className="search-container"
          style={{
            marginTop: "18px",
            padding: "0 20px",
            maxWidth: "600px",
            margin: "18px auto 0",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Cari minuman, makanan, snack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-pwa"
          />
        </div>
        <div className="category-tabs" style={{ marginTop: "16px" }}>
          {categoriesList.map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active-tab" : "tab"}
              onClick={() => filterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      <div className="menu-grid">
        {filteredMenus.map((menu) => {
          const qtyInCart = getItemQuantity(menu.id);
          const isDiscounted = menu.original_price > menu.price;
          const isHabis = menu.is_out_of_stock;
          return (
            <div
              key={menu.id}
              className={`menu-card ${isHabis ? "out-of-stock-card" : ""}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span className="badge">{menu.categories?.name || "Menu"}</span>
                {isDiscounted && !isHabis && (
                  <span className="badge-promo">Diskon!</span>
                )}
                {isHabis && <span className="badge-habis">HABIS</span>}
              </div>
              <h3>{menu.name}</h3>
              <p className="description">{menu.description}</p>
              <div className="card-footer-row">
                <div className="price-container">
                  {isDiscounted && (
                    <p className="original-price">
                      Rp {menu.original_price.toLocaleString("id-ID")}
                    </p>
                  )}
                  <p className="price">
                    Rp {menu.price.toLocaleString("id-ID")}
                  </p>
                </div>
                {!isHabis &&
                  (qtyInCart > 0 ? (
                    <div className="qty-control-btn">
                      <button onClick={() => updateQuantity(menu, -1)}>
                        −
                      </button>
                      <span>{qtyInCart}</span>
                      <button onClick={() => updateQuantity(menu, 1)}>+</button>
                    </div>
                  ) : (
                    <button
                      className="add-btn"
                      onClick={() => updateQuantity(menu, 1)}
                    >
                      Tambah
                    </button>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      {totalItems > 0 && (
        <div className="cart-footer">
          <div className="cart-info">
            <span>{totalItems} Item</span>
            <strong>Rp {finalTotal.toLocaleString("id-ID")}</strong>
          </div>
          <button className="checkout-btn" onClick={() => setIsCartOpen(true)}>
            Buka Keranjang
          </button>
        </div>
      )}
    </div>
  );
}
export default CustomerApp;
