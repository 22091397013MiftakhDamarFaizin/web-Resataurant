-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 20 Des 2023 pada 09.10
-- Versi server: 10.4.28-MariaDB-log
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `menu`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `makanan`
--

CREATE TABLE `makanan` (
  `id` int(11) NOT NULL,
  `nama_makanan` varchar(255) NOT NULL,
  `gambar_makanan` varchar(255) DEFAULT NULL,
  `harga_makanan` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `makanan`
--

INSERT INTO `makanan` (`id`, `nama_makanan`, `gambar_makanan`, `harga_makanan`) VALUES
(1, 'Nasi Goreng', 'assets/nasgor.png', 12000.00),
(2, 'Mie Goreng', 'assets/miegoreng.png', 12000.00),
(3, 'Rendang', 'assets/rendang.png', 20000.00),
(4, 'Bakso', 'assets/bakso.png', 10000.00),
(5, 'Spaghetti', 'assets/spaghetti.png', 20000.00),
(6, 'Soup', 'assets/soup.png', 15000.00),
(7, 'Sate Ayam', 'assets/sateayam.png', 15000.00),
(8, 'Soto', 'assets/soto.png', 10000.00),
(9, 'Rawon', 'assets/rawon.png', 15000.00);

-- --------------------------------------------------------

--
-- Struktur dari tabel `minuman`
--

CREATE TABLE `minuman` (
  `id` int(11) NOT NULL,
  `nama_minuman` varchar(255) NOT NULL,
  `gambar_minuman` varchar(255) DEFAULT NULL,
  `harga_minuman` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `minuman`
--

INSERT INTO `minuman` (`id`, `nama_minuman`, `gambar_minuman`, `harga_minuman`) VALUES
(1, 'Es Teh', 'assets/esteh.png', 5000.00),
(2, 'Es Jeruk', 'assets/esjeruk.png', 5000.00),
(3, 'Soda Susu', 'assets/sodasusu.png', 7000.00),
(4, 'Aneka Jus', 'assets/jus.png', 8000.00),
(5, 'Kopi', 'assets/kopi.png', 4000.00),
(6, 'Dawet', 'assets/dawet.png', 8000.00);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `makanan`
--
ALTER TABLE `makanan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `minuman`
--
ALTER TABLE `minuman`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `makanan`
--
ALTER TABLE `makanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `minuman`
--
ALTER TABLE `minuman`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
