# 🕵Aplikasi Tes Minat RMIB Interaktif

###### Ini adalah Project pribadi Ahmad Maulidan, project ini dibuat guna memenuhi tugas Ujian Tengah Semester Mata Kuliah Interaksi Manusia dan Komputer, 10 Juni 2025, Ilmu Komputer, Universitas Lambung Mangkurat




Aplikasi web interaktif untuk melakukan tes minat bakat berdasarkan metode **Rothwell-Miller Interest Blank (RMIB)**. Aplikasi ini membantu pengguna memahami minat pekerjaan mereka melalui serangkaian pertanyaan berbasis preferensi yang disajikan secara visual dan intuitif.

Hasil tes disajikan dalam bentuk grafik, tabel skoring detail, dan deskripsi mendalam mengenai area minat yang paling menonjol, serta disimpan dalam database untuk dapat dilihat kembali di kemudian hari.

![image alt](https://github.com/AhmdMaulidan/Web-Tes-RMIB/blob/bd11bb254f4d61489a6cb15b49fff41786382651/img%20example.png)

---

## ✨ Fitur Utama

-   **Tes Interaktif**: Pengguna dapat mengurutkan daftar pekerjaan dengan metode *drag-and-drop* yang modern dan responsif.
-   **Alur Tes Terpandu**: Antarmuka yang bersih memandu pengguna dari pengisian data diri, pengerjaan tes per kelompok, hingga melihat hasil akhir.
-   **Visualisasi Data**: Hasil tes disajikan dalam bentuk grafik bar yang mudah dipahami untuk melihat area minat terkuat.
-   **Analisis Mendalam**: Menampilkan 3 area minat teratas beserta deskripsi dan contoh pekerjaan yang relevan.
-   **Tabel Skoring Standar RMIB**: Menghasilkan tabel skoring lengkap sesuai dengan standar pemeriksaan RMIB, berguna untuk analisis lebih lanjut oleh psikolog atau konselor.
-   **Riwayat Tes**: Semua hasil tes disimpan dalam database dan dapat diakses kembali melalui halaman riwayat.
-   **Desain Modern & Responsif**: Dibangun dengan Tailwind CSS untuk tampilan yang menarik dan fungsional di berbagai perangkat, baik desktop maupun mobile.
-   **Halaman Admin**: Halaman terpisah (`/admin/view_results.php`) untuk melihat rekapitulasi semua hasil tes pengguna dalam format tabel.

---

## 💻 Teknologi yang Digunakan

-   **Frontend**:
    -   HTML5, CSS3, JavaScript (ES6+)
    -   [Tailwind CSS](https://tailwindcss.com/): Untuk styling antarmuka.
    -   [Chart.js](https://www.chartjs.org/): Untuk membuat grafik hasil tes.
-   **Backend**:
    -   PHP 8+
    -   MySQL / MariaDB: Sebagai database untuk menyimpan hasil tes.
-   **Lingkungan Pengembangan**:
    -   XAMPP (Apache, MySQL, PHP)

---

## 🚀 Instalasi dan Cara Menjalankan

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut.

### Prasyarat

-   Pastikan Anda telah menginstal **XAMPP** atau server lokal lain yang mencakup Apache, PHP, dan MySQL.
-   Sebuah browser web modern (Chrome, Firefox, Edge).
-   Sebuah teks editor (misalnya, VS Code).

### 1. Dapatkan Kode Proyek

Clone repositori ini ke dalam folder `htdocs` di direktori instalasi XAMPP Anda.

```bash
# Arahkan ke folder htdocs XAMPP Anda
# Contoh di Windows: cd C:\xampp\htdocs
# Contoh di macOS: cd /Applications/XAMPP/xamppfiles/htdocs

git clone https://github.com/your-username/rmib-app.git
```

Jika Anda mengunduh sebagai file ZIP, ekstrak isinya ke dalam folder htdocs dan ganti nama foldernya menjadi rmib-app.
### 2. Pengaturan Database
 1. Jalankan XAMPP Control Panel dan start modul Apache dan MySQL.
 2. Buka browser dan akses http://localhost/phpmyadmin.
 3. Buat database baru dengan nama rmib_app.
 4. Pilih database rmib_app yang baru dibuat, lalu buka tab SQL.
 5. Salin dan tempelkan query di bawah ini, lalu klik Go untuk membuat tabel test_results.

CREATE TABLE `test_results` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_age` int(11) NOT NULL,
  `user_gender` varchar(20) NOT NULL,
  `user_school` varchar(255) NOT NULL,
  `test_date` datetime NOT NULL,
  `rmib_profile` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`rmib_profile`)),
  `raw_scores_table` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`raw_scores_table`)),
  `favorite_jobs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`favorite_jobs`)),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

### 3. Konfigurasi Koneksi
File konfigurasi database berada di rmib-app/config/db.php. Pengaturan default sudah disesuaikan untuk XAMPP standar (user: root, password: ""). Jika konfigurasi XAMPP Anda berbeda, silakan sesuaikan file ini.

### 4. Jalankan Aplikasi
- Halaman Pengguna: Buka browser dan akses http://localhost/rmib-app/
- Halaman Laporan Admin: Akses http://localhost/rmib-app/admin/view_results.php

Aplikasi siap digunakan!

### 🏛️ Struktur Proyek
rmib-app/
│
├── admin/
│   └── view_results.php        # Halaman laporan untuk admin
│
├── config/
│   └── db.php                  # Konfigurasi koneksi database
│
├── public/
│   └── js/
│       └── main.js             # Logika utama aplikasi (frontend)
│
├── src/
│   └── actions/
│       ├── clear_history.php   # Endpoint untuk menghapus riwayat
│       ├── get_history.php     # Endpoint untuk mengambil riwayat
│       └── save_test.php       # Endpoint untuk menyimpan hasil tes
│
├── templates/
│   ├── footer.php              # Template footer HTML
│   ├── header.php              # Template header HTML
│   └── sidebar.php             # Template sidebar
│
├── index.php                   # Halaman utama aplikasi
└── README.md                   # File ini

### 💡 Kontribusi
Kontribusi dalam bentuk pull request, laporan bug, atau saran fitur sangat diterima. Silakan buat issue terlebih dahulu untuk mendiskusikan perubahan yang ingin Anda buat.

### 📄 Lisensi
Proyek ini bisa digunakan secara bebas de ngan catatan harus contact saya terlebih dahulu 
bisa melalui
whatsApp: 085157871779
Instagram @lienidan
email: ahmd.maulidann@gmail.com

untuk tujuan pembelajaran dan pengembangan pribad




