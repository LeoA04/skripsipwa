const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000'; // Pastikan backend jalan di port 3000

async function testLatency(endpoint, method = 'GET', payload = null) {
    const start = Date.now();
    try {
        if (method === 'GET') {
            await axios.get(`${API_BASE_URL}${endpoint}`);
        } else if (method === 'POST') {
            await axios.post(`${API_BASE_URL}${endpoint}`, payload);
        }
        const end = Date.now();
        const latency = end - start;
        console.log(`[SUKSES] ${method} ${endpoint} - Latency: ${latency} ms`);
        return latency;
    } catch (error) {
        const end = Date.now();
        const statusCode = error.response ? error.response.status : 'N/A';
        // Mengambil pesan error asli dari backend Node.js
        const errorMessage = error.response && error.response.data ? JSON.stringify(error.response.data) : error.message;
        
        console.log(`[GAGAL]  ${method} ${endpoint} - Latency: ${end - start} ms | Status: ${statusCode}`);
        console.log(`         Detail Error: ${errorMessage}`);
        return null;
    }
}

async function runTests() {
    console.log("=== MEMULAI PENGUJIAN API LATENCY ===");
    console.log("Memanaskan mesin...\n");
    
    // 1. Uji Endpoint Menu (GET)
    await testLatency('/api/menu', 'GET');

    // 2. Uji Endpoint Checkout (POST)
    const checkoutPayload = {
        items: [
            // PERHATIKAN: Pastikan ada menu dengan id '1' di tabel 'menu_items'
            { menu_item_id: 1, quantity: 1, notes: "Uji Coba Latency" } 
        ],
        table_id: 5 // <-- SUDAH DIPERBAIKI (sebelumnya nomor_meja)
    };
    await testLatency('/api/checkout', 'POST', checkoutPayload);

    // 3. Uji Endpoint Print Legacy (POST)
    // PERHATIKAN: Buka phpMyAdmin, lihat tabel 'orders'. 
    // Ganti angka '1' di bawah ini dengan ID Order yang BENAR-BENAR ADA.
    // Misalnya jika order ID yang ada adalah 15, ubah menjadi /api/admin/orders/15/print
    await testLatency('/api/admin/orders/10/print', 'POST'); 

    console.log("\n=== PENGUJIAN SELESAI ===");
}

runTests();