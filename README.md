# 🏥 Apotek Kosambi - Modern Pharmacy Web App

Landing page dan platform pemesanan modern untuk **Apotek Kosambi**. Proyek ini dirancang untuk memudahkan pelanggan mencari produk kesehatan, membaca edukasi medis, dan melakukan pemesanan obat secara *seamless* langsung melalui integrasi WhatsApp.

## ✨ Fitur Utama (Key Features)

- 🛒 **WhatsApp-Integrated Cart:** Sistem keranjang belanja dinamis (`cart.js`) yang menghitung total harga secara otomatis dan memformat rincian pesanan menjadi pesan WhatsApp yang siap dikirim ke admin apotek.
- 🔍 **Katalog Produk Interaktif:** Fitur filter kategori obat (Vitamin, Obat Flu, Obat Anak, Alat Kesehatan) tanpa perlu *reload* halaman, dilengkapi dengan *modal/pop-up* detail produk.
- 🗺️ **Peta Lokasi Interaktif:** Integrasi dengan **Leaflet.js** dan OpenStreetMap untuk menampilkan titik lokasi apotek secara akurat dan interaktif langsung di dalam *website*.
- 📱 **Responsive & Mobile-First:** Antarmuka yang dioptimalkan untuk berbagai ukuran layar. Terdapat *sticky navbar*, *hamburger menu* untuk *mobile*, dan tombol keranjang *floating* yang mudah dijangkau di layar *smartphone*.
- 💬 **FAQ & Edukasi:** Menu *accordion* dinamis untuk Frequently Asked Questions (FAQ) dan tampilan grid untuk artikel kesehatan/gaya hidup guna meningkatkan kepercayaan dan SEO.
- 🔔 **Custom Alerts:** Notifikasi *pop-up* kustom yang elegan (bukan *alert* bawaan *browser* yang kaku) saat produk berhasil ditambahkan ke keranjang atau jika ada *error*.

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Proyek ini dibangun menggunakan teknologi web murni untuk performa maksimal tanpa ketergantungan *framework* berat:

- **Frontend Core:** HTML5, CSS3 (CSS Variables, Flexbox, Grid), dan Vanilla JavaScript (ES6+).
- **Libraries & Assets:**
  - **[Leaflet.js](https://leafletjs.com/):** Untuk *rendering* peta interaktif yang ringan.
  - **[FontAwesome 6](https://fontawesome.com/):** Untuk ikon vektor berkualitas tinggi.
  - **Google Fonts:** Menggunakan *font* 'Poppins' untuk tampilan antarmuka yang bersih dan modern.

## 📂 Struktur Proyek (Project Structure)

\`\`\`text
apotek-kosambi/
├── index.html               # Struktur utama halaman web
├── style.css                # Styling antarmuka (UI/UX)
├── script.js                # Interaktivitas UI (Filter, Modal, Accordion, Map)
├── cart.js                  # Logika keranjang belanja & integrasi WhatsApp API
├── ikon.png                 # Logo utama Apotek Kosambi
└── README.md                # Dokumentasi proyek
\`\`\`

## 🚀 Cara Menjalankan (How to Run Locally)

Karena proyek ini menggunakan teknologi *Client-Side* murni, Anda dapat langsung menjalankannya tanpa perlu proses instalasi atau *build*:

1. *Clone* atau unduh *repository* ini ke komputer Anda.
2. Buka folder proyek.
3. Klik ganda pada file `index.html` untuk membukanya di *browser* bawaan Anda.
4. **Opsional:** Untuk pengalaman *development* terbaik, buka proyek ini di VS Code dan gunakan ekstensi **Live Server** agar perubahan kode dapat langsung terlihat (*hot-reload*).
