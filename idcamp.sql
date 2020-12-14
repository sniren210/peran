-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Sep 2020 pada 15.52
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `idcamp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `aduan`
--

CREATE TABLE `aduan` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wilayah` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal` date NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sdgs_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `aduan`
--

INSERT INTO `aduan` (`id`, `nama`, `email`, `wilayah`, `tanggal`, `foto`, `sdgs_id`, `created_at`, `updated_at`) VALUES
(1, 'rendi', 'rendi@gmail.com', '                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore, est ea corporis et dolor optio accusamus hic necessitatibus rerum ratione aliquid dolore! Minus libero aliquid numquam porro non earum.', '2020-08-18', '1597764957_0.png', 3, '2020-08-18 08:35:57', '2020-08-18 08:35:57');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_08_16_125657_create_aduans_table', 1),
(4, '2020_08_16_125829_create_sarans_table', 1),
(5, '2020_08_17_144105_saran_jawab', 1),
(6, '2020_08_17_144316_s_g_ps', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `saran`
--

CREATE TABLE `saran` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sdgs_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `saran`
--

INSERT INTO `saran` (`id`, `nama`, `email`, `sdgs_id`, `created_at`, `updated_at`) VALUES
(1, 'rendi', 'rendi@gmail.com', 6, '2020-08-18 22:40:53', '2020-08-18 22:40:53'),
(2, 'rendi', 'rendi@gmail.com', 6, '2020-08-18 22:43:16', '2020-08-18 22:43:16'),
(3, 'rendi', 'rendi@gmail.com', 1, '2020-08-18 22:44:57', '2020-08-18 22:44:57'),
(4, 'rendi', 'rendi@gmail.com', 7, '2020-08-18 22:53:27', '2020-08-18 22:53:27'),
(5, 'rendi', 'rendi@gmail.com', 1, '2020-08-18 22:54:04', '2020-08-18 22:54:04'),
(6, 'rendi', 'rendi@gmail.com', 1, '2020-08-18 22:54:45', '2020-08-18 22:54:45'),
(7, 'rendi', 'rendycross9@gmail.com', 6, '2020-08-18 22:56:54', '2020-08-18 22:56:54'),
(8, 'rendi', 'rendi@gmail.com', 6, '2020-08-18 22:57:32', '2020-08-18 22:57:32'),
(9, 'rendi', 'rendi@gmail.com', 6, '2020-08-18 22:58:08', '2020-08-18 22:58:08'),
(10, 'rendi', 'rendi@gmail.com', 1, '2020-08-18 22:59:24', '2020-08-18 22:59:24'),
(11, 'rendi', 'rendi@gmail.com', 1, '2020-08-18 22:59:27', '2020-08-18 22:59:27'),
(12, 'rendi', 'rendi@gmail.com', 6, '2020-08-18 22:59:44', '2020-08-18 22:59:44'),
(13, 'rendi', 'rendi@gmail.com', 6, '2020-08-18 23:16:43', '2020-08-18 23:16:43'),
(14, 'rendi', 'rendi@gmail.com', 6, '2020-08-18 23:17:15', '2020-08-18 23:17:15'),
(15, 'sniren', 'sniren2002@gmail.com', 1, '2020-08-21 00:38:17', '2020-08-21 00:38:17'),
(16, 'rendi', 'rendi@gmail.com', 1, '2020-08-21 01:32:03', '2020-08-21 01:32:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `saran_jawab`
--

CREATE TABLE `saran_jawab` (
  `id` int(10) UNSIGNED NOT NULL,
  `tanya` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jawab` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sdgs_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `saran_jawab`
--

INSERT INTO `saran_jawab` (`id`, `tanya`, `jawab`, `sdgs_id`, `created_at`, `updated_at`) VALUES
(3, 'tes', 'tes', 1, '2020-08-21 01:18:41', '2020-08-21 01:18:41'),
(4, 'test2', 'test 2', 2, '2020-08-21 01:21:56', '2020-08-21 01:21:56');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sdgs`
--

CREATE TABLE `sdgs` (
  `id` int(10) UNSIGNED NOT NULL,
  `SDGs` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sdgs`
--

INSERT INTO `sdgs` (`id`, `SDGs`, `created_at`, `updated_at`) VALUES
(1, 'Menghapus Kemiskinan', NULL, NULL),
(2, 'Mekhiri kelaparan', NULL, NULL),
(3, 'Keseahatan yang baik dan Kesejahteraan', NULL, NULL),
(4, 'Pendidikan Bermutu', NULL, NULL),
(5, 'Kesetaraan Gender', NULL, NULL),
(6, 'Akses Air bersih dan Sanitasi', NULL, NULL),
(7, 'Energi bersih dan Terjangkau', NULL, NULL),
(8, 'Pekerjaan layak dan Pertumbuhan Ekonomi', NULL, NULL),
(9, 'Infrastruktur Industri dan Inovasi', NULL, NULL),
(10, 'Mengurangi Ketimpangan', NULL, NULL),
(11, 'Kota dan Komunitas yang Berkelanjutan', NULL, NULL),
(12, 'Konsumsi dan Produksi yang Bertanggung jawab', NULL, NULL),
(13, 'Penanganan perubahan Iklim', NULL, NULL),
(14, 'Menjaga Ekosistem Laut', NULL, NULL),
(15, 'Menjaga Ekosistem Darat ', NULL, NULL),
(16, 'Perdamaian Keadilan dan kelembaggaan yang Kuat', NULL, NULL),
(17, 'Kemitraan untuk Mencapai Tujuan', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'peran', 'peran@gmail.com', NULL, '$2y$10$1rWZVqIQttVfQZw3xS0pNerntmxIgnM74Ep9NDzjALWBLGnFMpR9G', NULL, '2020-08-18 08:40:40', '2020-08-18 08:40:40');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `aduan`
--
ALTER TABLE `aduan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indeks untuk tabel `saran`
--
ALTER TABLE `saran`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `saran_jawab`
--
ALTER TABLE `saran_jawab`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sdgs`
--
ALTER TABLE `sdgs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `aduan`
--
ALTER TABLE `aduan`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `saran`
--
ALTER TABLE `saran`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `saran_jawab`
--
ALTER TABLE `saran_jawab`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `sdgs`
--
ALTER TABLE `sdgs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
