import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import rcmLogo from './assets/rcm.png'
// Menggunakan Environment Variable agar aman saat di-deploy (Vercel)
const API_URL = import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3000`;
const playNotificationSound = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
  audio.play().catch(e => console.log("Audio play di-block browser", e));
};
// 1. DASHBOARD PWA PELANGGAN
function CustomerApp() {
  const [menus, setMenus] = useState([]); const [filteredMenus, setFilteredMenus] = useState([]); const [categoriesList, setCategoriesList] = useState(['Semua']); const [cart, setCart] = useState([]); const [category, setCategory] = useState('Semua'); const [searchQuery, setSearchQuery] = useState(''); const [isCartOpen, setIsCartOpen] = useState(false); const [checkoutSuccess, setCheckoutSuccess] = useState(false); const [nomorMeja, setNomorMeja] = useState(1);
  const [lastOrderItems, setLastOrderItems] = useState([]); const [lastOrderId, setLastOrderId] = useState(null); const [feedbackData, setFeedbackData] = useState({});
  useEffect(() => {
    const params = new URLSearchParams(window.location.search); const mejaDariUrl = params.get('meja'); if (mejaDariUrl) setNomorMeja(parseInt(mejaDariUrl));
    axios.get(`${API_URL}/api/categories`).then(res => setCategoriesList(['Semua', ...res.data.map(c => c.name)])).catch(err => console.log(err));
    axios.get(`${API_URL}/api/menu`).then(res => setMenus(res.data)).catch(err => console.log(err));
  }, []);
  useEffect(() => {
    let result = menus;
    if (category !== 'Semua') result = result.filter(m => m.categories?.name === category);
    if (searchQuery.trim() !== '') result = result.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredMenus(result);
  }, [menus, category, searchQuery]);
  const filterCategory = (cat) => setCategory(cat);
  const updateQuantity = (item, qtyDelta) => { const existing = cart.find(c => c.id === item.id); if (existing) { const newQty = existing.qty + qtyDelta; setCart(newQty <= 0 ? cart.filter(c => c.id !== item.id) : cart.map(c => c.id === item.id ? { ...c, qty: newQty } : c)); } else if (qtyDelta > 0) setCart([...cart, { ...item, qty: 1, notes: '' }]); }
  const updateItemNote = (itemId, note) => setCart(cart.map(c => c.id === itemId ? { ...c, notes: note } : c));
  const getItemQuantity = (itemId) => { const item = cart.find(c => c.id === itemId); return item ? item.qty : 0; }
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0); const finalTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0); const originalTotal = cart.reduce((sum, item) => sum + (item.original_price * item.qty), 0);
  const handleCheckout = () => {
    axios.post(`${API_URL}/api/checkout`, { table_id: nomorMeja, items: cart.map(item => ({ menu_item_id: item.id, quantity: item.qty, notes: item.notes })) })
      .then((res) => { setLastOrderId(res.data.data.id); setLastOrderItems(cart); setCart([]); setIsCartOpen(false); setCheckoutSuccess(true); }).catch(err => alert('Gagal Checkout: ' + (err.response?.data?.error || err.message)));
  }
  const submitFeedback = () => {
    const feedbacks = Object.keys(feedbackData).map(menuId => ({ menu_item_id: parseInt(menuId), rating: feedbackData[menuId].rating || 5, review_text: feedbackData[menuId].review || '' }));
    if (feedbacks.length === 0) return alert("Beri rating minimal 1 menu.");
    axios.post(`${API_URL}/api/feedback`, { order_id: lastOrderId, feedbacks }).then(() => { alert("Terima kasih!"); setCheckoutSuccess(false); setFeedbackData({}); }).catch(err => alert("Gagal."));
  };
  if (checkoutSuccess) {
    return (
      <div className="app-container"><header className="header confirmation-header"><h2>Pesanan Berhasil!</h2></header>
        <div className="confirmation-page-content"><div className="success-icon">✓</div><p>Pesanan sedang disiapkan.</p>
          <div style={{ marginTop: '30px', width: '100%', textAlign: 'left' }}><h3 style={{ color: 'var(--coffee-main)', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '15px' }}>Bantu Kami Lebih Baik! 🌟</h3>
            {lastOrderItems.map(item => (<div key={item.id} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '10px', marginBottom: '10px' }}><h4 style={{ marginBottom: '10px' }}>{item.name}</h4><select style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} onChange={(e) => setFeedbackData({ ...feedbackData, [item.id]: { ...feedbackData[item.id], rating: e.target.value } })} defaultValue="5"><option value="5">⭐⭐⭐⭐⭐ (Sangat Enak)</option><option value="4">⭐⭐⭐⭐ (Enak)</option><option value="3">⭐⭐⭐ (Biasa Saja)</option><option value="2">⭐⭐ (Kurang Enak)</option><option value="1">⭐ (Tidak Enak)</option></select><input type="text" placeholder="Ulasan (opsional)..." style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} onChange={(e) => setFeedbackData({ ...feedbackData, [item.id]: { ...feedbackData[item.id], review: e.target.value } })} /></div>))}
            <button className="submit-order-btn" style={{ marginTop: '15px' }} onClick={submitFeedback}>Kirim Ulasan</button><button className="btn-secondary" style={{ width: '100%', marginTop: '10px', padding: '15px', borderRadius: '10px' }} onClick={() => setCheckoutSuccess(false)}>Lewati & Kembali</button></div>
        </div>
      </div>
    )
  }
  if (isCartOpen) {
    return (
      <div className="app-container"><header className="header cart-header"><button className="back-btn" onClick={() => setIsCartOpen(false)}>❮</button><h2>Keranjang Anda</h2></header>
        <div className="cart-page-content">
          {cart.map(item => (<div key={item.id} className="cart-item-row-wrapper"><div className="cart-item-row"><div className="cart-item-info"><h4>{item.name} {item.original_price > item.price && <span className="discount-badge-small">Promo</span>}</h4><div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>{item.original_price > item.price && <p className="original-price-small">Rp {item.original_price.toLocaleString('id-ID')}</p>}<p>Rp {item.price.toLocaleString('id-ID')} x {item.qty}</p></div></div><strong>Rp {(item.price * item.qty).toLocaleString('id-ID')}</strong></div><input type="text" className="note-input" placeholder="Tulis catatan..." value={item.notes} onChange={(e) => updateItemNote(item.id, e.target.value)} /></div>))}
          <div className="cart-summary-box"><p className="total-items">Jumlah Item: {totalItems}</p>{originalTotal > finalTotal && <p style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '10px' }}>Hemat: Rp {(originalTotal - finalTotal).toLocaleString('id-ID')}</p>}<h3>Total: Rp {finalTotal.toLocaleString('id-ID')}</h3><button className="submit-order-btn" onClick={handleCheckout}>Pesan Sekarang</button></div>
        </div>
      </div>
    )
  }
  return (
    <div className="app-container">
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
          <img src={rcmLogo} alt="Raya Cafe Logo" style={{ height: '48px', width: '48px', objectFit: 'contain', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }} />
          <div><h1>Raya Cafe Madiun</h1><p>Self-Order Meja {nomorMeja}</p></div>
        </div>
        <div className="search-container" style={{ marginTop: '18px', padding: '0 20px', maxWidth: '600px', margin: '18px auto 0' }}>
          <input type="text" placeholder="🔍 Cari minuman, makanan, snack..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="search-input-pwa" />
        </div>
        <div className="category-tabs" style={{ marginTop: '16px' }}>
          {categoriesList.map(cat => <button key={cat} className={category === cat ? 'active-tab' : 'tab'} onClick={() => filterCategory(cat)}>{cat}</button>)}
        </div>
      </header>
      <div className="menu-grid">{filteredMenus.map(menu => {
        const qtyInCart = getItemQuantity(menu.id); const isDiscounted = menu.original_price > menu.price;
        const isHabis = menu.is_out_of_stock;
        return (
          <div key={menu.id} className={`menu-card ${isHabis ? 'out-of-stock-card' : ''}`}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
               <span className="badge">{menu.categories?.name || 'Menu'}</span>
               {isDiscounted && !isHabis && <span className="badge-promo">Diskon!</span>}
               {isHabis && <span className="badge-habis">HABIS</span>}
             </div>
             <h3>{menu.name}</h3>
             <p className="description">{menu.description}</p>
             <div className="card-footer-row">
               <div className="price-container">
                 {isDiscounted && <p className="original-price">Rp {menu.original_price.toLocaleString('id-ID')}</p>}
                 <p className="price">Rp {menu.price.toLocaleString('id-ID')}</p>
               </div>
               {!isHabis && (
                 qtyInCart > 0 ? (<div className="qty-control-btn"><button onClick={() => updateQuantity(menu, -1)}>−</button><span>{qtyInCart}</span><button onClick={() => updateQuantity(menu, 1)}>+</button></div>) : <button className="add-btn" onClick={() => updateQuantity(menu, 1)}>Tambah</button>
               )}
             </div>
           </div>
        );
      })}</div>
      {totalItems > 0 && (<div className="cart-footer"><div className="cart-info"><span>{totalItems} Item</span><strong>Rp {finalTotal.toLocaleString('id-ID')}</strong></div><button className="checkout-btn" onClick={() => setIsCartOpen(true)}>Buka Keranjang</button></div>)}
    </div>
  )
}
// 2. DASHBOARD ADMIN
function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || '');
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]); const [reservations, setReservations] = useState([]); const [inventory, setInventory] = useState([]); const [menus, setMenus] = useState([]); const [packages, setPackages] = useState([]); const [promotions, setPromotions] = useState([]); const [feedbacks, setFeedbacks] = useState([]); const [usersList, setUsersList] = useState([]); const [tables, setTables] = useState([]);
  const [reportDate, setReportDate] = useState(new Date().toISOString().split('T')[0]); const [reportData, setReportData] = useState(null);
  const [showResvModal, setShowResvModal] = useState(false);
  const [selectedResv, setSelectedResv] = useState(null);
  const [selectedTableId, setSelectedTableId] = useState('');
  const [eventMode, setEventMode] = useState('paket');
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const [eventMenuDropdown, setEventMenuDropdown] = useState('');
  const [eventCart, setEventCart] = useState([]);
  const [showManualResv, setShowManualResv] = useState(false);
  const [manualResvForm, setManualResvForm] = useState({ name: '', phone: '', date: '', pax: '', type: 'meja', event_choice: 'paket' });
  const [showPrintEventModal, setShowPrintEventModal] = useState(false); const [eventTotalAmount, setEventTotalAmount] = useState('');
  const [showOrderPreviewModal, setShowOrderPreviewModal] = useState(false); const [previewOrder, setPreviewOrder] = useState(null);
  const [showEventPreviewModal, setShowEventPreviewModal] = useState(false);
  const [invHistory, setInvHistory] = useState([]); const [showInvHistory, setShowInvHistory] = useState(false);
  const [showStockModal, setShowStockModal] = useState(false); const [selectedMaterial, setSelectedMaterial] = useState(null); const [newStockVal, setNewStockVal] = useState(''); const [stockReason, setStockReason] = useState('');
  const [showPromoModal, setShowPromoModal] = useState(false); const [promoForm, setPromoForm] = useState({ menu_item_ids: [], name: '', type: 'percent', value: '', end_date: '' });
  const [showUserModal, setShowUserModal] = useState(false); const [userForm, setUserForm] = useState({ username: '', password: '', role: 'kasir' });
  const prevOrderCount = useRef(0);
  const prevResvCount = useRef(0);
  const prevLowStockCount = useRef(0);
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`${API_URL}/api/login`, { username, password })
      .then(res => {
        setIsAuthenticated(true); setUsername(res.data.user.username); setUserRole(res.data.user.role);
        localStorage.setItem('token', res.data.token); localStorage.setItem('username', res.data.user.username); localStorage.setItem('userRole', res.data.user.role);
      })
      .catch(err => alert(err.response?.data?.error || "Gagal Login"));
  }
  const handleLogout = () => { setIsAuthenticated(false); setUsername(''); setPassword(''); setUserRole(''); localStorage.clear(); }
  const fetchData = () => {
    if (!isAuthenticated) return;
    axios.get(`${API_URL}/api/admin/orders`).then(res => {
      const newActiveOrders = res.data.filter(o => o.status === 'pending');
      if (newActiveOrders.length > prevOrderCount.current && prevOrderCount.current !== 0) { playNotificationSound(); }
      prevOrderCount.current = newActiveOrders.length;
      setOrders(res.data);
    }).catch(err => console.log(err));
    axios.get(`${API_URL}/api/admin/reservations`).then(res => {
      const newResv = res.data.filter(r => r.status === 'pending_wa');
      if (newResv.length > prevResvCount.current && prevResvCount.current !== 0) { playNotificationSound(); }
      prevResvCount.current = newResv.length;
      setReservations(res.data);
    }).catch(err => console.log(err));
    axios.get(`${API_URL}/api/menu`).then(res => setMenus(res.data)).catch(err => console.log(err));
    axios.get(`${API_URL}/api/packages`).then(res => setPackages(res.data)).catch(err => console.log(err));
    axios.get(`${API_URL}/api/tables`).then(res => setTables(res.data)).catch(err => console.log(err));
    if (userRole === 'admin') {
      axios.get(`${API_URL}/api/admin/inventory`).then(res => {
        const newData = res.data;
        const currentLowStock = newData.filter(item => item.current_stock <= item.min_stock_level).length;
        if (currentLowStock > prevLowStockCount.current && prevLowStockCount.current !== 0) { playNotificationSound(); }
        prevLowStockCount.current = currentLowStock;
        setInventory(newData);
      }).catch(err => console.log(err));
      if (activeTab === 'inventory' && showInvHistory) {
         axios.get(`${API_URL}/api/admin/inventory-history`).then(res => setInvHistory(res.data)).catch(err => console.log(err));
      }
    }
    if (activeTab === 'promotions') axios.get(`${API_URL}/api/admin/promotions`).then(res => setPromotions(res.data)).catch(err => console.log(err));
    if (activeTab === 'feedback') axios.get(`${API_URL}/api/admin/feedback`).then(res => setFeedbacks(res.data)).catch(err => console.log(err));
    if (activeTab === 'users') axios.get(`${API_URL}/api/admin/users`).then(res => setUsersList(res.data)).catch(err => console.log(err));
    if (activeTab === 'reports') axios.get(`${API_URL}/api/admin/reports?date=${reportDate}`).then(res => setReportData(res.data)).catch(err => console.log(err));
  };
  useEffect(() => { fetchData(); const interval = setInterval(fetchData, 5000); return () => clearInterval(interval); }, [isAuthenticated, activeTab, showInvHistory, reportDate]);
  const updateOrderStatus = (id, newStatus) => { axios.patch(`${API_URL}/api/admin/orders/${id}/status`, { status: newStatus }).then(() => fetchData()); };
  const triggerLegacyPrint = (order) => { setPreviewOrder(order); setShowOrderPreviewModal(true); };
  const confirmOrderPrint = () => {
    axios.post(`${API_URL}/api/admin/orders/${previewOrder.id}/print`, { kasir_name: username })
      .then(res => { alert(res.data.message); setShowOrderPreviewModal(false); setPreviewOrder(null); fetchData(); })
      .catch(err => alert('Gagal cetak: ' + (err.response?.data?.error || err.message)));
  };
  const submitEventConfirmation = () => {
    if (!selectedTableId) return alert("Pilih meja!");
    if (eventMode === 'paket' && !selectedPackageId) return alert("Pilih paket event dari daftar!");
    if (eventMode === 'pilih' && eventCart.length === 0) return alert("Pilih minimal satu menu untuk dimasukkan ke keranjang event!");
    const payload = {
      table_id: selectedTableId,
      package_id: eventMode === 'paket' ? selectedPackageId : null,
      menu_items: eventMode === 'pilih' ? eventCart : null
    };
    axios.post(`${API_URL}/api/admin/reservations/${selectedResv.id}/confirm-event`, payload)
      .then(res => {
        alert(res.data.message); setShowResvModal(false); setSelectedPackageId(''); setEventCart([]); setSelectedTableId(''); fetchData();
      })
      .catch(err => alert(err.response?.data?.error || "Terjadi kesalahan!"));
  };
  const confirmMejaBiasa = () => {
    if (!selectedTableId) return alert("Pilih meja!");
    axios.post(`${API_URL}/api/admin/reservations/${selectedResv.id}/confirm-meja`, { table_id: selectedTableId }).then(res => { alert(res.data.message); setShowResvModal(false); setSelectedTableId(''); fetchData(); }).catch(err => alert(err.response?.data?.error));
  }
  // 🔥 FUNGSI BARU: MENYELESAIKAN MEJA BIASA SECARA MANUAL 🔥
  const completeMejaBiasa = (id) => {
    if (window.confirm("Tamu sudah datang? Reservasi Meja ini akan ditandai selesai dan disembunyikan.")) {
      axios.patch(`${API_URL}/api/admin/reservations/${id}/status`, { status: 'completed' })
        .then(res => { alert("Reservasi selesai!"); fetchData(); })
        .catch(err => alert("Gagal menyelesaikan reservasi."));
    }
  };
  const submitManualResv = () => {
    if (!manualResvForm.name || !manualResvForm.phone || !manualResvForm.date || !manualResvForm.pax) {
      return alert("Harap isi semua bidang (Nama, No HP, Tanggal, dan Pax)!");
    }
    if (manualResvForm.type === 'event') {
      const resDate = new Date(manualResvForm.date);
      const minDate = new Date();
      minDate.setDate(minDate.getDate() + 3);
      if (resDate < minDate) return alert('❌ Maaf, Reservasi Event wajib dilakukan minimal H-3 dari sekarang!');
    }
    axios.post(`${API_URL}/api/admin/reservations/manual`, manualResvForm).then(res => { alert("Sukses!"); setShowManualResv(false); fetchData(); }).catch(err => alert(err.response?.data?.error || "Gagal menyimpan reservasi manual"));
  }
  const handleOpenPrintModal = (resv) => {
    setSelectedResv(resv);
    let autoTotal = 0;
    if (resv.event_choice?.startsWith('paket_')) {
      const pId = parseInt(resv.event_choice.split('_')[1]);
      const pkg = packages.find(p => p.id === pId);
      if (pkg) autoTotal = Number(pkg.price) * resv.pax_count;
    } else if (resv.event_choice?.startsWith('pilih_')) {
      const itemsStr = resv.event_choice.replace('pilih_', '');
      if (itemsStr) {
        itemsStr.split(',').forEach(pair => {
          const parts = pair.split(':');
          if (parts.length === 2) {
            const mId = parseInt(parts[0]);
            const mQty = parseInt(parts[1]);
            const menu = menus.find(m => m.id === mId);
            if (menu) autoTotal += Number(menu.price) * mQty * resv.pax_count;
          }
        });
      }
    }
    setEventTotalAmount(autoTotal);
    setShowPrintEventModal(true);
  };
  const submitEventPrint = () => {
    if (!eventTotalAmount) return alert("Masukkan total harga event!");
    setShowPrintEventModal(false);
    setShowEventPreviewModal(true);
  };
  const confirmEventPrint = () => {
    // Hitung deskripsi event untuk dikirim ke legacy DB
    let eventDesc = '';
    if (selectedResv?.event_choice?.startsWith('paket_')) {
      const pId = parseInt(selectedResv.event_choice.split('_')[1]);
      const pkg = packages.find(p => p.id === pId);
      if (pkg) eventDesc = `${pkg.name}: ${pkg.description || ''}`;
    } else if (selectedResv?.event_choice?.startsWith('pilih_')) {
      const itemsStr = selectedResv.event_choice.replace('pilih_', '');
      const items = itemsStr.split(',').map(pair => { const [mId, mQty] = pair.split(':'); const menu = menus.find(m => m.id === parseInt(mId)); return menu ? `${mQty}x ${menu.name}` : null; }).filter(Boolean);
      eventDesc = items.join(', ');
    }
    axios.post(`${API_URL}/api/admin/reservations/${selectedResv.id}/print`, {
      total_amount: eventTotalAmount,
      kasir_name: username,
      event_description: eventDesc
    }).then(res => { alert(res.data.message); setShowEventPreviewModal(false); setEventTotalAmount(''); fetchData(); })
      .catch(err => alert(err.response?.data?.error || 'Gagal mengirim ke printer!'));
  };
  const submitStockUpdate = () => {
    if (!stockReason) return alert("Wajib diisi!");
    axios.patch(`${API_URL}/api/admin/inventory/${selectedMaterial.id}`, { stock: newStockVal, reason: stockReason, updated_by: username }).then(() => { alert('Update sukses!'); setShowStockModal(false); fetchData(); }).catch(() => alert('Gagal!'));
  };
  const submitPromo = () => {
    if (promoForm.menu_item_ids.length === 0 || !promoForm.value || !promoForm.end_date) return alert("Pilih minimal 1 menu dan isi semua data!");
    axios.post(`${API_URL}/api/admin/promotions`, promoForm).then(() => { alert('Sukses!'); setShowPromoModal(false); setPromoForm({ menu_item_ids: [], name: '', type: 'percent', value: '', end_date: '' }); fetchData(); });
  };
  const deletePromo = (id) => { if (window.confirm("Hapus diskon?")) axios.delete(`${API_URL}/api/admin/promotions/${id}`).then(() => fetchData()); };
  const submitUser = () => {
    if (!userForm.username || !userForm.password) return alert("Username & Password wajib diisi!");
    axios.post(`${API_URL}/api/admin/users`, userForm).then(res => { alert(res.data.message); setShowUserModal(false); setUserForm({ username: '', password: '', role: 'kasir' }); fetchData(); }).catch(err => alert(err.response?.data?.error || "Gagal membuat akun"));
  };
  // --- POS KASIR MANUAL ---
  const [posCart, setPosCart] = useState([]);
  const [posTable, setPosTable] = useState('');
  const [posSearch, setPosSearch] = useState('');
  const addPosItem = (menu) => {
    const exist = posCart.find(i => i.id === menu.id);
    if (exist) {
      setPosCart(posCart.map(i => i.id === menu.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setPosCart([...posCart, { ...menu, qty: 1 }]);
    }
  }
  const reducePosItem = (menu) => {
    const exist = posCart.find(i => i.id === menu.id);
    if (exist) {
      if (exist.qty === 1) { setPosCart(posCart.filter(i => i.id !== menu.id)); }
      else { setPosCart(posCart.map(i => i.id === menu.id ? { ...i, qty: i.qty - 1 } : i)); }
    }
  }
  const posTotal = posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const submitPosOrder = () => {
    if (!posTable || posCart.length === 0) return alert("Pilih meja dan menu!");
    axios.post(`${API_URL}/api/checkout`, { table_id: posTable, items: posCart.map(i => ({ menu_item_id: i.id, quantity: i.qty })) }).then(() => { alert("Pesanan Kasir masuk!"); setPosCart([]); setPosTable(''); fetchData(); setActiveTab('orders'); });
  }

  const lowStockCount = inventory.filter(i => i.current_stock <= i.min_stock_level).length;

  if (!isAuthenticated) return (
    <div className="login-container">
      <div className="login-box">
        <div style={{ marginBottom: '20px' }}>
          <img src={rcmLogo} alt="Raya Cafe" style={{ height: '72px', width: '72px', objectFit: 'contain', borderRadius: '50%', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', border: '2px solid rgba(255,255,255,0.15)', marginBottom: '16px' }} />
          <h2>Raya Cafe</h2>
          <p>Dashboard Manajemen — Masukkan kredensial Anda</p>
        </div>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="login-btn">Masuk Dashboard →</button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '0.78rem', color: 'rgba(200,170,145,0.45)' }}>© 2026 Raya Cafe Madiun</p>
      </div>
    </div>
  );
  return (
    <div className="admin-container">
      {/* MODAL KONFIRMASI RESERVASI (KERANJANG EVENT MULTIPLE MENU) */}
      {showResvModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Konfirmasi {selectedResv.reservation_type === 'event' ? 'EVENT' : 'MEJA'}: {selectedResv.customer_name}</h3>
            <p>Untuk <strong>{selectedResv.pax_count} orang</strong>.</p>
            <div className="modal-form">
              <label>Plot ke Meja:</label>
              <select value={selectedTableId} onChange={(e) => setSelectedTableId(e.target.value)}>
                <option value="">-- Pilih Meja --</option>
                {[...Array(50)].map((_, i) => <option key={i + 1} value={i + 1}>Meja {i + 1}</option>)}
              </select>
              {selectedResv.reservation_type === 'event' && (
                <>
                  <label>Jenis Hidangan Event:</label>
                  <select
                    value={eventMode}
                    onChange={e => setEventMode(e.target.value)}
                    style={{ background: '#fdf2e9', border: '1px solid #e67e22', fontWeight: 'bold' }}
                  >
                    <option value="paket">🍱 Menggunakan Paket</option>
                    <option value="pilih">🍲 Memilih Beberapa Menu</option>
                  </select>
                  {/* MINI KERANJANG UNTUK EVENT */}
                  {eventMode === 'pilih' && (
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
                      <label>Tambah Makanan/Minuman ke Keranjang Event:</label>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <select value={eventMenuDropdown} onChange={(e) => setEventMenuDropdown(e.target.value)}>
                          <option value="">-- Cari Menu --</option>
                          {menus.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                        </select>
                        <button type="button" className="btn-process" onClick={() => {
                          if (!eventMenuDropdown) return;
                          const m = menus.find(x => x.id === parseInt(eventMenuDropdown));
                          const exist = eventCart.find(x => x.id === m.id);
                          if (exist) setEventCart(eventCart.map(x => x.id === m.id ? { ...x, qty: x.qty + 1 } : x));
                          else setEventCart([...eventCart, { ...m, qty: 1 }]);
                          setEventMenuDropdown('');
                        }}>Tambah</button>
                      </div>
                      {eventCart.length > 0 && (
                        <ul style={{ listStyle: 'none', background: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #eee' }}>
                          {eventCart.map(c => (
                            <li key={c.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', borderBottom: '1px dashed #eee', paddingBottom: '5px' }}>
                              <span><strong>{c.qty}x</strong> {c.name}</span>
                              <button type="button" style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => {
                                setEventCart(eventCart.filter(x => x.id !== c.id));
                              }}>Hapus</button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {eventMode === 'paket' && (
                    <select value={selectedPackageId} onChange={(e) => setSelectedPackageId(e.target.value)}>
                      <option value="">-- Pilih Paket Event --</option>
                      {packages.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                  )}
                </>
              )}
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowResvModal(false)}>Batal</button>
                <button className="btn-ready" onClick={selectedResv.reservation_type === 'event' ? submitEventConfirmation : confirmMejaBiasa}>Konfirmasi &amp; Simpan</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* MODAL PRINT EVENT */}
      {showPrintEventModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>🧾 Atur Total Tagihan Event</h3>
            <p style={{ color: '#666', marginBottom: '5px' }}>Untuk: <strong>{selectedResv?.customer_name}</strong> &nbsp;|&nbsp; <strong>{selectedResv?.pax_count} Pax</strong></p>
            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '15px' }}>Sistem telah menghitung otomatis. Ubah jika ada diskon khusus.</p>
            <div className="modal-form">
              <label>Total Harga Final (Rp):</label>
              <input type="number" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--coffee-main)' }} value={eventTotalAmount} onChange={(e) => setEventTotalAmount(e.target.value)} />
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowPrintEventModal(false)}>Batal</button>
                <button className="btn-ready" onClick={submitEventPrint}>Preview Nota &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* MODAL PREVIEW NOTA ORDER BIASA */}
      {showOrderPreviewModal && previewOrder && (
        <div className="modal-overlay" style={{ zIndex: 2000 }}>
          <div className="modal-content" style={{ maxWidth: '420px', padding: 0, borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #6f4e37, #a0522d)', padding: '18px 24px', textAlign: 'center', color: 'white' }}>
              <img src={rcmLogo} alt="logo" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'contain', border: '2px solid rgba(255,255,255,0.5)', marginBottom: '8px' }} />
              <h3 style={{ margin: 0, fontSize: '1.1rem', letterSpacing: '1px' }}>RAYA CAFE MADIUN</h3>
              <p style={{ margin: '2px 0 0', fontSize: '0.75rem', opacity: 0.85 }}>Preview Nota — Belum Tercetak</p>
            </div>
            <div style={{ background: '#fffdf9', padding: '20px 24px', fontFamily: 'monospace' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888', marginBottom: '4px' }}>
                <span>Meja: <strong style={{ color: '#333' }}>{previewOrder.tables?.table_number || previewOrder.table_id}</strong></span>
                <span>{new Date().toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '12px' }}>
                Kasir: <strong style={{ color: '#6f4e37' }}>{username.toUpperCase()}</strong>
              </div>
              <div style={{ borderTop: '2px dashed #d4a96a', borderBottom: '2px dashed #d4a96a', padding: '12px 0', margin: '12px 0' }}>
                {previewOrder.order_items.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                    <span style={{ flex: 1 }}>{item.quantity}x {item.menu_items?.name}</span>
                    <span style={{ fontWeight: 'bold' }}>Rp {(Number(item.menu_items?.price || 0) * item.quantity).toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
              {Number(previewOrder.discount_amount) > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#888', marginBottom: '4px' }}>
                  <span>Subtotal</span><span>Rp {Number(previewOrder.subtotal).toLocaleString('id-ID')}</span>
                </div>
              )}
              {Number(previewOrder.discount_amount) > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#27ae60', marginBottom: '4px' }}>
                  <span>Diskon Promo</span><span>- Rp {Number(previewOrder.discount_amount).toLocaleString('id-ID')}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.05rem', color: '#6f4e37', borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '6px' }}>
                <span>TOTAL</span><span>Rp {Number(previewOrder.final_total).toLocaleString('id-ID')}</span>
              </div>
              <p style={{ textAlign: 'center', color: '#b8860b', fontSize: '0.75rem', marginTop: '14px', letterSpacing: '0.5px' }}>✨ Terima Kasih atas Kunjungan Anda ✨</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', padding: '14px 24px', background: '#f5f0eb', borderTop: '1px solid #e8ddd0' }}>
              <button className="btn-secondary" style={{ flex: 1 }} onClick={() => { setShowOrderPreviewModal(false); setPreviewOrder(null); }}>❌ Batal</button>
              <button className="btn-ready" style={{ flex: 2, background: 'linear-gradient(135deg, #e67e22, #d35400)' }} onClick={confirmOrderPrint}>✅ Konfirmasi &amp; Cetak</button>
            </div>
          </div>
        </div>
      )}
      {/* MODAL PREVIEW NOTA EVENT */}
      {showEventPreviewModal && selectedResv && (
        <div className="modal-overlay" style={{ zIndex: 2000 }}>
          <div className="modal-content" style={{ maxWidth: '440px', padding: 0, borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #6f4e37, #a0522d)', padding: '18px 24px', textAlign: 'center', color: 'white' }}>
              <img src={rcmLogo} alt="logo" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'contain', border: '2px solid rgba(255,255,255,0.5)', marginBottom: '8px' }} />
              <h3 style={{ margin: 0, fontSize: '1.1rem', letterSpacing: '1px' }}>RAYA CAFE MADIUN</h3>
              <p style={{ margin: '2px 0 0', fontSize: '0.75rem', opacity: 0.85 }}>Preview Nota Event — Belum Tercetak</p>
            </div>
            <div style={{ background: '#fffdf9', padding: '20px 24px', fontFamily: 'monospace', maxHeight: '65vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888', marginBottom: '2px' }}>
                <span>Meja: <strong style={{ color: '#333' }}>{selectedResv.table_id || '-'}</strong></span>
                <span>{new Date().toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '12px' }}>
                Kasir: <strong style={{ color: '#6f4e37' }}>{username.toUpperCase()}</strong>
              </div>
              <div style={{ borderTop: '2px dashed #d4a96a', borderBottom: '2px dashed #d4a96a', padding: '12px 0', margin: '12px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                  <span style={{ flex: 1 }}>Nama Pemesan</span>
                  <span style={{ fontWeight: 'bold' }}>{selectedResv.customer_name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                  <span style={{ flex: 1 }}>Tipe</span>
                  <span style={{ fontWeight: 'bold' }}>🎟️ Reservasi Event</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                  <span style={{ flex: 1 }}>Jumlah Pax</span>
                  <span style={{ fontWeight: 'bold' }}>{selectedResv.pax_count} Orang</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem' }}>
                  <span style={{ flex: 1 }}>Tanggal Event</span>
                  <span style={{ fontWeight: 'bold' }}>{new Date(selectedResv.reservation_date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
                {/* PAKET: tampilkan nama + deskripsi isi */}
                {(() => {
                  if (selectedResv.event_choice?.startsWith('paket_')) {
                    const pId = parseInt(selectedResv.event_choice.split('_')[1]);
                    const pkg = packages.find(p => p.id === pId);
                    if (!pkg) return null;
                    return (
                      <div style={{ background: '#fdf2e9', borderRadius: '8px', padding: '10px', border: '1px solid #e8c99a' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#6f4e37', marginBottom: '6px' }}>🍱 {pkg.name}</div>
                        <div style={{ fontSize: '0.82rem', color: '#555', lineHeight: '1.6' }}>
                          {pkg.description ? pkg.description.split(',').map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', marginBottom: '2px' }}>
                              <span style={{ color: '#a0522d', flexShrink: 0 }}>•</span>
                              <span>{item.trim()}</span>
                            </div>
                          )) : <span style={{ color: '#999' }}>-</span>}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#888', marginTop: '6px', borderTop: '1px dashed #e8c99a', paddingTop: '6px' }}>
                          Rp {Number(pkg.price).toLocaleString('id-ID')} /pax × {selectedResv.pax_count} pax
                        </div>
                      </div>
                    );
                  } else if (selectedResv.event_choice?.startsWith('pilih_')) {
                    const itemsStr = selectedResv.event_choice.replace('pilih_', '');
                    const items = itemsStr.split(',').map(pair => { const [mId, mQty] = pair.split(':'); const menu = menus.find(m => m.id === parseInt(mId)); return menu ? { name: menu.name, qty: parseInt(mQty) } : null; }).filter(Boolean);
                    return (
                      <div style={{ background: '#f0f8ff', borderRadius: '8px', padding: '10px', border: '1px solid #b8d4ec' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#2c6e9e', marginBottom: '6px' }}>🍲 Menu Pilihan (per pax)</div>
                        {items.map((it, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px', fontSize: '0.85rem' }}>
                            <span style={{ color: '#2c6e9e' }}>•</span>
                            <span>{it.qty}x {it.name}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.05rem', color: '#6f4e37', borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '6px' }}>
                <span>TOTAL</span><span>Rp {Number(eventTotalAmount).toLocaleString('id-ID')}</span>
              </div>
              <p style={{ textAlign: 'center', color: '#b8860b', fontSize: '0.75rem', marginTop: '14px', letterSpacing: '0.5px' }}>✨ Terima Kasih atas Kunjungan Anda ✨</p>
              {/* PERINGATAN STOK MANUAL untuk paket */}
              {selectedResv.event_choice?.startsWith('paket_') && (
                <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '8px', padding: '10px 12px', marginTop: '12px', fontSize: '0.78rem', color: '#856404' }}>
                  ⚠️ <strong>Pengingat Stok:</strong> Kurangi stok bahan baku secara manual di tab <strong>📦 Stok</strong> sesuai jumlah pax event ini.
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '10px', padding: '14px 24px', background: '#f5f0eb', borderTop: '1px solid #e8ddd0' }}>
              <button className="btn-secondary" style={{ flex: 1 }} onClick={() => { setShowEventPreviewModal(false); setShowPrintEventModal(true); }}>← Edit Total</button>
              <button className="btn-ready" style={{ flex: 2, background: 'linear-gradient(135deg, #8e44ad, #6c3483)' }} onClick={confirmEventPrint}>✅ Konfirmasi &amp; Cetak</button>
            </div>
          </div>
        </div>
      )}
      {/* MODAL RESERVASI MANUAL */}
      {showManualResv && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Tambah Reservasi Manual</h3>
            <div className="modal-form">
              <input type="text" placeholder="Nama Pelanggan" onChange={e => setManualResvForm({ ...manualResvForm, name: e.target.value })} />
              <input type="text" placeholder="No HP" onChange={e => setManualResvForm({ ...manualResvForm, phone: e.target.value })} />
              <input type="datetime-local" onChange={e => setManualResvForm({ ...manualResvForm, date: e.target.value })} />
              <input type="number" placeholder="Jumlah Orang (Pax)" onChange={e => setManualResvForm({ ...manualResvForm, pax: e.target.value })} />
              <select onChange={e => setManualResvForm({ ...manualResvForm, type: e.target.value, event_choice: e.target.value === 'event' ? 'paket' : null })}>
                <option value="meja">Meja Biasa</option>
                <option value="event">Event Khusus (Min H-3)</option>
              </select>
              {manualResvForm.type === 'event' && (
                <select onChange={e => setManualResvForm({ ...manualResvForm, event_choice: e.target.value })}>
                  <option value="paket">Ambil Paket Spesial</option>
                  <option value="pilih">Pesan Menu Reguler / Biasa</option>
                </select>
              )}
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowManualResv(false)}>Batal</button>
                <button className="btn-process" onClick={submitManualResv}>Simpan</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* MODAL STOK OPNAME */}
      {showStockModal && (<div className="modal-overlay"><div className="modal-content"><h3>Update Stok: {selectedMaterial?.name}</h3><div className="modal-form"><input type="number" value={newStockVal} onChange={(e) => setNewStockVal(e.target.value)} /><input type="text" placeholder="Alasan (Contoh: Tumpah, Basi)..." value={stockReason} onChange={(e) => setStockReason(e.target.value)} required /><div className="modal-actions"><button className="btn-secondary" onClick={() => setShowStockModal(false)}>Batal</button><button className="btn-process" onClick={submitStockUpdate}>Simpan</button></div></div></div></div>)}
      {/* MODAL PROMO */}
      {showPromoModal && (<div className="modal-overlay"><div className="modal-content"><h3>Tambah Diskon</h3><div className="modal-form">
      <div style={{maxHeight: '160px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', background: '#fff', marginBottom: '10px'}}>
        <div style={{fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px', borderBottom: '1px solid #eee', paddingBottom: '4px'}}>Pilih Menu (Bisa Lebih Dari Satu)</div>
        {menus.map(m => (
          <label key={m.id} style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0', cursor: 'pointer'}}>
            <input type="checkbox" value={m.id} checked={promoForm.menu_item_ids.includes(m.id.toString())} onChange={(e) => {
              const checked = e.target.checked; const val = e.target.value;
              setPromoForm(prev => ({ ...prev, menu_item_ids: checked ? [...prev.menu_item_ids, val] : prev.menu_item_ids.filter(id => id !== val) }));
            }} style={{width: 'auto', margin: 0}} />
            <span style={{fontSize:'0.88rem'}}>{m.name}</span>
          </label>
        ))}
      </div>
      <input type="text" placeholder="Nama Diskon" value={promoForm.name} onChange={(e) => setPromoForm({ ...promoForm, name: e.target.value })} /><select value={promoForm.type} onChange={(e) => setPromoForm({ ...promoForm, type: e.target.value })}><option value="percent">Persen (%)</option><option value="nominal">Rupiah (Rp)</option></select><input type="number" placeholder="Nilai" value={promoForm.value} onChange={(e) => setPromoForm({ ...promoForm, value: e.target.value })} /><input type="datetime-local" value={promoForm.end_date} onChange={(e) => setPromoForm({ ...promoForm, end_date: e.target.value })} /><div className="modal-actions"><button className="btn-secondary" onClick={() => setShowPromoModal(false)}>Batal</button><button className="btn-ready" onClick={submitPromo}>Simpan</button></div></div></div></div>)}
      {/* MODAL USERS */}
      {showUserModal && (<div className="modal-overlay"><div className="modal-content"><h3>Tambah Pegawai</h3><div className="modal-form"><input type="text" placeholder="Username" value={userForm.username} onChange={(e) => setUserForm({ ...userForm, username: e.target.value })} /><input type="password" placeholder="Password" value={userForm.password} onChange={(e) => setUserForm({ ...userForm, password: e.target.value })} /><select value={userForm.role} onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}><option value="kasir">Kasir</option><option value="admin">Admin / Manajer</option></select><div className="modal-actions"><button className="btn-secondary" onClick={() => setShowUserModal(false)}>Batal</button><button className="btn-ready" onClick={submitUser}>Simpan Akun</button></div></div></div></div>)}
      <header className="admin-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img src={rcmLogo} alt="Raya Cafe Logo" style={{ height: '48px', width: '48px', objectFit: 'contain', borderRadius: '50%', boxShadow: '0 4px 14px rgba(0,0,0,0.35)', border: '2px solid rgba(255,255,255,0.15)' }} />
          <div>
            <h1>Pusat Kendali Raya Cafe</h1>
            <span style={{ background: 'rgba(201,149,106,0.18)', color: '#e8c49a', padding: '4px 12px', borderRadius: '999px', fontSize: '0.78rem', display: 'inline-block', marginTop: '4px', border: '1px solid rgba(201,149,106,0.25)', fontWeight: '600', letterSpacing: '0.3px' }}>👤 {username.toUpperCase()} &nbsp;·&nbsp; {userRole.toUpperCase()}</span>
          </div>
        </div>
        <div className="header-actions">
          <Link to="/" className="link-btn" target="_blank">Lihat PWA</Link>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="admin-tabs">
        <button className={activeTab === 'orders' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('orders')}>🛎️ Live Orders</button>
        <button className={activeTab === 'pos' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('pos')}>🛒 POS Kasir</button>
        <button className={activeTab === 'reservations' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('reservations')}>📅 Reservasi</button>
        {userRole === 'admin' && (
          <>
            <button className={activeTab === 'inventory' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('inventory')} style={{ verticalAlign: 'top', padding: '6px 20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <span style={{ lineHeight: '1' }}>📦 Stok</span>
                {lowStockCount > 0 && <span className="alert-badge" style={{ margin: 0, padding: '2px 6px', fontSize: '0.65rem', lineHeight: '1' }}>{lowStockCount} Peringatan</span>}
              </div>
            </button>
            <button className={activeTab === 'promotions' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('promotions')}>🎁 Diskon</button>
            <button className={activeTab === 'reports' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('reports')}>📊 Laporan</button>
            <button className={activeTab === 'feedback' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('feedback')}>⭐ Ulasan</button>
            <button className={activeTab === 'users' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('users')}>👥 Akun</button>
          </>
        )}
      </div>
      <div className="admin-content">
        {/* FLOATING TOAST NOTIFICATION */}
        {lowStockCount > 0 && userRole === 'admin' && activeTab !== 'inventory' && (
          <div style={{ position: 'fixed', bottom: '30px', right: '30px', background: 'linear-gradient(135deg, var(--accent-danger), #a93226)', color: 'white', padding: '16px 24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', zIndex: 9999, display: 'flex', alignItems: 'center', gap: '16px', animation: 'slideUp 0.3s var(--ease-out)', border: '1px solid rgba(255,255,255,0.2)' }}>
             <span style={{ fontSize: '1.8rem' }}>⚠️</span>
             <div>
               <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '800', letterSpacing: '0.2px' }}>Peringatan Stok!</h4>
               <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>Ada <strong>{lowStockCount} bahan baku</strong> yang stoknya menipis/habis.</p>
             </div>
             <button onClick={() => setActiveTab('inventory')} style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: '800', fontSize: '0.85rem', transition: '0.2s' }}>Cek Stok</button>
          </div>
        )}
        {/* TAB: PWA ORDERS */}
        {activeTab === 'orders' && (
          <div className="order-grid">
            {orders.map(order => (
              <div key={order.id} className="order-card-admin">
                <div className="order-card-header"><h3>Meja {order.tables?.table_number || order.table_id}</h3><span className={`status-badge badge-${order.status}`}>{order.status.toUpperCase()}</span></div>
                <div className="order-card-body">
                  <ul className="order-item-list">{order.order_items.map(item => (<li key={item.id}><span>{item.quantity}x {item.menu_items?.name}</span></li>))}</ul>
                  <h4 className="order-total">Total: Rp {Number(order.final_total).toLocaleString('id-ID')}</h4>
                </div>
                <div className="order-card-actions">
                  {order.status === 'pending' && <button className="btn-process" onClick={() => updateOrderStatus(order.id, 'preparing')}>🔥 Proses</button>}
                  {order.status === 'preparing' && <button className="btn-ready" onClick={() => updateOrderStatus(order.id, 'ready')}>✅ Siap Saji</button>}
                  {order.status === 'ready' && <button className="btn-done" onClick={() => updateOrderStatus(order.id, 'served')}>🛎️ Antar ke Meja</button>}
                  {order.status === 'served' && <button className="btn-done" style={{ background: 'linear-gradient(135deg,var(--coffee-latte),var(--coffee-caramel))', color: 'var(--coffee-espresso)' }} onClick={() => triggerLegacyPrint(order)}>🖨️ Cetak Tagihan</button>}
                </div>
              </div>
            ))}
            {orders.length === 0 && (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 40px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)', border: '1.5px dashed rgba(92,61,46,0.12)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>☕</div>
                <h3 style={{ color: 'var(--coffee-dark)', marginBottom: '8px', fontWeight: '800' }}>Semua Pesanan Selesai</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Tidak ada pesanan aktif saat ini. Halaman akan memperbarui secara otomatis.</p>
              </div>
            )}
          </div>
        )}
        {/* TAB: POS KASIR MANUAL */}
        {activeTab === 'pos' && (
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            {/* Menu Grid */}
            <div style={{ flex: 2, background: 'var(--bg-surface)', padding: '28px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', border: '1.5px solid rgba(92,61,46,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--coffee-dark)' }}>🛒 Pilih Menu (Walk-in)</h3>
                <input
                  type="text"
                  placeholder="🔍 Cari Menu..."
                  value={posSearch}
                  onChange={e => setPosSearch(e.target.value)}
                  style={{ padding: '10px 18px', border: '1.5px solid rgba(92,61,46,0.14)', borderRadius: '999px', width: '220px', fontFamily: 'var(--font-main)', fontSize: '0.9rem', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>
              <div className="menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', padding: 0 }}>
                {menus.filter(m => m.name.toLowerCase().includes(posSearch.toLowerCase())).map(m => (
                  <div key={m.id} className="menu-card" style={{ padding: '14px', cursor: 'pointer' }} onClick={() => addPosItem(m)}>
                    <h4 style={{ fontSize: '0.97rem', marginBottom: '6px', color: 'var(--text-main)', fontWeight: '700' }}>{m.name}</h4>
                    <p style={{ color: 'var(--coffee-main)', fontWeight: '800', fontSize: '1rem' }}>Rp {Number(m.price).toLocaleString('id-ID')}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Keranjang */}
            <div style={{ flex: 1, background: 'linear-gradient(135deg, var(--bg-admin), #2d1a0a)', padding: '24px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', position: 'sticky', top: '20px' }}>
              <h3 style={{ color: 'var(--coffee-cream)', fontWeight: '800', fontSize: '1.15rem', marginBottom: '16px' }}>🧾 Keranjang Kasir</h3>
              <select style={{ width: '100%', padding: '11px 14px', margin: '0 0 16px', borderRadius: 'var(--radius-sm)', border: '1.5px solid rgba(201,149,106,0.25)', background: 'rgba(255,255,255,0.06)', color: 'var(--coffee-cream)', fontFamily: 'var(--font-main)', fontSize: '0.92rem' }} value={posTable} onChange={e => setPosTable(e.target.value)}>
                <option value="">-- Pilih Meja Pelanggan --</option>
                {[...Array(50)].map((_, i) => <option key={i+1} value={i+1}>Meja {i+1}</option>)}
              </select>
              <ul style={{ listStyle: 'none', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)', maxHeight: '320px', overflowY: 'auto' }}>
                {posCart.length === 0 && <li style={{ textAlign: 'center', color: 'rgba(200,170,145,0.4)', padding: '20px 0', fontSize: '0.88rem' }}>Keranjang kosong</li>}
                {posCart.map(c => (
                  <li key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.06)', padding: '10px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(201,149,106,0.15)', borderRadius: '999px', padding: '2px 4px', gap: '4px', border: '1px solid rgba(201,149,106,0.25)' }}>
                        <button onClick={() => reducePosItem(c)} style={{ background: 'var(--coffee-latte)', color: 'var(--coffee-espresso)', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '1rem' }}>-</button>
                        <span style={{ fontSize: '0.88rem', width: '22px', textAlign: 'center', fontWeight: '800', color: 'var(--coffee-cream)' }}>{c.qty}</span>
                        <button onClick={() => addPosItem(c)} style={{ background: 'var(--coffee-latte)', color: 'var(--coffee-espresso)', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '1rem' }}>+</button>
                      </div>
                      <span style={{ fontSize: '0.88rem', color: 'var(--coffee-cream)' }}>{c.name}</span>
                    </div>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--coffee-caramel)' }}>Rp {(c.price * c.qty).toLocaleString('id-ID')}</strong>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(201,149,106,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.9rem' }}>Total</span>
                  <strong style={{ color: 'var(--coffee-caramel)', fontSize: '1.3rem', fontWeight: '800', letterSpacing: '-0.4px' }}>Rp {posTotal.toLocaleString('id-ID')}</strong>
                </div>
                <button className="submit-order-btn" onClick={submitPosOrder} style={{ background: 'linear-gradient(135deg, var(--coffee-latte), var(--coffee-caramel))', color: 'var(--coffee-espresso)', boxShadow: '0 4px 16px rgba(201,149,106,0.35)' }}>✅ Kirim Pesanan</button>
              </div>
            </div>
          </div>
        )}
        {/* TAB: RESERVATIONS */}
        {activeTab === 'reservations' && (
          <div className="inventory-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}><h2>Daftar Reservasi</h2><button className="btn-ready" onClick={() => setShowManualResv(true)}>+ Tambah Manual</button></div>
            <div className="order-grid">
              {reservations.filter(resv => resv.status !== 'completed').map(resv => (
                <div key={resv.id} className="order-card-admin" style={{ borderTop: resv.reservation_type === 'event' ? '4px solid #8e44ad' : '4px solid var(--accent-info)' }}>
                  <div className="order-card-header"><h3>{resv.customer_name}</h3><span className={`status-badge badge-${resv.status === 'pending_wa' ? 'warning' : 'success'}`}>{resv.status.replace('_', ' ').toUpperCase()}</span></div>
                  <div className="order-card-body">
                    <div style={{ marginBottom: '12px' }}>
                      {resv.reservation_type === 'event'
                        ? <span style={{ background: 'linear-gradient(135deg,#8e44ad,#6c3483)', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.3px' }}>🎟️ EVENT · {resv.event_choice?.startsWith('paket') ? 'PAKET' : (resv.event_choice?.startsWith('pilih') ? 'PILIHAN MENU' : 'BELUM PILIH')}</span>
                        : <span style={{ background: 'linear-gradient(135deg, var(--accent-info), #1560a0)', color: 'white', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.3px' }}>🪑 MEJA BIASA</span>}
                    </div>
                    <p>Kontak: {resv.customer_phone}</p><p>Jumlah: <strong>{resv.pax_count} Orang</strong></p><p>Plot: <strong>{resv.table_id ? `Meja ${resv.table_id}` : 'Belum'}</strong></p><h4 className="order-total">{new Date(resv.reservation_date).toLocaleString('id-ID')}</h4>
                  </div>
                  <div className="order-card-actions">
                    {resv.status === 'pending_wa' && (
                      <button className="btn-ready" onClick={() => {
                        setSelectedResv(resv);
                        setEventCart([]);
                        if (resv.event_choice?.startsWith('pilih')) {
                          setEventMode('pilih'); setSelectedPackageId('');
                        } else {
                          setEventMode('paket');
                          if (resv.event_choice?.startsWith('paket_')) { setSelectedPackageId(resv.event_choice.split('_')[1]); }
                          else { setSelectedPackageId(''); }
                        }
                        setShowResvModal(true);
                      }}>✅ Konfirmasi &amp; Plot Meja</button>
                    )}
                    {/* TOMBOL SELESAI AKTIF UNTUK EVENT DAN MEJA BIASA */}
                    {resv.status === 'confirmed' && (resv.reservation_type === 'event' ? (
                      <button className="btn-process" style={{ background: 'linear-gradient(135deg, var(--coffee-latte), var(--coffee-caramel))', color: 'var(--coffee-espresso)' }} onClick={() => handleOpenPrintModal(resv)}>🖨️ Event Selesai &amp; Cetak</button>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                        <button className="btn-process" onClick={() => completeMejaBiasa(resv.id)}>🚶‍♂️ Tamu Datang &amp; Selesai</button>
                        <p style={{ margin: 0, fontSize: '0.72rem', color: 'var(--text-faint)', textAlign: 'center', lineHeight: '1.4' }}>Tagihan makan diproses via<br/><strong>Live Orders</strong> atau <strong>POS Kasir</strong></p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* TAB: LAPORAN HARIAN (REPORTS) */}
        {activeTab === 'reports' && userRole === 'admin' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* ── HEADER LAPORAN ── */}
            <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', borderRadius: '20px', padding: '32px 36px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 20px 60px rgba(15,52,96,0.3)' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'white', opacity: 0.65, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>Dashboard Analitik</p>
                <h2 style={{ fontSize: '1.9rem', color: 'white', fontWeight: '800', margin: 0, letterSpacing: '-0.5px'}}>📊 Laporan Penjualan</h2>
                <p style={{ color: 'white', opacity: 0.7, marginTop: '6px', fontSize: '0.9rem' }}>
                  {new Date(reportDate).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', opacity: 0.6, marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>Pilih Tanggal</label>
                <input
                  type="date"
                  value={reportDate}
                  onChange={e => setReportDate(e.target.value)}
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', color: 'white', padding: '10px 16px', fontSize: '0.95rem', cursor: 'pointer', backdropFilter: 'blur(10px)' }}
                />
              </div>
            </div>
            {!reportData ? (
              <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '16px', color: '#999', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '12px', animation: 'spin 2s linear infinite', display: 'inline-block' }}>⏳</div>
                <p style={{ fontSize: '1.1rem' }}>Memuat data laporan...</p>
              </div>
            ) : (
              <>
                {/* ── METRIC CARDS ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  {/* Card Pendapatan */}
                  <div style={{ background: 'white', borderRadius: '16px', padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderLeft: '5px solid #27ae60', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '80px', height: '80px', background: 'rgba(39,174,96,0.08)', borderRadius: '50%' }} />
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
                    <p style={{ color: '#888', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Total Pendapatan</p>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1a1a2e', lineHeight: 1.1 }}>Rp {reportData.total_revenue.toLocaleString('id-ID')}</h2>
                    <p style={{ color: '#27ae60', fontSize: '0.82rem', marginTop: '8px', fontWeight: '600' }}>✓ Sudah termasuk semua pembayaran</p>
                  </div>
                  {/* Card Transaksi */}
                  <div style={{ background: 'white', borderRadius: '16px', padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderLeft: '5px solid #2980b9', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '80px', height: '80px', background: 'rgba(41,128,185,0.08)', borderRadius: '50%' }} />
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🧾</div>
                    <p style={{ color: '#888', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Total Transaksi</p>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1a1a2e', lineHeight: 1.1 }}>{reportData.total_orders} <span style={{ fontSize: '1rem', fontWeight: '500', color: '#888' }}>pesanan</span></h2>
                    {reportData.total_orders > 0 && (
                      <p style={{ color: '#2980b9', fontSize: '0.82rem', marginTop: '8px', fontWeight: '600' }}>
                        ⌀ Rp {Math.round(reportData.total_revenue / reportData.total_orders).toLocaleString('id-ID')} / transaksi
                      </p>
                    )}
                  </div>
                  {/* Card Diskon */}
                  <div style={{ background: 'white', borderRadius: '16px', padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderLeft: '5px solid #e67e22', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '80px', height: '80px', background: 'rgba(230,126,34,0.08)', borderRadius: '50%' }} />
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎁</div>
                    <p style={{ color: '#888', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Diskon Diberikan</p>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1a1a2e', lineHeight: 1.1 }}>Rp {reportData.total_discount_given.toLocaleString('id-ID')}</h2>
                    {reportData.total_revenue > 0 && (
                      <p style={{ color: '#e67e22', fontSize: '0.82rem', marginTop: '8px', fontWeight: '600' }}>
                        {((reportData.total_discount_given / (reportData.total_revenue + reportData.total_discount_given)) * 100).toFixed(1)}% dari omzet kotor
                      </p>
                    )}
                  </div>
                </div>
                {/* ── BOTTOM ROW: Chart + Tabel ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '20px' }}>
                  {/* Bar Chart – Top Menu */}
                  <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                    <h3 style={{ fontWeight: '700', fontSize: '1.05rem', color: '#1a1a2e', marginBottom: '6px' }}>🏆 Menu Terlaris</h3>
                    <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '24px' }}>Berdasarkan jumlah porsi terjual hari ini</p>
                    {reportData.top_items.length === 0 ? (
                      <div style={{ textAlign: 'center', padding: '40px 0', color: '#ccc' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '12px' }}>📭</div>
                        <p>Belum ada penjualan hari ini</p>
                      </div>
                    ) : (() => {
                      const maxQty = Math.max(...reportData.top_items.map(i => i.qty));
                      const colors = ['#6f4e37', '#a0522d', '#c0874f', '#d4a96a', '#e8c99a'];
                      const ranks = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
                      return reportData.top_items.map((item, idx) => (
                        <div key={idx} style={{ marginBottom: '16px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.88rem', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>{ranks[idx]}</span>
                              <span style={{ maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</span>
                            </span>
                            <span style={{ fontWeight: '700', fontSize: '0.9rem', color: colors[0], background: '#fdf2e9', padding: '2px 10px', borderRadius: '20px' }}>{item.qty} porsi</span>
                          </div>
                          <div style={{ background: '#f0ebe5', borderRadius: '20px', height: '10px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${(item.qty / maxQty) * 100}%`, background: `linear-gradient(90deg, ${colors[idx] || '#d4a96a'}, ${colors[idx] || '#d4a96a'}cc)`, borderRadius: '20px', transition: 'width 0.8s ease' }} />
                          </div>
                        </div>
                      ));
                    })()}
                  </div>
                  {/* Detail Transaksi */}
                  <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div>
                        <h3 style={{ fontWeight: '700', fontSize: '1.05rem', color: '#1a1a2e', marginBottom: '4px' }}>📋 Detail Transaksi</h3>
                        <p style={{ color: '#aaa', fontSize: '0.8rem' }}>{reportData.orders_detail?.length || 0} transaksi tercatat</p>
                      </div>
                    </div>
                    <div style={{ overflowY: 'auto', maxHeight: '320px' }}>
                      {!reportData.orders_detail || reportData.orders_detail.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px 0', color: '#ccc' }}>
                          <div style={{ fontSize: '3rem', marginBottom: '12px' }}>📭</div>
                          <p>Tidak ada transaksi</p>
                        </div>
                      ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                          <thead>
                            <tr style={{ background: '#f8f6f3' }}>
                              <th style={{ padding: '10px 14px', textAlign: 'left', fontSize: '0.78rem', color: '#888', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', borderRadius: '8px 0 0 8px' }}>Order</th>
                              <th style={{ padding: '10px 14px', textAlign: 'left', fontSize: '0.78rem', color: '#888', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Meja</th>
                              <th style={{ padding: '10px 14px', textAlign: 'left', fontSize: '0.78rem', color: '#888', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Item</th>
                              <th style={{ padding: '10px 14px', textAlign: 'right', fontSize: '0.78rem', color: '#888', fontWeight: '700', letterSpacing: '0.5px', textTransform: 'uppercase', borderRadius: '0 8px 8px 0' }}>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reportData.orders_detail.map((ord, idx) => (
                              <tr key={ord.id} style={{ borderBottom: '1px solid #f0ebe5' }}>
                                <td style={{ padding: '12px 14px', fontSize: '0.82rem', color: '#555' }}>
                                  <span style={{ background: '#1a1a2e', color: 'white', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>#{ord.id}</span>
                                </td>
                                <td style={{ padding: '12px 14px', fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>
                                  Meja {ord.tables?.table_number || ord.table_id}
                                </td>
                                <td style={{ padding: '12px 14px', fontSize: '0.82rem', color: '#666', maxWidth: '160px' }}>
                                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block' }}>
                                    {ord.order_items?.map(i => `${i.quantity}x ${i.menu_items?.name}`).join(', ') || '-'}
                                  </span>
                                </td>
                                <td style={{ padding: '12px 14px', textAlign: 'right', fontWeight: '700', fontSize: '0.9rem', color: '#27ae60' }}>
                                  Rp {Number(ord.final_total).toLocaleString('id-ID')}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {/* TAB: INVENTORY */}
        {activeTab === 'inventory' && userRole === 'admin' && (
          <div className="inventory-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>{showInvHistory ? 'Riwayat Perubahan Stok' : 'Pemantauan Stok Real-Time'}</h2>
              <button className={showInvHistory ? "btn-secondary" : "btn-process"} onClick={() => setShowInvHistory(!showInvHistory)}>
                {showInvHistory ? 'Kembali ke Daftar Stok' : '📄 Lihat Riwayat (Audit)'}
              </button>
            </div>
            {!showInvHistory ? (
              <table className="inventory-table">
                <thead><tr><th>Nama Bahan</th><th>Stok Saat Ini</th><th>Batas Min</th><th>Aksi Opname</th></tr></thead>
                <tbody>
                  {inventory.map(item => (
                    <tr key={item.id} className={item.current_stock <= item.min_stock_level ? 'low-stock' : ''}>
                      <td>{item.name} {item.current_stock <= item.min_stock_level && <span className="alert-badge">⚠️ Stok Menipis</span>}</td>
                      <td><strong>{item.current_stock}</strong> <span style={{fontSize: '0.85em', color: '#666', fontWeight: 'normal'}}>{item.unit || ''}</span></td>
                      <td>{item.min_stock_level} <span style={{fontSize: '0.85em', color: '#666', fontWeight: 'normal'}}>{item.unit || ''}</span></td>
                      <td><button className="btn-update-stock" onClick={() => { setSelectedMaterial(item); setNewStockVal(item.current_stock); setStockReason(''); setShowStockModal(true); }}>Ubah Stok / Opname</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="inventory-table">
                <thead><tr><th>Waktu</th><th>Bahan</th><th>Perubahan Stok</th><th>Alasan</th><th>User</th></tr></thead>
                <tbody>
                  {invHistory.length === 0 ? <tr><td colSpan="5" style={{ textAlign: 'center' }}>Belum ada riwayat.</td></tr> : null}
                  {invHistory.map(hist => (
                    <tr key={hist.id}>
                      <td>{new Date(hist.created_at).toLocaleString('id-ID')}</td>
                      <td><strong>{hist.raw_materials?.name}</strong></td>
                      <td>
                        <span style={{ color: hist.new_stock > hist.old_stock ? 'green' : 'red', fontWeight: 'bold' }}>
                          {hist.old_stock} ➔ {hist.new_stock} <span style={{fontSize: '0.85em', fontWeight: 'normal'}}>{hist.raw_materials?.unit || ''}</span>
                        </span>
                      </td>
                      <td style={{ fontStyle: 'italic' }}>{hist.reason}</td>
                      <td><span className="badge" style={{ background: '#3498db', color: 'white', padding: '3px 8px', borderRadius: '10px' }}>{hist.updated_by}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        {/* TAB: PROMOTIONS */}
        {activeTab === 'promotions' && userRole === 'admin' && (
          <div className="inventory-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2>Manajemen Diskon</h2>
              <button className="btn-ready" onClick={() => setShowPromoModal(true)}>+ Tambah Diskon</button>
            </div>
            <table className="inventory-table">
              <thead><tr><th>Menu</th><th>Nama Promo</th><th>Potongan</th><th>Berakhir</th><th>Aksi</th></tr></thead>
              <tbody>
                {promotions.map(promo => (
                  <tr key={promo.id}>
                    <td><strong>{promo.menu_items?.name}</strong></td>
                    <td>{promo.name}</td>
                    <td>{promo.type === 'percent' ? `${promo.value}%` : `Rp ${Number(promo.value).toLocaleString('id-ID')}`}</td>
                    <td>{new Date(promo.end_date).toLocaleString('id-ID')}</td>
                    <td><button className="btn-process" style={{ backgroundColor: '#e74c3c' }} onClick={() => deletePromo(promo.id)}>Hapus</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* TAB: FEEDBACK */}
        {activeTab === 'feedback' && userRole === 'admin' && (
          <div className="inventory-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2>Ulasan & Rating Pelanggan</h2>
            </div>
            <table className="inventory-table">
              <thead><tr><th>Waktu</th><th>Menu</th><th>Rating</th><th>Ulasan</th></tr></thead>
              <tbody>
                {feedbacks.length === 0 ? <tr><td colSpan="4" style={{ textAlign: 'center' }}>Belum ada ulasan.</td></tr> : null}
                {feedbacks.map(fb => (
                  <tr key={fb.id}>
                    <td>{new Date(fb.created_at).toLocaleString('id-ID')}</td>
                    <td><strong>{fb.menu_items?.name}</strong></td>
                    <td>{'⭐'.repeat(fb.rating)}</td>
                    <td style={{ fontStyle: 'italic' }}>{fb.review_text || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* TAB: USERS */}
        {activeTab === 'users' && userRole === 'admin' && (
          <div className="inventory-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2>Manajemen Akun Pegawai</h2>
              <button className="btn-ready" onClick={() => setShowUserModal(true)}>+ Tambah Pegawai</button>
            </div>
            <table className="inventory-table">
              <thead><tr><th>Username</th><th>Peran (Role)</th><th>Tgl Terdaftar</th><th>Aksi</th></tr></thead>
              <tbody>
                {usersList.map(u => (
                  <tr key={u.id}>
                    <td><strong>{u.username}</strong></td>
                    <td><span className={`status-badge ${u.role === 'admin' ? 'badge-warning' : 'badge-preparing'}`}>{u.role.toUpperCase()}</span></td>
                    <td>{new Date(u.created_at).toLocaleDateString('id-ID')}</td>
                    <td>
                      {u.username !== username && (<button className="btn-process" style={{ backgroundColor: '#e74c3c' }} onClick={() => { if (window.confirm("Hapus akun ini?")) { axios.delete(`${API_URL}/api/admin/users/${u.id}`).then(() => fetchData()); } }}>Hapus</button>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
function App() { return <Router><Routes><Route path="/" element={<CustomerApp />} /><Route path="/admin" element={<AdminDashboard />} /></Routes></Router> }
export default App
