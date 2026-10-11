# Reef PDF

Editor PDF yang berjalan sepenuhnya di browser. File PDF diproses di komputer pengguna dan tidak pernah diunggah.

Copyright (c) 2026 Hasbi Robbani. All rights reserved.
Pustaka sumber terbuka di dalamnya (pdf-lib, MIT; pdf.js, Apache 2.0) tetap mengikuti lisensinya masing-masing; teks lisensinya ada di kepala `index.html`.
Font yang ikut tertanam (Carlito, Caladea, Liberation Sans, Liberation Serif, Liberation Mono) berlisensi SIL Open Font License 1.1; teksnya ada di `FONT-LICENCES.txt`.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Aplikasinya (semua mesin PDF sudah tertanam) |
| `manifest.webmanifest` | Membuat aplikasi bisa di-install dan mendaftarkannya sebagai pembuka `.pdf` |
| `sw.js` | Membuat aplikasi tetap jalan tanpa internet setelah kunjungan pertama |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Ikon aplikasi |
| `FONT-LICENCES.txt` | Lisensi font yang ikut tertanam di aplikasi |

## 1. Unggah ke GitHub Pages

1. Di github.com buat repository baru, misalnya `reef-pdf`, dengan visibilitas **Public**.
2. Di halaman repository pilih **Add file → Upload files**, seret semua file di folder ini, lalu **Commit changes**.
3. Buka **Settings → Pages**. Pada **Source** pilih **Deploy from a branch**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
4. Tunggu sekitar satu menit. Alamatnya: `https://NAMA-AKUN.github.io/reef-pdf/`

## 2. Install (tidak perlu izin admin)

1. Buka alamat di atas dengan Microsoft Edge atau Google Chrome di komputer.
2. Klik ikon install di ujung kanan kolom alamat, atau menu **⋯ → Apps → Install Reef PDF**.

## 3. Jadikan pembuka PDF

1. Di File Explorer klik kanan sebuah file PDF → **Open with → Choose another app**.
2. Pilih **Reef PDF**, lalu **Always**.
3. Saat pertama kali membuka, browser bertanya apakah Reef PDF boleh membuka file itu. Pilih izinkan dan centang agar diingat.

Setiap PDF yang dibuka dengan cara ini tampil di jendela Reef PDF sendiri.

## Font Microsoft Office

Aplikasi membawa font yang ukurannya sama dengan font Office: Carlito (setara Calibri), Caladea (Cambria), Liberation Sans (Arial), Liberation Serif (Times New Roman), dan Liberation Mono (Courier New).

Untuk memakai font Office yang asli (Calibri, Cambria, Aptos, Tahoma, dan lainnya) yang sudah ter-install di komputer: pilih sebuah teks, buka daftar **Font**, lalu pilih **Use the fonts installed on this computer…** dan izinkan saat browser bertanya. Ini hanya tersedia di Edge dan Chrome di komputer, dan hanya bila aplikasi dibuka dari alamat ini atau dari aplikasi yang sudah di-install. Font tetap berada di komputer; hanya huruf yang dipakai yang ditanam ke PDF yang diunduh.

## Memperbarui

Unggah ulang file dengan nama yang sama ke repository. Aplikasi yang sudah ter-install mengambil versi baru saat dibuka dalam keadaan online, dan memakainya pada pembukaan berikutnya.

## Catatan

- Alamat GitHub Pages bisa dibuka siapa saja yang mengetahuinya, dan repository Public berarti kode aplikasinya dapat dilihat orang lain. Halaman ini sudah diberi tanda agar tidak diindeks mesin pencari.
- Membuka PDF langsung dari File Explorer hanya didukung Edge dan Chrome di komputer (Windows, macOS, Linux, ChromeOS).
