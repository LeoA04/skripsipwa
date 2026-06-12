-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2026 at 07:18 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `raya_cafe_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Olahan Ikan'),
(2, 'Olahan Seafood'),
(3, 'Olahan Daging'),
(4, 'Snack & Dessert'),
(5, 'Ricebowl + Telur'),
(6, 'Chicken'),
(7, 'Olahan Mie & Pasta'),
(8, 'Steak & Appetizer'),
(9, 'Vegetables and Soup'),
(10, 'Extra Value Package'),
(11, 'Coffee'),
(12, 'Non Coffee (Hot/Ice)'),
(13, 'Mocktail & Mojito'),
(14, 'Juice & Smoothies'),
(15, 'Additional Drinks');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `menu_item_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `review_text` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `order_id`, `menu_item_id`, `rating`, `review_text`, `created_at`) VALUES
(2, 13, 1, 4, 'Enak Banget, Cuman Bumbu nya kurang', '2026-06-05 22:48:42'),
(3, 18, 1, 5, 'Woww', '2026-06-09 20:48:08');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_history`
--

CREATE TABLE `inventory_history` (
  `id` int(11) NOT NULL,
  `raw_material_id` int(11) NOT NULL,
  `old_stock` decimal(10,2) NOT NULL,
  `new_stock` decimal(10,2) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `updated_by` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory_history`
--

INSERT INTO `inventory_history` (`id`, `raw_material_id`, `old_stock`, `new_stock`, `reason`, `updated_by`, `created_at`) VALUES
(1, 1, 99.00, 97.00, 'Basi', 'admin', '2026-05-21 08:32:47'),
(2, 1, 82.00, 80.00, 'Rusak', 'Irwan', '2026-06-09 21:23:35');

-- --------------------------------------------------------

--
-- Table structure for table `legacy_print_queue`
--

CREATE TABLE `legacy_print_queue` (
  `id` int(11) NOT NULL,
  `order_id_pwa` int(11) NOT NULL,
  `table_number` int(11) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `status_print` enum('belum_print','sudah_print') DEFAULT 'belum_print',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `status` enum('ready','habis') DEFAULT 'ready'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `category_id`, `name`, `description`, `price`, `image_url`, `status`) VALUES
