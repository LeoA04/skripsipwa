-- ==========================================================
-- SCRIPT UPDATE DATABASE (BOM MINUMAN) RAYA CAFE MADIUN
-- ==========================================================

-- 1. HAPUS RESEP LAMA UNTUK KATEGORI MINUMAN (ID Menu 72 s/d 103)
DELETE FROM recipe_bom WHERE menu_item_id BETWEEN 72 AND 103;

-- 2. HAPUS BAHAN BAKU DUMMY LAMA (ID Bahan 72 s/d 103)
DELETE FROM raw_materials WHERE id BETWEEN 72 AND 103;

-- 3. INSERT BAHAN BAKU ASLI (GRANULAR)
-- Menggunakan ID yang lebih tinggi (201 dst) agar tidak bentrok dengan ID Lauk Pauk
INSERT INTO raw_materials (id, name, unit, current_stock, min_stock_level, min_stock_alert) VALUES
(201, 'Biji Kopi Espresso', 'gram', 5000, 500, 500),
(202, 'Kopi Bubuk Kasar', 'gram', 2000, 200, 200),
(203, 'Susu Segar (Fresh Milk)', 'ml', 10000, 1000, 1000),
(204, 'Susu Kental Manis', 'ml', 5000, 500, 500),
(205, 'Sirup Karamel', 'ml', 2000, 200, 200),
(206, 'Sirup Vanilla', 'ml', 2000, 200, 200),
(207, 'Sirup Hazelnut', 'ml', 2000, 200, 200),
(208, 'Gula Aren Cair', 'ml', 3000, 300, 300),
(209, 'Matcha Powder', 'gram', 1000, 100, 100),
(210, 'Coklat Powder', 'gram', 2000, 200, 200),
(211, 'Teh Hijau Celup', 'pcs', 100, 20, 20),
(212, 'Teh Celup Biasa', 'pcs', 500, 50, 50),
(213, 'Sirup Lecy', 'ml', 2000, 200, 200),
(214, 'Sirup Blue Curacao', 'ml', 1000, 100, 100),
(215, 'Sirup Mojito Mint', 'ml', 1000, 100, 100),
(216, 'Sirup Cocopandan', 'ml', 2000, 200, 200),
(217, 'Air Soda (Sprite/Club)', 'ml', 10000, 1500, 1500),
(218, 'Jeruk Nipis', 'pcs', 100, 10, 10),
(219, 'Daun Mint', 'pcs', 200, 20, 20),
(220, 'Buah Jeruk Peras', 'pcs', 200, 30, 30),
(221, 'Kelapa Muda (Batok)', 'pcs', 50, 10, 10),
(222, 'Buah Segar Mix (Juice)', 'porsi', 100, 10, 10),
(223, 'Alpukat Segar', 'pcs', 50, 10, 10),
(224, 'Yogurt Blend', 'ml', 2000, 200, 200),
(225, 'Air Mineral Botol', 'pcs', 200, 48, 48);

-- 4. INSERT RESEP (BOM) BARU UNTUK MASING-MASING MENU MINUMAN
-- Mengambil dari tabel menu_items minuman (ID 72 - 103)

-- Menu 72: Espresso Hot/Ice -> 20 gram Biji Kopi
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (72, 201, 20.00);

-- Menu 73: Americano Hot/Ice -> 15 gram Biji Kopi
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (73, 201, 15.00);

-- Menu 74: Cappucino Hot/Ice -> 20 gram Biji Kopi, 100 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(74, 201, 20.00), (74, 203, 100.00);

-- Menu 75: Caffe Late Hot/Ice -> 20 gram Biji Kopi, 150 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(75, 201, 20.00), (75, 203, 150.00);

-- Menu 76: Mochaccino Hot/Ice -> 20 gram Biji Kopi, 10 gram Coklat Powder, 100 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(76, 201, 20.00), (76, 210, 10.00), (76, 203, 100.00);

-- Menu 77: Caramel Hot/Ice -> 20 gram Biji Kopi, 30 ml Sirup Karamel, 100 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(77, 201, 20.00), (77, 205, 30.00), (77, 203, 100.00);

-- Menu 78: Machiato Hot/Ice -> 20 gram Biji Kopi, 50 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(78, 201, 20.00), (78, 203, 50.00);

