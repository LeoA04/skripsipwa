import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'

const API_URL = `http://${window.location.hostname}:3000`; 

const playNotificationSound = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
  audio.play().catch(e => console.log("Audio play di-block browser", e));
};

// 1. DASHBOARD PWA PELANGGAN
function CustomerApp() {
  const [menus, setMenus] = useState([]); const [filteredMenus, setFilteredMenus] = useState([]); const [categoriesList, setCategoriesList] = useState(['Semua']); const [cart, setCart] = useState([]); const [category, setCategory] = useState('Semua'); const [isCartOpen, setIsCartOpen] = useState(false); const [checkoutSuccess, setCheckoutSuccess] = useState(false); const [nomorMeja, setNomorMeja] = useState(1);
  const [lastOrderItems, setLastOrderItems] = useState([]); const [lastOrderId, setLastOrderId] = useState(null); const [feedbackData, setFeedbackData] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search); const mejaDariUrl = params.get('meja'); if (mejaDariUrl) setNomorMeja(parseInt(mejaDariUrl));
    axios.get(`${API_URL}/api/categories`).then(res => setCategoriesList(['Semua', ...res.data.map(c => c.name)])).catch(err => console.log(err));
    axios.get(`${API_URL}/api/menu`).then(res => { setMenus(res.data); setFilteredMenus(res.data); }).catch(err => console.log(err));
  }, []);

  const filterCategory = (cat) => { setCategory(cat); setFilteredMenus(cat === 'Semua' ? menus : menus.filter(m => m.categories?.name === cat)); }
  const updateQuantity = (item, qtyDelta) => { const existing = cart.find(c => c.id === item.id); if (existing) { const newQty = existing.qty + qtyDelta; setCart(newQty <= 0 ? cart.filter(c => c.id !== item.id) : cart.map(c => c.id === item.id ? { ...c, qty: newQty } : c)); } else if (qtyDelta > 0) setCart([...cart, { ...item, qty: 1, notes: '' }]); }
  const updateItemNote = (itemId, note) => setCart(cart.map(c => c.id === itemId ? { ...c, notes: note } : c));
  const getItemQuantity = (itemId) => { const item = cart.find(c => c.id === itemId); return item ? item.qty : 0; }
  
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0); const finalTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0); const originalTotal = cart.reduce((sum, item) => sum + (item.original_price * item.qty), 0);

  const handleCheckout = () => {
    axios.post(`${API_URL}/api/checkout`, { table_id: nomorMeja, items: cart.map(item => ({ menu_item_id: item.id, quantity: item.qty, notes: item.notes })) })
      .then((res) => { setLastOrderId(res.data.data.id); setLastOrderItems(cart); setCart([]); setIsCartOpen(false); setCheckoutSuccess(true); }).catch(err => alert('Gagal Checkout: ' + (err.response?.data?.error || err.message)));
  }
  const submitFeedback = () => {
    const feedbacks = Object.keys(feedbackData).map(menuId => ({ menu_item_id: menuId, rating: feedbackData[menuId].rating || 5, review_text: feedbackData[menuId].review || '' }));
    if (feedbacks.length === 0) return alert("Beri rating minimal 1 menu.");
    axios.post(`${API_URL}/api/feedback`, { order_id: lastOrderId, feedbacks }).then(() => { alert("Terima kasih!"); setCheckoutSuccess(false); setFeedbackData({}); }).catch(err => alert("Gagal."));
  };

  if (checkoutSuccess) {
    return (
      <div className="app-container"><header className="header confirmation-header"><h2>Pesanan Berhasil!</h2></header>
        <div className="confirmation-page-content"><div className="success-icon">✓</div><p>Pesanan sedang disiapkan.</p>
          <div style={{marginTop: '30px', width: '100%', textAlign: 'left'}}><h3 style={{color: '#8B4513', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '15px'}}>Bantu Kami Lebih Baik! 🌟</h3>
            {lastOrderItems.map(item => (<div key={item.id} style={{background: '#f9f9f9', padding: '15px', borderRadius: '10px', marginBottom: '10px'}}><h4 style={{marginBottom: '10px'}}>{item.name}</h4><select style={{width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc'}} onChange={(e) => setFeedbackData({...feedbackData, [item.id]: {...feedbackData[item.id], rating: e.target.value}})} defaultValue="5"><option value="5">⭐⭐⭐⭐⭐ (Sangat Enak)</option><option value="4">⭐⭐⭐⭐ (Enak)</option><option value="3">⭐⭐⭐ (Biasa Saja)</option><option value="2">⭐⭐ (Kurang Enak)</option><option value="1">⭐ (Tidak Enak)</option></select><input type="text" placeholder="Ulasan (opsional)..." style={{width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc'}} onChange={(e) => setFeedbackData({...feedbackData, [item.id]: {...feedbackData[item.id], review: e.target.value}})} /></div>))}
            <button className="submit-order-btn" style={{marginTop: '15px'}} onClick={submitFeedback}>Kirim Ulasan</button><button className="btn-secondary" style={{width: '100%', marginTop: '10px', padding: '15px', borderRadius: '10px'}} onClick={() => setCheckoutSuccess(false)}>Lewati & Kembali</button></div>
        </div>
      </div>
    )
  }

  if (isCartOpen) {
    return (
      <div className="app-container"><header className="header cart-header"><button className="back-btn" onClick={() => setIsCartOpen(false)}>❮</button><h2>Keranjang Anda</h2></header>
        <div className="cart-page-content">
          {cart.map(item => (<div key={item.id} className="cart-item-row-wrapper"><div className="cart-item-row"><div className="cart-item-info"><h4>{item.name} {item.original_price > item.price && <span className="discount-badge-small">Promo</span>}</h4><div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>{item.original_price > item.price && <p className="original-price-small">Rp {item.original_price.toLocaleString('id-ID')}</p>}<p>Rp {item.price.toLocaleString('id-ID')} x {item.qty}</p></div></div><strong>Rp {(item.price * item.qty).toLocaleString('id-ID')}</strong></div><input type="text" className="note-input" placeholder="Tulis catatan..." value={item.notes} onChange={(e) => updateItemNote(item.id, e.target.value)} /></div>))}
          <div className="cart-summary-box"><p className="total-items">Jumlah Item: {totalItems}</p>{originalTotal > finalTotal && <p style={{color: '#28a745', fontWeight: 'bold', marginBottom: '10px'}}>Hemat: Rp {(originalTotal - finalTotal).toLocaleString('id-ID')}</p>}<h3>Total: Rp {finalTotal.toLocaleString('id-ID')}</h3><button className="submit-order-btn" onClick={handleCheckout}>Pesan Sekarang</button></div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container"><header className="header"><h1>Raya Cafe Madiun</h1><p>Self-Order Meja {nomorMeja}</p><div className="category-tabs">{categoriesList.map(cat => <button key={cat} className={category === cat ? 'active-tab' : 'tab'} onClick={() => filterCategory(cat)}>{cat}</button>)}</div></header>
      <div className="menu-grid">{filteredMenus.map(menu => {
          const qtyInCart = getItemQuantity(menu.id); const isDiscounted = menu.original_price > menu.price;
          return (<div key={menu.id} className="menu-card"><div style={{display: 'flex', justifyContent: 'space-between'}}><span className="badge">{menu.categories?.name || 'Menu'}</span>{isDiscounted && <span className="badge-promo">Diskon!</span>}</div><h3>{menu.name}</h3><p className="description">{menu.description}</p><div className="card-footer-row"><div className="price-container">{isDiscounted && <p className="original-price">Rp {menu.original_price.toLocaleString('id-ID')}</p>}<p className="price">Rp {menu.price.toLocaleString('id-ID')}</p></div>{qtyInCart > 0 ? (<div className="qty-control-btn"><button onClick={() => updateQuantity(menu, -1)}>−</button><span>{qtyInCart}</span><button onClick={() => updateQuantity(menu, 1)}>+</button></div>) : <button className="add-btn" onClick={() => updateQuantity(menu, 1)}>Tambah</button>}</div></div>);
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
  
  const [invHistory, setInvHistory] = useState([]); const [showInvHistory, setShowInvHistory] = useState(false);
  const [showStockModal, setShowStockModal] = useState(false); const [selectedMaterial, setSelectedMaterial] = useState(null); const [newStockVal, setNewStockVal] = useState(''); const [stockReason, setStockReason] = useState('');

  const [showPromoModal, setShowPromoModal] = useState(false); const [promoForm, setPromoForm] = useState({ menu_item_id: '', name: '', type: 'percent', value: '', end_date: '' });
  const [showUserModal, setShowUserModal] = useState(false); const [userForm, setUserForm] = useState({ username: '', password: '', role: 'kasir' });

  const prevOrderCount = useRef(0);
  const prevResvCount = useRef(0);

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
    
    if (activeTab === 'inventory') {
        axios.get(`${API_URL}/api/admin/inventory`).then(res => setInventory(res.data)).catch(err => console.log(err));
        if (showInvHistory) axios.get(`${API_URL}/api/admin/inventory-history`).then(res => setInvHistory(res.data)).catch(err => console.log(err));
    }
    if (activeTab === 'promotions') axios.get(`${API_URL}/api/admin/promotions`).then(res => setPromotions(res.data)).catch(err => console.log(err));
    if (activeTab === 'feedback') axios.get(`${API_URL}/api/admin/feedback`).then(res => setFeedbacks(res.data)).catch(err => console.log(err));
    if (activeTab === 'users') axios.get(`${API_URL}/api/admin/users`).then(res => setUsersList(res.data)).catch(err => console.log(err));
    if (activeTab === 'reports') axios.get(`${API_URL}/api/admin/reports?date=${reportDate}`).then(res => setReportData(res.data)).catch(err => console.log(err));
  };
  
  useEffect(() => { fetchData(); const interval = setInterval(fetchData, 5000); return () => clearInterval(interval); }, [isAuthenticated, activeTab, showInvHistory, reportDate]);

  const updateOrderStatus = (id, newStatus) => { axios.patch(`${API_URL}/api/admin/orders/${id}/status`, { status: newStatus }).then(() => fetchData()); };
  const triggerLegacyPrint = (id) => { axios.post(`${API_URL}/api/admin/orders/${id}/print`).then(res => { alert(res.data.message); fetchData(); }).catch(err => alert("Gagal cetak")); };
  
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
    if(window.confirm("Tamu sudah datang? Reservasi Meja ini akan ditandai selesai dan disembunyikan.")) {
        axios.patch(`${API_URL}/api/admin/reservations/${id}/status`, { status: 'completed' })
        .then(res => { alert("Reservasi selesai!"); fetchData(); })
        .catch(err => alert("Gagal menyelesaikan reservasi."));
    }
  };

  const submitManualResv = () => { 
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
    axios.post(`${API_URL}/api/admin/reservations/${selectedResv.id}/print`, { total_amount: eventTotalAmount }).then(res => { alert(res.data.message); setShowPrintEventModal(false); setEventTotalAmount(''); fetchData(); }).catch(err => alert(err.response?.data?.error || "Gagal mengirim ke printer!"));
  };

  const submitStockUpdate = () => {
    if (!stockReason) return alert("Wajib diisi!");
    axios.patch(`${API_URL}/api/admin/inventory/${selectedMaterial.id}`, { stock: newStockVal, reason: stockReason, updated_by: username }).then(() => { alert('Update sukses!'); setShowStockModal(false); fetchData(); }).catch(() => alert('Gagal!'));
  };

  const submitPromo = () => {
    if(!promoForm.menu_item_id || !promoForm.value || !promoForm.end_date) return alert("Isi semua!");
    axios.post(`${API_URL}/api/admin/promotions`, promoForm).then(() => { alert('Sukses!'); setShowPromoModal(false); fetchData(); });
  };
  const deletePromo = (id) => { if(window.confirm("Hapus diskon?")) axios.delete(`${API_URL}/api/admin/promotions/${id}`).then(() => fetchData()); };

  const submitUser = () => {
    if(!userForm.username || !userForm.password) return alert("Username & Password wajib diisi!");
    axios.post(`${API_URL}/api/admin/users`, userForm).then(res => { alert(res.data.message); setShowUserModal(false); setUserForm({username:'', password:'', role:'kasir'}); fetchData(); }).catch(err => alert(err.response?.data?.error || "Gagal membuat akun"));
  };

  // --- POS KASIR MANUAL ---
  const [posCart, setPosCart] = useState([]); 
  const [posTable, setPosTable] = useState('');
  const [posSearch, setPosSearch] = useState(''); 

  const addPosItem = (menu) => { 
    const exist = posCart.find(i => i.id === menu.id); 
    if(exist) { 
      setPosCart(posCart.map(i => i.id === menu.id ? {...i, qty: i.qty+1} : i)); 
    } else { 
      setPosCart([...posCart, {...menu, qty: 1}]); 
    } 
  }
  const reducePosItem = (menu) => {
    const exist = posCart.find(i => i.id === menu.id);
    if(exist) {
      if(exist.qty === 1) { setPosCart(posCart.filter(i => i.id !== menu.id)); } 
      else { setPosCart(posCart.map(i => i.id === menu.id ? {...i, qty: i.qty-1} : i)); }
    }
  }

  const posTotal = posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const submitPosOrder = () => {
    if(!posTable || posCart.length === 0) return alert("Pilih meja dan menu!");
    axios.post(`${API_URL}/api/checkout`, { table_id: posTable, items: posCart.map(i => ({ menu_item_id: i.id, quantity: i.qty })) }).then(() => { alert("Pesanan Kasir masuk!"); setPosCart([]); setPosTable(''); fetchData(); setActiveTab('orders'); });
  }

  if (!isAuthenticated) return (<div className="login-container"><div className="login-box"><h2>🔒 Secure Login</h2><p>Masukkan Kredensial Pegawai</p><form onSubmit={handleLogin}><input type="text" placeholder="Username (contoh: admin)" value={username} onChange={e => setUsername(e.target.value)} required /><input type="password" placeholder="Password (contoh: admin123)" value={password} onChange={e => setPassword(e.target.value)} required /><button type="submit" className="login-btn">Masuk Dashboard</button></form></div></div>);

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
                {[...Array(50)].map((_, i) => <option key={i+1} value={i+1}>Meja {i+1}</option>)}
              </select>
              
              {selectedResv.reservation_type === 'event' && (
                <>
                  <label>Jenis Hidangan Event:</label>
                  <select 
                     value={eventMode} 
                     onChange={e => setEventMode(e.target.value)}
                     style={{background: '#fdf2e9', border: '1px solid #e67e22', fontWeight: 'bold'}}
                  >
                      <option value="paket">🍱 Menggunakan Paket</option>
                      <option value="pilih">🍲 Memilih Beberapa Menu</option>
                  </select>

                  {eventMode === 'paket' && (
                    <>
                      <select value={selectedPackageId} onChange={(e) => setSelectedPackageId(e.target.value)}>
                        <option value="">-- Pilih Paket Wedding/Spesial --</option>
                        {packages.map(p => <option key={p.id} value={p.id}>{p.name} - Rp {Number(p.price).toLocaleString()}</option>)}
                      </select>
                    </>
                  )}

                  {/* MINI KERANJANG UNTUK EVENT */}
                  {eventMode === 'pilih' && (
                    <div style={{background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #ddd'}}>
                      <label>Tambah Makanan/Minuman ke Keranjang Event:</label>
                      <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
                         <select value={eventMenuDropdown} onChange={(e) => setEventMenuDropdown(e.target.value)}>
                           <option value="">-- Cari Menu --</option>
                           {menus.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                         </select>
                         <button type="button" className="btn-process" onClick={() => {
                            if (!eventMenuDropdown) return;
                            const m = menus.find(x => x.id === parseInt(eventMenuDropdown));
                            const exist = eventCart.find(x => x.id === m.id);
                            if(exist) setEventCart(eventCart.map(x => x.id === m.id ? {...x, qty: x.qty+1} : x));
                            else setEventCart([...eventCart, {...m, qty: 1}]);
                            setEventMenuDropdown(''); 
                         }}>Tambah</button>
                      </div>
                      
                      {eventCart.length > 0 && (
                          <ul style={{listStyle: 'none', background: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #eee'}}>
                             {eventCart.map(c => (
                                <li key={c.id} style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px', borderBottom: '1px dashed #eee', paddingBottom: '5px'}}>
                                   <span><strong>{c.qty}x</strong> {c.name}</span>
                                   <button type="button" style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {
                                      setEventCart(eventCart.filter(x => x.id !== c.id));
                                   }}>Hapus</button>
                                </li>
                             ))}
                          </ul>
                      )}
                    </div>
                  )}
                </>
              )}
              
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => {setShowResvModal(false); setEventCart([]);}}>Batal</button>
                <button className="btn-ready" onClick={selectedResv.reservation_type === 'event' ? submitEventConfirmation : confirmMejaBiasa}>Setujui & Kunci</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CETAK TAGIHAN EVENT */}
      {showPrintEventModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Cetak Tagihan Event: {selectedResv?.customer_name}</h3>
            <p>Sistem telah menghitung total secara otomatis (<strong>{selectedResv?.pax_count} Pax</strong>). Anda tetap bisa mengubah angkanya jika ingin memberikan diskon.</p>
            <div className="modal-form">
              <label>Total Harga Final (Rp):</label>
              <input type="number" style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#8B4513'}} value={eventTotalAmount} onChange={(e) => setEventTotalAmount(e.target.value)} />
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowPrintEventModal(false)}>Batal</button>
                <button className="btn-ready" onClick={submitEventPrint}>Kirim ke Printer Legacy</button>
              </div>
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
              <input type="text" placeholder="Nama Pelanggan" onChange={e => setManualResvForm({...manualResvForm, name: e.target.value})} />
              <input type="text" placeholder="No HP" onChange={e => setManualResvForm({...manualResvForm, phone: e.target.value})} />
              <input type="datetime-local" onChange={e => setManualResvForm({...manualResvForm, date: e.target.value})} />
              <input type="number" placeholder="Jumlah Orang (Pax)" onChange={e => setManualResvForm({...manualResvForm, pax: e.target.value})} />
              
              <select onChange={e => setManualResvForm({...manualResvForm, type: e.target.value, event_choice: e.target.value === 'event' ? 'paket' : null})}>
                <option value="meja">Meja Biasa</option>
                <option value="event">Event Khusus (Min H-3)</option>
              </select>

              {manualResvForm.type === 'event' && (
                  <select onChange={e => setManualResvForm({...manualResvForm, event_choice: e.target.value})}>
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
      {showPromoModal && (<div className="modal-overlay"><div className="modal-content"><h3>Tambah Diskon</h3><div className="modal-form"><select value={promoForm.menu_item_id} onChange={(e) => setPromoForm({...promoForm, menu_item_id: e.target.value})}><option value="">-- Menu --</option>{menus.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}</select><input type="text" placeholder="Nama Diskon" value={promoForm.name} onChange={(e) => setPromoForm({...promoForm, name: e.target.value})} /><select value={promoForm.type} onChange={(e) => setPromoForm({...promoForm, type: e.target.value})}><option value="percent">Persen (%)</option><option value="nominal">Rupiah (Rp)</option></select><input type="number" placeholder="Nilai" value={promoForm.value} onChange={(e) => setPromoForm({...promoForm, value: e.target.value})} /><input type="datetime-local" value={promoForm.end_date} onChange={(e) => setPromoForm({...promoForm, end_date: e.target.value})} /><div className="modal-actions"><button className="btn-secondary" onClick={() => setShowPromoModal(false)}>Batal</button><button className="btn-ready" onClick={submitPromo}>Simpan</button></div></div></div></div>)}

      {/* MODAL USERS */}
      {showUserModal && (<div className="modal-overlay"><div className="modal-content"><h3>Tambah Pegawai</h3><div className="modal-form"><input type="text" placeholder="Username" value={userForm.username} onChange={(e) => setUserForm({...userForm, username: e.target.value})} /><input type="password" placeholder="Password" value={userForm.password} onChange={(e) => setUserForm({...userForm, password: e.target.value})} /><select value={userForm.role} onChange={(e) => setUserForm({...userForm, role: e.target.value})}><option value="kasir">Kasir</option><option value="admin">Admin / Manajer</option></select><div className="modal-actions"><button className="btn-secondary" onClick={() => setShowUserModal(false)}>Batal</button><button className="btn-ready" onClick={submitUser}>Simpan Akun</button></div></div></div></div>)}


      <header className="admin-header">
        <div><h1>Pusat Kendali Raya Cafe</h1><span style={{background: '#34495e', padding: '5px 10px', borderRadius: '5px', fontSize: '0.8rem', display: 'inline-block', marginTop: '5px'}}>👤 Login: <strong>{username.toUpperCase()} ({userRole.toUpperCase()})</strong></span></div>
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
            <button className={activeTab === 'inventory' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('inventory')}>📦 Stok</button>
            <button className={activeTab === 'promotions' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('promotions')}>🎁 Diskon</button>
            <button className={activeTab === 'reports' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('reports')}>📊 Laporan</button>
            <button className={activeTab === 'feedback' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('feedback')}>⭐ Ulasan</button>
            <button className={activeTab === 'users' ? 'adm-tab active' : 'adm-tab'} onClick={() => setActiveTab('users')}>👥 Akun</button>
          </>
        )}
      </div>

      <div className="admin-content">
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
                  {order.status === 'pending' && <button className="btn-process" onClick={() => updateOrderStatus(order.id, 'preparing')}>Proses</button>}
                  {order.status === 'preparing' && <button className="btn-ready" onClick={() => updateOrderStatus(order.id, 'ready')}>Siap</button>}
                  {order.status === 'ready' && <button className="btn-done" onClick={() => updateOrderStatus(order.id, 'served')}>Selesai</button>}
                  {order.status === 'served' && <button className="btn-done" style={{backgroundColor: '#e67e22'}} onClick={() => triggerLegacyPrint(order.id)}>Cetak Tagihan</button>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB: POS KASIR MANUAL */}
        {activeTab === 'pos' && (
          <div style={{display: 'flex', gap: '20px'}}>
             <div style={{flex: 2, background: 'white', padding: '20px', borderRadius: '10px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                   <h3 style={{margin: 0}}>Pilih Menu (Walk-in)</h3>
                   <input 
                      type="text" 
                      placeholder="🔍 Cari Menu..." 
                      value={posSearch} 
                      onChange={e => setPosSearch(e.target.value)} 
                      style={{padding: '8px 15px', border: '1px solid #ccc', borderRadius: '20px', width: '200px'}} 
                   />
                </div>
                
                <div className="menu-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
                   {menus.filter(m => m.name.toLowerCase().includes(posSearch.toLowerCase())).map(m => (
                      <div key={m.id} className="menu-card" style={{padding: '10px', cursor: 'pointer', border: '1px solid #ddd'}} onClick={() => addPosItem(m)}>
                         <h4 style={{fontSize: '1rem', marginBottom: '5px'}}>{m.name}</h4>
                         <p style={{color: '#8B4513', fontWeight: 'bold'}}>Rp {m.price.toLocaleString()}</p>
                      </div>
                   ))}
                </div>
             </div>
             
             <div style={{flex: 1, background: '#f8f9fa', padding: '20px', borderRadius: '10px', height: 'fit-content'}}>
                <h3>Keranjang Kasir</h3>
                <select style={{width: '100%', padding: '10px', margin: '15px 0', borderRadius: '5px', border: '1px solid #ccc'}} value={posTable} onChange={e => setPosTable(e.target.value)}>
                   <option value="">-- Pilih Meja Pelanggan --</option>
                   {[...Array(50)].map((_, i) => <option key={i+1} value={i+1}>Meja {i+1}</option>)}
                </select>
                
                <ul className="order-item-list" style={{background: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #eee', maxHeight: '300px', overflowY: 'auto'}}>
                   {posCart.length === 0 && <li style={{textAlign: 'center', color: '#999', padding: '10px 0'}}>Keranjang kosong</li>}
                   {posCart.map(c => (
                      <li key={c.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #eee', padding: '8px 0'}}>
                         <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <div style={{display: 'flex', alignItems: 'center', background: '#fdf2e9', borderRadius: '15px', padding: '2px', border: '1px solid #8B4513'}}>
                               <button onClick={() => reducePosItem(c)} style={{background: '#8B4513', color: 'white', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>-</button>
                               <span style={{fontSize: '0.85rem', width: '20px', textAlign: 'center', fontWeight: 'bold', color: '#8B4513'}}>{c.qty}</span>
                               <button onClick={() => addPosItem(c)} style={{background: '#8B4513', color: 'white', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>+</button>
                            </div>
                            <span style={{fontSize: '0.9rem'}}>{c.name}</span>
                         </div>
                         <strong style={{fontSize: '0.9rem'}}>Rp {(c.price*c.qty).toLocaleString()}</strong>
                      </li>
                   ))}
                </ul>
                
                <h3 style={{marginTop: '20px'}}>Total: Rp {posTotal.toLocaleString()}</h3>
                <button className="submit-order-btn" style={{marginTop: '15px'}} onClick={submitPosOrder}>Kirim Pesanan</button>
             </div>
          </div>
        )}

        {/* TAB: RESERVATIONS (DENGAN FILTER UNTUK MENYEMBUNYIKAN COMPLETED) */}
        {activeTab === 'reservations' && (
          <div className="inventory-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}><h2>Daftar Reservasi</h2><button className="btn-ready" onClick={() => setShowManualResv(true)}>+ Tambah Manual</button></div>
            <div className="order-grid">
              {reservations.filter(resv => resv.status !== 'completed').map(resv => (
                <div key={resv.id} className="order-card-admin" style={{ borderTop: resv.reservation_type === 'event' ? '4px solid #9b59b6' : '4px solid #3498db' }}>
                  <div className="order-card-header"><h3>{resv.customer_name}</h3><span className={`status-badge badge-${resv.status === 'pending_wa' ? 'warning' : 'success'}`}>{resv.status.replace('_', ' ').toUpperCase()}</span></div>
                  <div className="order-card-body">
                    <div style={{ marginBottom: '10px' }}>
                      {resv.reservation_type === 'event' ? <span style={{background: '#9b59b6', color: 'white', padding: '4px 8px', borderRadius: '5px', fontSize: '0.8rem'}}>🎟️ EVENT ({resv.event_choice?.startsWith('paket') ? 'PAKET' : (resv.event_choice?.startsWith('pilih') ? 'PILIHAN MENU' : 'BELUM PILIH')})</span> : <span style={{background: '#3498db', color: 'white', padding: '4px 8px', borderRadius: '5px', fontSize: '0.8rem'}}>🪑 MEJA</span>}
                    </div>
                    <p>Kontak: {resv.customer_phone}</p><p>Jumlah: <strong>{resv.pax_count} Orang</strong></p><p>Plot: <strong>{resv.table_id ? `Meja ${resv.table_id}` : 'Belum'}</strong></p><h4 className="order-total">{new Date(resv.reservation_date).toLocaleString('id-ID')}</h4>
                  </div>
                  <div className="order-card-actions">
                    {resv.status === 'pending_wa' && (
                        <button className="btn-ready" onClick={() => { 
                            setSelectedResv(resv); 
                            setEventCart([]); 
                            if(resv.event_choice?.startsWith('pilih')) {
                                setEventMode('pilih'); setSelectedPackageId('');
                            } else {
                                setEventMode('paket');
                                if(resv.event_choice?.startsWith('paket_')) { setSelectedPackageId(resv.event_choice.split('_')[1]); } 
                                else { setSelectedPackageId(''); }
                            }
                            setShowResvModal(true); 
                        }}>✅ Konfirmasi & Plot Meja</button>
                    )}
                    
                    {/* TOMBOL SELESAI AKTIF UNTUK EVENT DAN MEJA BIASA */}
                    {resv.status === 'confirmed' && (resv.reservation_type === 'event' ? ( 
                        <button className="btn-process" style={{backgroundColor: '#e67e22'}} onClick={() => handleOpenPrintModal(resv)}>🖨️ Event Selesai (Cetak & Hilangkan)</button> 
                    ) : ( 
                        <button className="btn-done" style={{backgroundColor: '#3498db'}} onClick={() => completeMejaBiasa(resv.id)}>🚶‍♂️ Tamu Datang (Selesai & Hilangkan)</button> 
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: LAPORAN HARIAN (REPORTS) */}
        {activeTab === 'reports' && userRole === 'admin' && reportData && (
          <div className="inventory-section">
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                <h2>Laporan Penjualan</h2>
                <input type="date" value={reportDate} onChange={e => setReportDate(e.target.value)} style={{padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem'}} />
             </div>
             <div style={{display: 'flex', gap: '20px', marginBottom: '30px'}}>
                <div style={{flex: 1, background: '#2ecc71', color: 'white', padding: '20px', borderRadius: '10px'}}><h3>Total Pendapatan</h3><h2 style={{fontSize: '2rem'}}>Rp {reportData.total_revenue.toLocaleString('id-ID')}</h2></div>
                <div style={{flex: 1, background: '#3498db', color: 'white', padding: '20px', borderRadius: '10px'}}><h3>Total Transaksi</h3><h2 style={{fontSize: '2rem'}}>{reportData.total_orders} Pesanan</h2></div>
                <div style={{flex: 1, background: '#e67e22', color: 'white', padding: '20px', borderRadius: '10px'}}><h3>Diskon Terpakai</h3><h2 style={{fontSize: '2rem'}}>Rp {reportData.total_discount_given.toLocaleString('id-ID')}</h2></div>
             </div>
             <h3>Menu Paling Laris Hari Ini:</h3>
             <ul style={{background: '#f9f9f9', padding: '20px', borderRadius: '10px', listStyle: 'none'}}>
                {reportData.top_items.length === 0 ? <li>Belum ada penjualan.</li> : reportData.top_items.map((item, idx) => (<li key={idx} style={{fontSize: '1.2rem', marginBottom: '10px'}}>🏅 {item.name} - <strong>{item.qty} Porsi</strong></li>))}
             </ul>
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
                      <td><strong>{item.current_stock}</strong></td>
                      <td>{item.min_stock_level}</td>
                      <td><button className="btn-update-stock" onClick={() => { setSelectedMaterial(item); setNewStockVal(item.current_stock); setStockReason(''); setShowStockModal(true); }}>Ubah Stok / Opname</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="inventory-table">
                <thead><tr><th>Waktu</th><th>Bahan</th><th>Perubahan Stok</th><th>Alasan</th><th>User</th></tr></thead>
                <tbody>
                  {invHistory.length === 0 ? <tr><td colSpan="5" style={{textAlign: 'center'}}>Belum ada riwayat.</td></tr> : null}
                  {invHistory.map(hist => (
                    <tr key={hist.id}>
                      <td>{new Date(hist.created_at).toLocaleString('id-ID')}</td>
                      <td><strong>{hist.raw_materials?.name}</strong></td>
                      <td>
                        <span style={{ color: hist.new_stock > hist.old_stock ? 'green' : 'red', fontWeight: 'bold' }}>
                          {hist.old_stock} ➔ {hist.new_stock}
                        </span>
                      </td>
                      <td style={{fontStyle: 'italic'}}>{hist.reason}</td>
                      <td><span className="badge" style={{background: '#3498db', color:'white', padding: '3px 8px', borderRadius:'10px'}}>{hist.updated_by}</span></td>
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
                    <td><button className="btn-process" style={{backgroundColor: '#e74c3c'}} onClick={() => deletePromo(promo.id)}>Hapus</button></td>
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
                {feedbacks.length === 0 ? <tr><td colSpan="4" style={{textAlign: 'center'}}>Belum ada ulasan.</td></tr> : null}
                {feedbacks.map(fb => (
                  <tr key={fb.id}>
                    <td>{new Date(fb.created_at).toLocaleString('id-ID')}</td>
                    <td><strong>{fb.menu_items?.name}</strong></td>
                    <td>{'⭐'.repeat(fb.rating)}</td>
                    <td style={{fontStyle: 'italic'}}>{fb.review_text || '-'}</td>
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
                      {u.username !== username && (<button className="btn-process" style={{backgroundColor: '#e74c3c'}} onClick={() => { if(window.confirm("Hapus akun ini?")) { axios.delete(`${API_URL}/api/admin/users/${u.id}`).then(() => fetchData()); } }}>Hapus</button>)}
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