(1, 1, 'Sate Gurame', 'Satu porsi Sate Gurame khas Raya Cafe', 75000.00, NULL, 'ready'),
(2, 1, 'Gurame Bakar Madu', 'Satu porsi Gurame Bakar Madu khas Raya Cafe', 75000.00, NULL, 'ready'),
(3, 1, 'Gurame Bakar Jimbaran', 'Satu porsi Gurame Bakar Jimbaran khas Raya Cafe', 80000.00, NULL, 'ready'),
(4, 1, 'Gurame Asam Manis', 'Satu porsi Gurame Asam Manis khas Raya Cafe', 80000.00, NULL, 'ready'),
(5, 1, 'Gurame Pasir Emas', 'Satu porsi Gurame Pasir Emas khas Raya Cafe', 75000.00, NULL, 'ready'),
(6, 1, 'Gurame Tiga Rasa', 'Satu porsi Gurame Tiga Rasa khas Raya Cafe', 75000.00, NULL, 'ready'),
(7, 1, 'Gurame Sambal Matah', 'Satu porsi Gurame Sambal Matah khas Raya Cafe', 80000.00, NULL, 'ready'),
(8, 1, 'Gurame Sambal Dabu-dabu', 'Satu porsi Gurame Sambal Dabu-dabu khas Raya Cafe', 80000.00, NULL, 'ready'),
(9, 1, 'Gurame Saus Tiram', 'Satu porsi Gurame Saus Tiram khas Raya Cafe', 80000.00, NULL, 'ready'),
(10, 1, 'Sup Gurame Kuah Bening', 'Satu porsi Sup Gurame Kuah Bening khas Raya Cafe', 75000.00, NULL, 'ready'),
(11, 2, 'Cumi Asam Manis', 'Satu porsi Cumi Asam Manis khas Raya Cafe', 45000.00, NULL, 'ready'),
(12, 2, 'Cumi Saus Padang', 'Satu porsi Cumi Saus Padang khas Raya Cafe', 45000.00, NULL, 'ready'),
(13, 2, 'Udang Tempura', 'Satu porsi Udang Tempura khas Raya Cafe', 45000.00, NULL, 'ready'),
(14, 2, 'Udang Saus Tiram', 'Satu porsi Udang Saus Tiram khas Raya Cafe', 45000.00, NULL, 'ready'),
(15, 2, 'Calamary Ring', 'Satu porsi Calamary Ring khas Raya Cafe', 25000.00, NULL, 'ready'),
(16, 2, 'Cumi Lada Hitam', 'Satu porsi Cumi Lada Hitam khas Raya Cafe', 45000.00, NULL, 'ready'),
(17, 3, 'Daging Sapi Lada Hitam', 'Satu porsi Daging Sapi Lada Hitam khas Raya Cafe', 55000.00, NULL, 'ready'),
(18, 3, 'Rica-rica Daging Sapi', 'Satu porsi Rica-rica Daging Sapi khas Raya Cafe', 50000.00, NULL, 'ready'),
(19, 3, 'Iga Bakar', 'Satu porsi Iga Bakar khas Raya Cafe', 55000.00, NULL, 'ready'),
(20, 4, 'Tempe Mendoan Goreng/Bakar', 'Satu porsi Tempe Mendoan Goreng/Bakar khas Raya Cafe', 20000.00, NULL, 'ready'),
(21, 4, 'French Fries Original/Balado/BBQ', 'Satu porsi French Fries Original/Balado/BBQ khas Raya Cafe', 20000.00, NULL, 'ready'),
(22, 4, 'Tahu Crispy Original/Balado/BBQ', 'Satu porsi Tahu Crispy Original/Balado/BBQ khas Raya Cafe', 20000.00, NULL, 'ready'),
(23, 4, 'Roti Bakar Coklat/Keju/Strawberry/Blueberry', 'Satu porsi Roti Bakar Coklat/Keju/Strawberry/Blueberry khas Raya Cafe', 20000.00, NULL, 'ready'),
(24, 4, 'Pisang Selingkuh', 'Satu porsi Pisang Selingkuh khas Raya Cafe', 23000.00, NULL, 'ready'),
(25, 4, 'Fruit Platter', 'Satu porsi Fruit Platter khas Raya Cafe', 23000.00, NULL, 'ready'),
(26, 4, 'Banana Choco Cheese', 'Satu porsi Banana Choco Cheese khas Raya Cafe', 18000.00, NULL, 'ready'),
(27, 4, 'Simple Platter', 'Satu porsi Simple Platter khas Raya Cafe', 18000.00, NULL, 'ready'),
(28, 4, 'Jamur Crispy', 'Satu porsi Jamur Crispy khas Raya Cafe', 18000.00, NULL, 'ready'),
(29, 4, 'Onion Ring', 'Satu porsi Onion Ring khas Raya Cafe', 18000.00, NULL, 'ready'),
(30, 5, 'Ayam Teriyaki', 'Satu porsi Ayam Teriyaki khas Raya Cafe', 25000.00, NULL, 'ready'),
(31, 5, 'Ayam Lada Hitam', 'Satu porsi Ayam Lada Hitam khas Raya Cafe', 25000.00, NULL, 'ready'),
(32, 5, 'Ayam Asam Manis', 'Satu porsi Ayam Asam Manis khas Raya Cafe', 25000.00, NULL, 'ready'),
(33, 5, 'Ayam Sambal Matah', 'Satu porsi Ayam Sambal Matah khas Raya Cafe', 25000.00, NULL, 'ready'),
(34, 5, 'Ayam Sambal Dabu-Dabu', 'Satu porsi Ayam Sambal Dabu-Dabu khas Raya Cafe', 25000.00, NULL, 'ready'),
(35, 5, 'Ayam Sambal Bawang', 'Satu porsi Ayam Sambal Bawang khas Raya Cafe', 25000.00, NULL, 'ready'),
(36, 5, 'Ayam Pasir Emas', 'Satu porsi Ayam Pasir Emas khas Raya Cafe', 30000.00, NULL, 'ready'),
(37, 5, 'Nasi Putih', 'Satu porsi Nasi Putih khas Raya Cafe', 7000.00, NULL, 'ready'),
(38, 6, 'Ayam Geprek', 'Satu porsi Ayam Geprek khas Raya Cafe', 18000.00, NULL, 'ready'),
(39, 6, 'Ayam Saus Inggris/Lada Hitam/Teriyaki', 'Satu porsi Ayam Saus Inggris/Lada Hitam/Teriyaki khas Raya Cafe', 35000.00, NULL, 'ready'),
(40, 6, 'Koloke Ayam', 'Satu porsi Koloke Ayam khas Raya Cafe', 35000.00, NULL, 'ready'),
(41, 6, 'Ayam Bakar Kampung Kecap/Madu', 'Satu porsi Ayam Bakar Kampung Kecap/Madu khas Raya Cafe', 40000.00, NULL, 'ready'),
(42, 6, 'Ayam Goreng Laos Kampung', 'Satu porsi Ayam Goreng Laos Kampung khas Raya Cafe', 35000.00, NULL, 'ready'),
(43, 6, 'Ayam Bakar Taliwang Kampung', 'Satu porsi Ayam Bakar Taliwang Kampung khas Raya Cafe', 40000.00, NULL, 'ready'),
(44, 7, 'Bakmi Kuah', 'Satu porsi Bakmi Kuah khas Raya Cafe', 23000.00, NULL, 'ready'),
(45, 7, 'Mie Goreng Djawa', 'Satu porsi Mie Goreng Djawa khas Raya Cafe', 30000.00, NULL, 'ready'),
(46, 7, 'Kwetiaw Goreng Ayam/Seafood', 'Satu porsi Kwetiaw Goreng Ayam/Seafood khas Raya Cafe', 35000.00, NULL, 'ready'),
(47, 7, 'Kwetiaw Siram Ayam/Seafood', 'Satu porsi Kwetiaw Siram Ayam/Seafood khas Raya Cafe', 37000.00, NULL, 'ready'),
(48, 7, 'Mie Goreng Pasir Emas', 'Satu porsi Mie Goreng Pasir Emas khas Raya Cafe', 35000.00, NULL, 'ready'),
(49, 7, 'Mie Goreng Seafood', 'Satu porsi Mie Goreng Seafood khas Raya Cafe', 35000.00, NULL, 'ready'),
(50, 7, 'Pasta Bolognese', 'Satu porsi Pasta Bolognese khas Raya Cafe', 30000.00, NULL, 'ready'),
(51, 7, 'Pasta Carbonara', 'Satu porsi Pasta Carbonara khas Raya Cafe', 30000.00, NULL, 'ready'),
(52, 8, 'Beef Steak', 'Satu porsi Beef Steak khas Raya Cafe', 55000.00, NULL, 'ready'),
(53, 8, 'Beef Crispy Steak', 'Satu porsi Beef Crispy Steak khas Raya Cafe', 45000.00, NULL, 'ready'),
(54, 8, 'Chicken Steak', 'Satu porsi Chicken Steak khas Raya Cafe', 35000.00, NULL, 'ready'),
(55, 8, 'Chicken Crispy Steak', 'Satu porsi Chicken Crispy Steak khas Raya Cafe', 30000.00, NULL, 'ready'),
(56, 8, 'Sup Jagung', 'Satu porsi Sup Jagung khas Raya Cafe', 30000.00, NULL, 'ready'),
(57, 8, 'Sup Asparagus', 'Satu porsi Sup Asparagus khas Raya Cafe', 35000.00, NULL, 'ready'),
(58, 8, 'Fruit Salad', 'Satu porsi Fruit Salad khas Raya Cafe', 25000.00, NULL, 'ready'),
(59, 9, 'Tumis Kangkung', 'Satu porsi Tumis Kangkung khas Raya Cafe', 13000.00, NULL, 'ready'),
(60, 9, 'Tumis Sawi Daging', 'Satu porsi Tumis Sawi Daging khas Raya Cafe', 15000.00, NULL, 'ready'),
(61, 9, 'Tumis Touge', 'Satu porsi Tumis Touge khas Raya Cafe', 15000.00, NULL, 'ready'),
(62, 9, 'Cah Brokoli Ayam/Seafood/Daging', 'Satu porsi Cah Brokoli Ayam/Seafood/Daging khas Raya Cafe', 35000.00, NULL, 'ready'),
(63, 9, 'Capcay Ayam/Seafood', 'Satu porsi Capcay Ayam/Seafood khas Raya Cafe', 30000.00, NULL, 'ready'),
(64, 9, 'Vegetable Soup', 'Satu porsi Vegetable Soup khas Raya Cafe', 25000.00, NULL, 'ready'),
(65, 9, 'Sup Oyong Bihun', 'Satu porsi Sup Oyong Bihun khas Raya Cafe', 25000.00, NULL, 'ready'),
(66, 9, 'Soto Ayam', 'Satu porsi Soto Ayam khas Raya Cafe', 23000.00, NULL, 'ready'),
(67, 9, 'Sapo Tahu Ayam/Seafood', 'Satu porsi Sapo Tahu Ayam/Seafood khas Raya Cafe', 40000.00, NULL, 'ready'),
(68, 9, 'Sop Iga', 'Satu porsi Sop Iga khas Raya Cafe', 55000.00, NULL, 'ready'),
(69, 10, 'Paket Ayam Geprek/Kremes/Bakar + Sup + Nasi + Fruit + Tea', 'Satu porsi Paket Ayam Geprek/Kremes/Bakar + Sup + Nasi + Fruit + Tea khas Raya Cafe', 30000.00, NULL, 'ready'),
(70, 10, 'Nasi Pecel + Telur Mata Sapi + Fruit + Tea', 'Satu porsi Nasi Pecel + Telur Mata Sapi + Fruit + Tea khas Raya Cafe', 20000.00, NULL, 'ready'),
(71, 10, 'Telur Geprek + Soup + Nasi + Fruit + Tea', 'Satu porsi Telur Geprek + Soup + Nasi + Fruit + Tea khas Raya Cafe', 23000.00, NULL, 'ready'),
(72, 11, 'Espresso Hot/Ice', 'Satu porsi Espresso Hot/Ice khas Raya Cafe', 14000.00, NULL, 'ready'),
(73, 11, 'Americano Hot/Ice', 'Satu porsi Americano Hot/Ice khas Raya Cafe', 22000.00, NULL, 'ready'),
(74, 11, 'Cappucino Hot/Ice', 'Satu porsi Cappucino Hot/Ice khas Raya Cafe', 25000.00, NULL, 'ready'),
(75, 11, 'Caffe Late Hot/Ice', 'Satu porsi Caffe Late Hot/Ice khas Raya Cafe', 25000.00, NULL, 'ready'),
(76, 11, 'Mochaccino Hot/Ice', 'Satu porsi Mochaccino Hot/Ice khas Raya Cafe', 25000.00, NULL, 'ready'),
(77, 11, 'Caramel Hot/Ice', 'Satu porsi Caramel Hot/Ice khas Raya Cafe', 25000.00, NULL, 'ready'),
(78, 11, 'Machiato Hot/Ice', 'Satu porsi Machiato Hot/Ice khas Raya Cafe', 27000.00, NULL, 'ready'),
(79, 11, 'Kopi Susu Raya Original', 'Satu porsi Kopi Susu Raya Original khas Raya Cafe', 17000.00, NULL, 'ready'),
(80, 11, 'Kopi Susu Raya Vanilla', 'Satu porsi Kopi Susu Raya Vanilla khas Raya Cafe', 17000.00, NULL, 'ready'),
(81, 11, 'Kopi Susu Raya Gula Aren', 'Satu porsi Kopi Susu Raya Gula Aren khas Raya Cafe', 17000.00, NULL, 'ready'),
(82, 11, 'Vietnam Drip Hot/Ice', 'Satu porsi Vietnam Drip Hot/Ice khas Raya Cafe', 19000.00, NULL, 'ready'),
(83, 11, 'Kopi Tubruk Hot', 'Satu porsi Kopi Tubruk Hot khas Raya Cafe', 17000.00, NULL, 'ready'),
(84, 12, 'Matcha', 'Satu porsi Matcha khas Raya Cafe', 25000.00, NULL, 'ready'),
(85, 12, 'Green Tea', 'Satu porsi Green Tea khas Raya Cafe', 25000.00, NULL, 'ready'),
(86, 12, 'Chocolate', 'Satu porsi Chocolate khas Raya Cafe', 25000.00, NULL, 'ready'),
(87, 12, 'Vanilla', 'Satu porsi Vanilla khas Raya Cafe', 25000.00, NULL, 'ready'),
(88, 12, 'Hazelnut', 'Satu porsi Hazelnut khas Raya Cafe', 25000.00, NULL, 'ready'),
(89, 13, 'Lecy Squash', 'Satu porsi Lecy Squash khas Raya Cafe', 22000.00, NULL, 'ready'),
(90, 13, 'Blue Ocean', 'Satu porsi Blue Ocean khas Raya Cafe', 25000.00, NULL, 'ready'),
(91, 13, 'Rainbow Ocean', 'Satu porsi Rainbow Ocean khas Raya Cafe', 25000.00, NULL, 'ready'),
(92, 13, 'Virgin Mojito', 'Satu porsi Virgin Mojito khas Raya Cafe', 22000.00, NULL, 'ready'),
(93, 13, 'Lecy Mojito', 'Satu porsi Lecy Mojito khas Raya Cafe', 22000.00, NULL, 'ready'),
(94, 14, 'Jus Semangka/Melon/Jambu/Apel', 'Satu porsi Jus Semangka/Melon/Jambu/Apel khas Raya Cafe', 17000.00, NULL, 'ready'),
(95, 14, 'Jus Alpukat/Mix', 'Satu porsi Jus Alpukat/Mix khas Raya Cafe', 20000.00, NULL, 'ready'),
(96, 14, 'Smoothies Lecy/Strawberry/Mango', 'Satu porsi Smoothies Lecy/Strawberry/Mango khas Raya Cafe', 22000.00, NULL, 'ready'),
(97, 15, 'Tea Hot/Iced', 'Satu porsi Tea Hot/Iced khas Raya Cafe', 7000.00, NULL, 'ready'),
(98, 15, 'Jeruk Hot/Iced', 'Satu porsi Jeruk Hot/Iced khas Raya Cafe', 10000.00, NULL, 'ready'),
(99, 15, 'Es Kuwut', 'Satu porsi Es Kuwut khas Raya Cafe', 18000.00, NULL, 'ready'),
(100, 15, 'Es Degan Original', 'Satu porsi Es Degan Original khas Raya Cafe', 15000.00, NULL, 'ready'),
(101, 15, 'Es Raya Spesial', 'Satu porsi Es Raya Spesial khas Raya Cafe', 25000.00, NULL, 'ready'),
(102, 15, 'Soda Gembira', 'Satu porsi Soda Gembira khas Raya Cafe', 20000.00, NULL, 'ready'),
(103, 15, 'Mineral Water', 'Satu porsi Mineral Water khas Raya Cafe', 6000.00, NULL, 'ready');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `table_id` int(11) NOT NULL,
  `status` enum('pending','preparing','ready','served','paid') DEFAULT 'pending',
  `subtotal` decimal(10,2) NOT NULL DEFAULT 0.00,
  `promo_id` int(11) DEFAULT NULL,
  `discount_amount` decimal(10,2) DEFAULT 0.00,
  `final_total` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `table_id`, `status`, `subtotal`, `promo_id`, `discount_amount`, `final_total`, `created_at`) VALUES