-- Menu 79: Kopi Susu Raya Original -> 20 gram Biji Kopi, 30 ml Susu Kental Manis
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(79, 201, 20.00), (79, 204, 30.00);

-- Menu 80: Kopi Susu Raya Vanilla -> 20 gram Biji Kopi, 30 ml Sirup Vanilla, 100 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(80, 201, 20.00), (80, 206, 30.00), (80, 203, 100.00);

-- Menu 81: Kopi Susu Raya Gula Aren -> 20 gram Biji Kopi, 30 ml Gula Aren Cair, 100 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(81, 201, 20.00), (81, 208, 30.00), (81, 203, 100.00);

-- Menu 82: Vietnam Drip Hot/Ice -> 20 gram Biji Kopi, 40 ml Susu Kental Manis
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(82, 201, 20.00), (82, 204, 40.00);

-- Menu 83: Kopi Tubruk Hot -> 15 gram Kopi Bubuk Kasar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (83, 202, 15.00);

-- Menu 84: Matcha -> 20 gram Matcha Powder, 150 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(84, 209, 20.00), (84, 203, 150.00);

-- Menu 85: Green Tea -> 1 pcs Teh Hijau Celup
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (85, 211, 1.00);

-- Menu 86: Chocolate -> 30 gram Coklat Powder, 150 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(86, 210, 30.00), (86, 203, 150.00);

-- Menu 87: Vanilla -> 30 ml Sirup Vanilla, 150 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(87, 206, 30.00), (87, 203, 150.00);

-- Menu 88: Hazelnut -> 30 ml Sirup Hazelnut, 150 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(88, 207, 30.00), (88, 203, 150.00);

-- Menu 89: Lecy Squash -> 40 ml Sirup Lecy, 150 ml Air Soda
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(89, 213, 40.00), (89, 217, 150.00);

-- Menu 90: Blue Ocean -> 40 ml Sirup Blue Curacao, 150 ml Air Soda
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(90, 214, 40.00), (90, 217, 150.00);

-- Menu 91: Rainbow Ocean -> 40 ml Sirup Cocopandan, 150 ml Air Soda, 20 ml Sirup Blue Curacao
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(91, 216, 40.00), (91, 217, 150.00), (91, 214, 20.00);

-- Menu 92: Virgin Mojito -> 40 ml Sirup Mojito Mint, 150 ml Air Soda, 1 pcs Jeruk Nipis
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(92, 215, 40.00), (92, 217, 150.00), (92, 218, 1.00);

-- Menu 93: Lecy Mojito -> 40 ml Sirup Lecy, 150 ml Air Soda, 1 pcs Daun Mint
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(93, 213, 40.00), (93, 217, 150.00), (93, 219, 1.00);

-- Menu 94: Jus Semangka/Melon/Jambu/Apel -> 1 porsi Buah Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (94, 222, 1.00);

-- Menu 95: Jus Alpukat/Mix -> 1 pcs Alpukat Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (95, 223, 1.00);

-- Menu 96: Smoothies Lecy/Strawberry/Mango -> 50 ml Sirup Lecy, 100 ml Yogurt Blend
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(96, 213, 50.00), (96, 224, 100.00);

-- Menu 97: Tea Hot/Iced -> 1 pcs Teh Celup Biasa
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (97, 212, 1.00);

-- Menu 98: Jeruk Hot/Iced -> 2 pcs Buah Jeruk Peras
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (98, 220, 2.00);

-- Menu 99: Es Kuwut -> 1 pcs Kelapa Muda, 30 ml Sirup Cocopandan, 1 pcs Jeruk Nipis
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(99, 221, 1.00), (99, 216, 30.00), (99, 218, 1.00);

-- Menu 100: Es Degan Original -> 1 pcs Kelapa Muda
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (100, 221, 1.00);

-- Menu 101: Es Raya Spesial -> 50 ml Sirup Cocopandan, 50 ml Susu Segar
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(101, 216, 50.00), (101, 203, 50.00);

-- Menu 102: Soda Gembira -> 50 ml Susu Kental Manis, 150 ml Air Soda, 30 ml Sirup Cocopandan
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES 
(102, 204, 50.00), (102, 217, 150.00), (102, 216, 30.00);

-- Menu 103: Mineral Water -> 1 pcs Air Mineral Botol
INSERT INTO recipe_bom (menu_item_id, raw_material_id, quantity_required) VALUES (103, 225, 1.00);
