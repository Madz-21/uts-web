# Portfolio Website - Ahmad Sahl Pahlevi

Portfolio website modern dengan desain glassmorphism yang responsive dan interaktif, dibuat untuk UTS Web Programming - M.H. Thamrin University.

## 🎨 Fitur

- **Glassmorphism Design** - Navbar transparan dengan efek blur yang modern
- **Smooth Animations** - Animasi fade-in saat scroll untuk pengalaman yang lebih menarik
- **Fully Responsive** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **Smooth Navigation** - Smooth scrolling antar section
- **Mobile Menu** - Hamburger menu yang interaktif untuk tampilan mobile
- **Modern UI/UX** - Desain clean dengan gradient background dan card shadows

## 📋 Section

1. **Home/Hero** - Foto profil, nama, dan call-to-action buttons
2. **About** - Deskripsi singkat, foto, dan daftar skills
3. **Projects** - Grid kartu project dengan gambar dan tech stack
4. **Contact** - Form kontak dengan validasi
5. **Footer** - Copyright dan informasi universitas

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantic website
- **CSS3** - Styling dengan custom properties dan modern CSS
- **JavaScript (Vanilla)** - Interaktivitas dan animasi
- **Font Awesome 6.5.0** - Icons
- **Google Fonts** - Alan Sans & Roboto fonts

## 📁 Struktur File
```
project/
│
├── index.html
├── assets/
│   ├── style/
│   │   └── style.css
│   ├── JS/
│   │   └── log.js
│   └── img/
│       ├── photo1.png
│       ├── photo2.png
│       └── logo.ico
```

## 🚀 Cara Menggunakan

1. **Clone atau download** repository ini
2. **Buka folder** project
3. **Jalankan** `index.html` di browser
4. **Atau gunakan Live Server** di VS Code untuk development

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit variabel CSS di `style.css`:
```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-text: #1e293b;
}
```

### Mengganti Foto Profil

Ganti file di folder `assets/img/`:
- `photo1.png` - Foto untuk section About
- `photo2.png` - Foto untuk Hero section

### Menambah Project

Tambahkan card baru di section Projects:
```html
<div class="project-card">
    <img src="path/to/image.jpg" alt="Project name" />
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="tech-stack">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
    </div>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px - Full navigation bar
- **Mobile**: ≤ 768px - Hamburger menu dengan dropdown

## ✨ Fitur JavaScript

- **Intersection Observer** - Animasi fade-in saat elemen masuk viewport
- **Smooth Scroll** - Navigasi halus antar section
- **Mobile Menu Toggle** - Buka/tutup menu mobile
- **Click Outside** - Menu tertutup otomatis saat klik di luar

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 Catatan

- Placeholder images menggunakan `placehold.co` - ganti dengan gambar project asli
- Form contact belum terintegrasi dengan backend - tambahkan handler sesuai kebutuhan

## 👨‍💻 Author

**Ahmad Sahl Pahlevi**
- Mahasiswa Sistem Informasi
- Fakultas Ilmu Komputer
- Universitas M.H. Thamrin

## 📄 License

© 2025 Ahmad SP. All rights reserved.

---

**UTS Web Programming - M.H. Thamrin University**