(10, 1, 'paid', 150000.00, NULL, 5250.00, 144750.00, '2026-05-26 02:09:57'),
(11, 5, 'paid', 75000.00, NULL, 0.00, 75000.00, '2026-05-31 08:12:29'),
(12, 5, 'paid', 75000.00, NULL, 0.00, 75000.00, '2026-05-31 08:13:33'),
(13, 1, 'paid', 75000.00, NULL, 0.00, 75000.00, '2026-06-05 22:48:13'),
(14, 3, 'paid', 875000.00, NULL, 0.00, 875000.00, '2026-06-09 20:32:19'),
(15, 1, 'paid', 150000.00, NULL, 0.00, 150000.00, '2026-06-09 20:34:02'),
(16, 1, 'paid', 375000.00, NULL, 0.00, 375000.00, '2026-06-09 20:34:26'),
(17, 1, 'paid', 150000.00, NULL, 0.00, 150000.00, '2026-06-09 20:47:25'),
(18, 1, 'paid', 75000.00, NULL, 0.00, 75000.00, '2026-06-09 20:48:04'),
(19, 2, 'paid', 125000.00, NULL, 0.00, 125000.00, '2026-06-09 20:49:34'),
(23, 1, 'paid', 215000.00, NULL, 0.00, 215000.00, '2026-06-09 21:19:24'),
(24, 1, 'paid', 60000.00, NULL, 0.00, 60000.00, '2026-06-09 21:20:33'),
(25, 3, 'paid', 50000.00, NULL, 0.00, 50000.00, '2026-06-09 21:21:51'),
(26, 3, 'paid', 159000.00, NULL, 0.00, 159000.00, '2026-06-09 21:22:48'),
(27, 1, 'paid', 75000.00, NULL, 0.00, 75000.00, '2026-06-10 04:36:58'),
(28, 2, 'paid', 300000.00, NULL, 0.00, 300000.00, '2026-06-10 04:45:03'),
(29, 1, 'paid', 75000.00, NULL, 0.00, 75000.00, '2026-06-10 10:09:01');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `menu_item_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `notes` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `menu_item_id`, `quantity`, `notes`) VALUES
(8, 10, 1, 1, ''),
(9, 10, 2, 1, ''),
(10, 11, 1, 1, 'Uji Coba Latency'),
(11, 12, 1, 1, 'Uji Coba Latency'),
(12, 13, 1, 1, ''),
(13, 15, 1, 1, ''),
(14, 15, 2, 1, ''),
(15, 16, 1, 5, ''),
(16, 17, 1, 1, ''),
(17, 17, 2, 1, ''),
(18, 18, 1, 1, ''),
(19, 27, 1, 1, ''),
(20, 29, 1, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `available_pax` int(11) DEFAULT 20
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `category`, `name`, `description`, `price`, `available_pax`) VALUES
(1, 'Event & Spesial', 'Arisan Package', 'Gurame Asam Manis, Ayam Lada Hitam, Mie Goreng Special, Capcay, Banana Choco Cheese, Mineral Water, Es Buah.', 60000.00, 20),
(2, 'Event & Spesial', 'Baby Shower Package', 'Sate Gurame, Ayam Pasir Emas, Mie Goreng Special, Capcay, Banana Choco Cheese, Mineral Water, Es Lemon Tea.', 60000.00, 20),
(3, 'Event & Spesial', 'Birthday Package', 'Ayam Bakar, Mie Goreng Djawa/Bihun Goreng Jamur, Capcay/Vegetable Soup with Sosis, Nasi Putih, Iced Lemon Tea, Pudding, Slice Fruit.', 55000.00, 20),
(4, 'Event & Spesial', 'Bridal Shower Package', 'Ayam Bakar Madu, Dori, Mie Goreng Spesial, Vegetable Soup, Banana Choco Cheese, Es Lemon Tea, Mineral Water.', 60000.00, 20),
(5, 'Event & Spesial', 'Engagement Package', 'Ayam Bakar Madu, Mie Goreng Djawa, Capjay, Nasi Putih, Es Buah, Mineral Water.', 55000.00, 20),
(6, 'Event & Spesial', 'Halal Bihalal Package', 'Ikan Gurame Asam Manis, Ayam Saus Inggris, Mie Goreng Djawa, Nasi Putih, Capcay/Vegetable Soup, Hot Coffee, Banana Choco Cheese, Soup Buah, Pudding.', 60000.00, 20),
(7, 'Event & Spesial', 'Love Is In The Air', 'Banana Choco Cheese, Fruit Salad, Beef Crispy Steak, Spaghetti Bolognaise, French Fries Bolognaise, Ice Vanilla Latte, Ice Greentea Latte, Vanilla Ice Cream. (Harga per couple)', 250000.00, 20),
(8, 'Event & Spesial', 'Meeting Package', 'Gurami Asam Manis, Olahan Ayam, Mie Goreng Djawa, Capcay, Nasi Putih, Iced Lemon Tea, Buah Potong.', 55000.00, 20),
(9, 'Buffet (Prasmanan)', 'Buffet Raya 1', 'Ayam Kremes, Tahu Goreng, Tempe Goreng, Vegetable Soup/Capcay, Mie Goreng, Sambal, Lalapan, Kerupuk, Es/Teh Panas/Mineral.', 45000.00, 20),
(10, 'Buffet (Prasmanan)', 'Buffet Raya 2', 'Gurame Asam Manis, Ayam Bakar Pedas, Tahu/Tempe Goreng, Vegetable Soup/Capcay, Sambal, Lalapan, Kerupuk, Minum.', 60000.00, 20),
(11, 'Buffet (Prasmanan)', 'Buffet Raya 3', 'Sate Gurame, Ayam Lada Hitam, Tahu/Tempe/Telur Balado, Capcay, Mie Goreng, Sambal, Lalapan, Kerupuk, Minum.', 80000.00, 20),
(12, 'Paket Personal', 'Lunch / Dinner Package', 'Ayam Bakar Taliwang, Perkedel, Nasi Putih, Vegetable Soup, Slice Fruit, Ice Tea.', 35000.00, 20),
(13, 'Event Sekolah & Pernikahan', 'Perpisahan Sekolah Package', 'Ayam Bakar Madu, Nasi Putih, Lalapan, Sambal, Vegetable Soup, Es Teh, Buah Potong, Pudding. (Min 20 pax)', 35000.00, 20),
(14, 'Event Sekolah & Pernikahan', 'Wedding Package', 'Ayam Bakar, Mie Goreng Djawa, Capcay/Vegetable Soup with Sosis, Nasi Putih, Es Buah, Mineral Water.', 45000.00, 20),
(15, 'Family Package', 'Family Package 1 (2 Orang)', 'Koloke Ayam/Lada Hitam, Tumis Kangkung, 2 Nasi Putih, Tahu Crispy Special, 2 Orange Juice, Buah Potong.', 75000.00, 20),
(16, 'Family Package', 'Family Package 2 (4 Orang)', 'Gurami Asam Manis/Pasir Emas, Vegetable Soup, Tahu Tempe Goreng, Roti Bakar Coklat Keju, 4 Nasi Putih, Lemon Tea in Pitcher, Buah Potong.', 175000.00, 20),
(17, 'Family Package', 'Family Package 3 (10 Orang)', 'Sate Gurami, Gurami Asam Manis, Ayam Lada Hitam, Capcay, Vegetable Soup, Banana Choco Cheese, Jamur Crispy, French Fries, 10 Nasi, Minum, Buah.', 425000.00, 20),
(18, 'Rice Box Raya', 'Rice Box Raya 1', 'Ayam Goreng, Capcay, Mie Goreng Djawa, Sambal, Lalapan, Buah, Kerupuk Udang.', 25000.00, 20),
(19, 'Rice Box Raya', 'Rice Box Raya 3', 'Sate Gurami (2 tusuk), Tahu Tempe Goreng, Capcay, Mie Goreng Djawa, Sambal, Lalapan, Buah, Kerupuk Udang.', 32500.00, 20),
(20, 'Rice Box Raya', 'Rice Box Raya 5', 'Dori Sambal Dabu-dabu, Ayam Cabe Garam, Soup, Mie Goreng Djawa, Lalapan, Buah, Kerupuk Udang.', 42500.00, 20),
(21, 'Tumpeng Raya', 'Tumpeng Raya (5-6 Orang)', 'Nasi Kuning, Ayam Kremes, Perkedel, Mie Goreng Djawa, Sambal Goreng Kentang, Telur Roll, Kering Tempe.', 275000.00, 20),
(22, 'Tumpeng Raya', 'Tumpeng Raya (10-12 Orang)', 'Nasi Kuning, Ayam Kremes, Perkedel, Mie Goreng Djawa, Sambal Goreng Kentang, Telur Roll, Kering Tempe.', 375000.00, 20),
(23, 'Tumpeng Raya', 'Tumpeng Raya (20-22 Orang)', 'Nasi Kuning, Ayam Kremes, Perkedel, Mie Goreng Djawa, Sambal Goreng Kentang, Telur Roll, Kering Tempe.', 675000.00, 20),
(24, 'Paket Catering', 'Catering Box', 'Olahan Lauk Ayam/Ikan, Olahan Sayur, Lauk Pendamping, Nasi Putih, Sambal, Buah, Kerupuk.', 20000.00, 20);

-- --------------------------------------------------------

--
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `id` int(11) NOT NULL,
  `menu_item_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` enum('percent','nominal') NOT NULL,
  `value` decimal(10,2) NOT NULL,
  `end_date` datetime NOT NULL,
  `is_active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `promotions`
--

INSERT INTO `promotions` (`id`, `menu_item_id`, `name`, `type`, `value`, `end_date`, `is_active`) VALUES
(5, 4, 'Weekend Day', 'percent', 5.00, '2026-06-07 04:23:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `raw_materials`
--

CREATE TABLE `raw_materials` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `current_stock` decimal(10,2) NOT NULL DEFAULT 0.00,
  `min_stock_level` int(11) DEFAULT 5,
  `min_stock_alert` decimal(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `raw_materials`
--

INSERT INTO `raw_materials` (`id`, `name`, `unit`, `current_stock`, `min_stock_level`, `min_stock_alert`) VALUES
(1, 'Bahan/Pack Sate Gurame', 'Pack/Porsi', 78.00, 5, 0.00),
(2, 'Bahan/Pack Gurame Bakar Madu', 'Pack/Porsi', 16.00, 5, 0.00),
(3, 'Bahan/Pack Gurame Bakar Jimbaran', 'Pack/Porsi', 19.00, 5, 0.00),
(4, 'Bahan/Pack Gurame Asam Manis', 'Pack/Porsi', 19.00, 5, 0.00),
(5, 'Bahan/Pack Gurame Pasir Emas', 'Pack/Porsi', 20.00, 5, 0.00),
(6, 'Bahan/Pack Gurame Tiga Rasa', 'Pack/Porsi', 20.00, 5, 0.00),
(7, 'Bahan/Pack Gurame Sambal Matah', 'Pack/Porsi', 20.00, 5, 0.00),
(8, 'Bahan/Pack Gurame Sambal Dabu-dabu', 'Pack/Porsi', 20.00, 5, 0.00),
(9, 'Bahan/Pack Gurame Saus Tiram', 'Pack/Porsi', 20.00, 5, 0.00),
(10, 'Bahan/Pack Sup Gurame Kuah Bening', 'Pack/Porsi', 20.00, 5, 0.00),
(11, 'Bahan/Pack Cumi Asam Manis', 'Pack/Porsi', 20.00, 5, 0.00),
(12, 'Bahan/Pack Cumi Saus Padang', 'Pack/Porsi', 16.00, 5, 0.00),
(13, 'Bahan/Pack Udang Tempura', 'Pack/Porsi', 20.00, 5, 0.00),
(14, 'Bahan/Pack Udang Saus Tiram', 'Pack/Porsi', 17.00, 5, 0.00),
(15, 'Bahan/Pack Calamary Ring', 'Pack/Porsi', 20.00, 5, 0.00),
(16, 'Bahan/Pack Cumi Lada Hitam', 'Pack/Porsi', 20.00, 5, 0.00),
(17, 'Bahan/Pack Daging Sapi Lada Hitam', 'Pack/Porsi', 17.00, 5, 0.00),
(18, 'Bahan/Pack Rica-rica Daging Sapi', 'Pack/Porsi', 20.00, 5, 0.00),
(19, 'Bahan/Pack Iga Bakar', 'Pack/Porsi', 20.00, 5, 0.00),
(20, 'Bahan/Pack Tempe Mendoan Goreng/Bakar', 'Pack/Porsi', 20.00, 5, 0.00),
(21, 'Bahan/Pack French Fries Original/Balado/BBQ', 'Pack/Porsi', 20.00, 5, 0.00),
(22, 'Bahan/Pack Tahu Crispy Original/Balado/BBQ', 'Pack/Porsi', 20.00, 5, 0.00),
(23, 'Bahan/Pack Roti Bakar Coklat/Keju/Strawberry/Blueberry', 'Pack/Porsi', 20.00, 5, 0.00),
(24, 'Bahan/Pack Pisang Selingkuh', 'Pack/Porsi', 17.00, 5, 0.00),
(25, 'Bahan/Pack Fruit Platter', 'Pack/Porsi', 20.00, 5, 0.00),
(26, 'Bahan/Pack Banana Choco Cheese', 'Pack/Porsi', 20.00, 5, 0.00),
(27, 'Bahan/Pack Simple Platter', 'Pack/Porsi', 20.00, 5, 0.00),
(28, 'Bahan/Pack Jamur Crispy', 'Pack/Porsi', 15.00, 5, 0.00),
(29, 'Bahan/Pack Onion Ring', 'Pack/Porsi', 20.00, 5, 0.00),
(30, 'Bahan/Pack Ayam Teriyaki', 'Pack/Porsi', 15.00, 5, 0.00),
(31, 'Bahan/Pack Ayam Lada Hitam', 'Pack/Porsi', 20.00, 5, 0.00),
(32, 'Bahan/Pack Ayam Asam Manis', 'Pack/Porsi', 20.00, 5, 0.00),
(33, 'Bahan/Pack Ayam Sambal Matah', 'Pack/Porsi', 20.00, 5, 0.00),
(34, 'Bahan/Pack Ayam Sambal Dabu-Dabu', 'Pack/Porsi', 20.00, 5, 0.00),
(35, 'Bahan/Pack Ayam Sambal Bawang', 'Pack/Porsi', 20.00, 5, 0.00),
(36, 'Bahan/Pack Ayam Pasir Emas', 'Pack/Porsi', 20.00, 5, 0.00),
(37, 'Bahan/Pack Nasi Putih', 'Pack/Porsi', 10.00, 5, 0.00),
(38, 'Bahan/Pack Ayam Geprek', 'Pack/Porsi', 20.00, 5, 0.00),
(39, 'Bahan/Pack Ayam Saus Inggris/Lada Hitam/Teriyaki', 'Pack/Porsi', 20.00, 5, 0.00),
(40, 'Bahan/Pack Koloke Ayam', 'Pack/Porsi', 20.00, 5, 0.00),
(41, 'Bahan/Pack Ayam Bakar Kampung Kecap/Madu', 'Pack/Porsi', 20.00, 5, 0.00),
(42, 'Bahan/Pack Ayam Goreng Laos Kampung', 'Pack/Porsi', 20.00, 5, 0.00),
(43, 'Bahan/Pack Ayam Bakar Taliwang Kampung', 'Pack/Porsi', 20.00, 5, 0.00),
(44, 'Bahan/Pack Bakmi Kuah', 'Pack/Porsi', 20.00, 5, 0.00),
(45, 'Bahan/Pack Mie Goreng Djawa', 'Pack/Porsi', 10.00, 5, 0.00),
(46, 'Bahan/Pack Kwetiaw Goreng Ayam/Seafood', 'Pack/Porsi', 20.00, 5, 0.00),
(47, 'Bahan/Pack Kwetiaw Siram Ayam/Seafood', 'Pack/Porsi', 20.00, 5, 0.00),
(48, 'Bahan/Pack Mie Goreng Pasir Emas', 'Pack/Porsi', 20.00, 5, 0.00),
(49, 'Bahan/Pack Mie Goreng Seafood', 'Pack/Porsi', 20.00, 5, 0.00),
(50, 'Bahan/Pack Pasta Bolognese', 'Pack/Porsi', 20.00, 5, 0.00),
(51, 'Bahan/Pack Pasta Carbonara', 'Pack/Porsi', 17.00, 5, 0.00),
(52, 'Bahan/Pack Beef Steak', 'Pack/Porsi', 20.00, 5, 0.00),
(53, 'Bahan/Pack Beef Crispy Steak', 'Pack/Porsi', 20.00, 5, 0.00),
(54, 'Bahan/Pack Chicken Steak', 'Pack/Porsi', 20.00, 5, 0.00),
(55, 'Bahan/Pack Chicken Crispy Steak', 'Pack/Porsi', 20.00, 5, 0.00),
(56, 'Bahan/Pack Sup Jagung', 'Pack/Porsi', 20.00, 5, 0.00),
(57, 'Bahan/Pack Sup Asparagus', 'Pack/Porsi', 20.00, 5, 0.00),
(58, 'Bahan/Pack Fruit Salad', 'Pack/Porsi', 20.00, 5, 0.00),
(59, 'Bahan/Pack Tumis Kangkung', 'Pack/Porsi', 20.00, 5, 0.00),
(60, 'Bahan/Pack Tumis Sawi Daging', 'Pack/Porsi', 20.00, 5, 0.00),
(61, 'Bahan/Pack Tumis Touge', 'Pack/Porsi', 20.00, 5, 0.00),
(62, 'Bahan/Pack Cah Brokoli Ayam/Seafood/Daging', 'Pack/Porsi', 20.00, 5, 0.00),
(63, 'Bahan/Pack Capcay Ayam/Seafood', 'Pack/Porsi', 20.00, 5, 0.00),
(64, 'Bahan/Pack Vegetable Soup', 'Pack/Porsi', 20.00, 5, 0.00),
(65, 'Bahan/Pack Sup Oyong Bihun', 'Pack/Porsi', 20.00, 5, 0.00),
(66, 'Bahan/Pack Soto Ayam', 'Pack/Porsi', 20.00, 5, 0.00),
(67, 'Bahan/Pack Sapo Tahu Ayam/Seafood', 'Pack/Porsi', 20.00, 5, 0.00),
(68, 'Bahan/Pack Sop Iga', 'Pack/Porsi', 20.00, 5, 0.00),
(69, 'Bahan/Pack Paket Ayam Geprek/Kremes/Bakar + Sup + Nasi + Fruit + Tea', 'Pack/Porsi', 20.00, 5, 0.00),
(70, 'Bahan/Pack Nasi Pecel + Telur Mata Sapi + Fruit + Tea', 'Pack/Porsi', 20.00, 5, 0.00),
(71, 'Bahan/Pack Telur Geprek + Soup + Nasi + Fruit + Tea', 'Pack/Porsi', 20.00, 5, 0.00),
(72, 'Bahan/Pack Espresso Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(73, 'Bahan/Pack Americano Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(74, 'Bahan/Pack Cappucino Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(75, 'Bahan/Pack Caffe Late Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(76, 'Bahan/Pack Mochaccino Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(77, 'Bahan/Pack Caramel Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(78, 'Bahan/Pack Machiato Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(79, 'Bahan/Pack Kopi Susu Raya Original', 'Pack/Porsi', 20.00, 5, 0.00),
(80, 'Bahan/Pack Kopi Susu Raya Vanilla', 'Pack/Porsi', 20.00, 5, 0.00),
(81, 'Bahan/Pack Kopi Susu Raya Gula Aren', 'Pack/Porsi', 20.00, 5, 0.00),
(82, 'Bahan/Pack Vietnam Drip Hot/Ice', 'Pack/Porsi', 20.00, 5, 0.00),
(83, 'Bahan/Pack Kopi Tubruk Hot', 'Pack/Porsi', 20.00, 5, 0.00),
(84, 'Bahan/Pack Matcha', 'Pack/Porsi', 20.00, 5, 0.00),
(85, 'Bahan/Pack Green Tea', 'Pack/Porsi', 20.00, 5, 0.00),
(86, 'Bahan/Pack Chocolate', 'Pack/Porsi', 20.00, 5, 0.00),
(87, 'Bahan/Pack Vanilla', 'Pack/Porsi', 20.00, 5, 0.00),
(88, 'Bahan/Pack Hazelnut', 'Pack/Porsi', 20.00, 5, 0.00),
(89, 'Bahan/Pack Lecy Squash', 'Pack/Porsi', 20.00, 5, 0.00),
(90, 'Bahan/Pack Blue Ocean', 'Pack/Porsi', 20.00, 5, 0.00),
(91, 'Bahan/Pack Rainbow Ocean', 'Pack/Porsi', 20.00, 5, 0.00),
(92, 'Bahan/Pack Virgin Mojito', 'Pack/Porsi', 20.00, 5, 0.00),
(93, 'Bahan/Pack Lecy Mojito', 'Pack/Porsi', 20.00, 5, 0.00),
(94, 'Bahan/Pack Jus Semangka/Melon/Jambu/Apel', 'Pack/Porsi', 20.00, 5, 0.00),
(95, 'Bahan/Pack Jus Alpukat/Mix', 'Pack/Porsi', 20.00, 5, 0.00),
(96, 'Bahan/Pack Smoothies Lecy/Strawberry/Mango', 'Pack/Porsi', 20.00, 5, 0.00),
(97, 'Bahan/Pack Tea Hot/Iced', 'Pack/Porsi', 20.00, 5, 0.00),
(98, 'Bahan/Pack Jeruk Hot/Iced', 'Pack/Porsi', 20.00, 5, 0.00),
(99, 'Bahan/Pack Es Kuwut', 'Pack/Porsi', 20.00, 5, 0.00),
(100, 'Bahan/Pack Es Degan Original', 'Pack/Porsi', 20.00, 5, 0.00),
(101, 'Bahan/Pack Es Raya Spesial', 'Pack/Porsi', 20.00, 5, 0.00),
(102, 'Bahan/Pack Soda Gembira', 'Pack/Porsi', 20.00, 5, 0.00),
(103, 'Bahan/Pack Mineral Water', 'Pack/Porsi', 20.00, 5, 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_bom`
--

CREATE TABLE `recipe_bom` (
  `id` int(11) NOT NULL,
  `menu_item_id` int(11) NOT NULL,
  `raw_material_id` int(11) NOT NULL,
  `quantity_required` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_bom`
--

INSERT INTO `recipe_bom` (`id`, `menu_item_id`, `raw_material_id`, `quantity_required`) VALUES
(1, 1, 1, 1.00),
(2, 2, 2, 1.00),
(3, 3, 3, 1.00),
(4, 4, 4, 1.00),
(5, 5, 5, 1.00),
(6, 6, 6, 1.00),
(7, 7, 7, 1.00),
(8, 8, 8, 1.00),
(9, 9, 9, 1.00),
(10, 10, 10, 1.00),
(11, 11, 11, 1.00),
(12, 12, 12, 1.00),
(13, 13, 13, 1.00),
(14, 14, 14, 1.00),
(15, 15, 15, 1.00),
(16, 16, 16, 1.00),
(17, 17, 17, 1.00),
(18, 18, 18, 1.00),
(19, 19, 19, 1.00),
(20, 20, 20, 1.00),
(21, 21, 21, 1.00),
(22, 22, 22, 1.00),
(23, 23, 23, 1.00),
(24, 24, 24, 1.00),
(25, 25, 25, 1.00),
(26, 26, 26, 1.00),
(27, 27, 27, 1.00),
(28, 28, 28, 1.00),
(29, 29, 29, 1.00),
(30, 30, 30, 1.00),
(31, 31, 31, 1.00),
(32, 32, 32, 1.00),
(33, 33, 33, 1.00),
(34, 34, 34, 1.00),
(35, 35, 35, 1.00),
(36, 36, 36, 1.00),
(37, 37, 37, 1.00),
(38, 38, 38, 1.00),
(39, 39, 39, 1.00),
(40, 40, 40, 1.00),
(41, 41, 41, 1.00),
(42, 42, 42, 1.00),
(43, 43, 43, 1.00),
(44, 44, 44, 1.00),
(45, 45, 45, 1.00),
(46, 46, 46, 1.00),
(47, 47, 47, 1.00),
(48, 48, 48, 1.00),
(49, 49, 49, 1.00),
(50, 50, 50, 1.00),
(51, 51, 51, 1.00),
(52, 52, 52, 1.00),
(53, 53, 53, 1.00),
(54, 54, 54, 1.00),
(55, 55, 55, 1.00),
(56, 56, 56, 1.00),
(57, 57, 57, 1.00),
(58, 58, 58, 1.00),
(59, 59, 59, 1.00),
(60, 60, 60, 1.00),
(61, 61, 61, 1.00),
(62, 62, 62, 1.00),
(63, 63, 63, 1.00),
(64, 64, 64, 1.00),
(65, 65, 65, 1.00),
(66, 66, 66, 1.00),
(67, 67, 67, 1.00),
(68, 68, 68, 1.00),
(69, 69, 69, 1.00),
(70, 70, 70, 1.00),
(71, 71, 71, 1.00),
(72, 72, 72, 1.00),
(73, 73, 73, 1.00),
(74, 74, 74, 1.00),
(75, 75, 75, 1.00),
(76, 76, 76, 1.00),
(77, 77, 77, 1.00),
(78, 78, 78, 1.00),
(79, 79, 79, 1.00),
(80, 80, 80, 1.00),
(81, 81, 81, 1.00),
(82, 82, 82, 1.00),
(83, 83, 83, 1.00),
(84, 84, 84, 1.00),
(85, 85, 85, 1.00),
(86, 86, 86, 1.00),
(87, 87, 87, 1.00),
(88, 88, 88, 1.00),
(89, 89, 89, 1.00),
(90, 90, 90, 1.00),
(91, 91, 91, 1.00),
(92, 92, 92, 1.00),
(93, 93, 93, 1.00),
(94, 94, 94, 1.00),
(95, 95, 95, 1.00),
(96, 96, 96, 1.00),
(97, 97, 97, 1.00),
(98, 98, 98, 1.00),
(99, 99, 99, 1.00),
(100, 100, 100, 1.00),
(101, 101, 101, 1.00),
(102, 102, 102, 1.00),
(103, 103, 103, 1.00);

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(150) NOT NULL,
  `customer_phone` varchar(20) NOT NULL,
  `reservation_date` datetime NOT NULL,
  `pax_count` int(11) NOT NULL,
  `table_id` int(11) DEFAULT NULL,
  `buffer_pax` int(11) DEFAULT 5,
  `reservation_type` enum('meja','event') NOT NULL DEFAULT 'event',
  `event_choice` varchar(50) DEFAULT NULL,
  `budget_type` enum('paket_standar','custom_budget') DEFAULT 'paket_standar',
  `status` enum('pending_wa','confirmed','completed','cancelled') DEFAULT 'pending_wa',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `customer_name`, `customer_phone`, `reservation_date`, `pax_count`, `table_id`, `buffer_pax`, `reservation_type`, `event_choice`, `budget_type`, `status`, `created_at`) VALUES
(2, 'Leo', '08125998841', '2026-05-26 04:00:00', 4, 10, 0, 'meja', NULL, 'paket_standar', 'completed', '2026-05-25 09:53:37'),
(3, 'w', '1121', '2026-05-26 04:30:00', 4, 11, 0, 'meja', NULL, 'paket_standar', 'completed', '2026-05-25 09:54:22'),
(7, 'Era', '1111', '2026-05-26 09:00:00', 2, 3, 0, 'event', 'paket_9', 'paket_standar', 'completed', '2026-05-25 23:57:15'),
(8, '11', '11', '2026-05-30 08:10:00', 2, 2, 0, 'event', 'paket_15', 'paket_standar', 'completed', '2026-05-26 00:10:16'),
(9, 'Leo', '08125998841', '2026-06-10 04:30:00', 10, 9, 0, 'meja', NULL, 'paket_standar', 'completed', '2026-06-05 21:22:40'),
(10, 'Pradana', '086274111342', '2026-06-13 05:45:00', 5, 3, 0, 'event', 'paket_16', 'paket_standar', 'completed', '2026-06-05 22:46:12'),
(11, 'oel', '11111', '2026-06-15 03:48:00', 5, 2, 0, 'event', 'paket_18', 'paket_standar', 'completed', '2026-06-09 20:49:07'),
(12, '111', '111', '2026-06-14 03:50:00', 5, 6, 0, 'event', 'pilih_28:1,30:1', 'paket_standar', 'completed', '2026-06-09 20:51:02'),
(13, 'Leonard', '09812733', '2026-06-18 04:19:00', 3, 7, 0, 'event', 'paket_24', 'paket_standar', 'completed', '2026-06-09 21:19:50'),
(14, 'ww', '2311', '2026-06-18 04:19:00', 2, 3, 0, 'event', 'paket_18', 'paket_standar', 'completed', '2026-06-09 21:21:37'),
(15, 'Leow', '23222', '2026-06-20 04:22:00', 3, 3, 0, 'event', 'pilih_24:1,51:1', 'paket_standar', 'completed', '2026-06-09 21:22:06'),
(16, 'wira', '111', '2026-06-18 11:44:00', 3, 2, 0, 'event', 'pilih_17:1,14:1', 'paket_standar', 'completed', '2026-06-10 04:44:40');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `table_number` int(11) NOT NULL,
  `qr_code_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `table_number`, `qr_code_url`) VALUES
(1, 1, NULL),
(2, 2, NULL),
(3, 3, NULL),
(4, 4, NULL),
(5, 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('admin','waiter','kasir') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password_hash`, `role`, `created_at`) VALUES
(4, 'Irwan', '$2b$10$LIS2cLHXGxHceDNjfjVXZ.8vstnpaGd9WJ0UHmLTSRYL1CLgRFe2.', 'admin', '2026-05-22 03:41:12'),
(6, 'Indah', '$2b$10$6QYDVIesCYu.1Mq5wayNWOOQibNKcJCsO4hTNQ.Z05J6v/C6gv6y6', 'kasir', '2026-06-09 21:23:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `menu_item_id` (`menu_item_id`);

--
-- Indexes for table `inventory_history`
--
ALTER TABLE `inventory_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `raw_material_id` (`raw_material_id`);

--
-- Indexes for table `legacy_print_queue`
--
ALTER TABLE `legacy_print_queue`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id_pwa` (`order_id_pwa`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `table_id` (`table_id`),
  ADD KEY `promo_id` (`promo_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `menu_item_id` (`menu_item_id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_item_id` (`menu_item_id`);

--
-- Indexes for table `raw_materials`
--
ALTER TABLE `raw_materials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe_bom`
--
ALTER TABLE `recipe_bom`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_item_id` (`menu_item_id`),
  ADD KEY `raw_material_id` (`raw_material_id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `table_number` (`table_number`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inventory_history`
--
ALTER TABLE `inventory_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `legacy_print_queue`
--
ALTER TABLE `legacy_print_queue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `raw_materials`
--
ALTER TABLE `raw_materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `recipe_bom`
--
ALTER TABLE `recipe_bom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`);

--
-- Constraints for table `inventory_history`
--
ALTER TABLE `inventory_history`
  ADD CONSTRAINT `inventory_history_ibfk_1` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `legacy_print_queue`
--
ALTER TABLE `legacy_print_queue`
  ADD CONSTRAINT `legacy_print_queue_ibfk_1` FOREIGN KEY (`order_id_pwa`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`table_id`) REFERENCES `tables` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`promo_id`) REFERENCES `promotions` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`);

--
-- Constraints for table `promotions`
--
ALTER TABLE `promotions`
  ADD CONSTRAINT `promotions_ibfk_1` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `recipe_bom`
--
ALTER TABLE `recipe_bom`
  ADD CONSTRAINT `recipe_bom_ibfk_1` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `recipe_bom_ibfk_2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
