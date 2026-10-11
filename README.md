# Reef PDF

Editor PDF yang berjalan sepenuhnya di browser. File PDF diproses di komputer pengguna dan tidak pernah diunggah.

Copyright (c) 2026 Hasbi Robbani. All rights reserved.
Pustaka sumber terbuka di dalamnya (pdf-lib, MIT; pdf.js, Apache 2.0) tetap mengikuti lisensinya masing-masing; teks lisensinya ada di kepala `index.html`.
Font yang ikut tertanam (Carlito, Caladea, Liberation Sans, Liberation Serif, Liberation Mono) berlisensi SIL Open Font License 1.1; teksnya ada di `FONT-LICENCES.txt`.
Mesin OCR (Tesseract 5 dari proyek tesseract.js-core, beserta data bahasa Inggris dan Indonesia) berlisensi Apache 2.0; keterangannya ada di `OCR-LICENCE.txt`.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Aplikasinya (semua mesin PDF sudah tertanam) |
| `manifest.webmanifest` | Membuat aplikasi bisa di-install dan mendaftarkannya sebagai pembuka `.pdf` |
| `sw.js` | Membuat aplikasi tetap jalan tanpa internet setelah kunjungan pertama |
| `icon-*.png` | Logo aplikasi dalam beberapa ukuran |
| `file-*.png` | Ikon tipe file PDF untuk sistem yang memakainya (Chrome di Windows tidak; lihat Catatan) |
| `ocr-core.js`, `ocr-core.bin` | Mesin OCR. Baru diunduh saat OCR pertama kali dipakai, lalu disimpan browser |
| `ocr-eng.bin`, `ocr-ind.bin` | Data bahasa Inggris dan Indonesia untuk OCR |
| `ocr-core0.js`, `ocr-core0.bin` | Mesin OCR cadangan untuk browser lama |
| `FONT-LICENCES.txt` | Lisensi font yang ikut tertanam di aplikasi |
| `OCR-LICENCE.txt` | Lisensi mesin OCR |

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

## OCR (teks dari hasil scan)

Halaman hasil scan dan foto adalah gambar. Tombol **OCR** di toolbar membacanya, sehingga teksnya bisa dicari, dipilih, disalin, dan diedit dengan **Edit text**, dan PDF yang diunduh menjadi bisa dicari. Semua dikerjakan di browser; halaman tidak diunggah.

- Pertama kali dipakai, mesin OCR diunduh dari folder ini (sekitar 4 MB), lalu disimpan sehingga berikutnya juga jalan tanpa internet.
- Hasil terbaik untuk teks cetak yang bersih. Tulisan tangan, stempel, dan foto buram tidak terbaca dengan andal; angka penting sebaiknya dicek ulang.
- Halaman yang miring 90° atau terbalik perlu diputar dulu dengan tombol putar di panel Pages.
- Teks yang diedit di atas hasil scan ditulis dengan font yang paling mirip dan menutup gambar di bawahnya, jadi tampilannya bisa sedikit berbeda dari cetakan di sekitarnya.
- PDF yang diunduh menyimpan hasil OCR-nya. Bila dibuka lagi di Reef PDF, teksnya langsung bisa diedit tanpa OCR ulang.

## Memperbarui

Unggah ulang file dengan nama yang sama ke repository. Aplikasi yang sudah ter-install mengambil versi baru saat dibuka dalam keadaan online, dan memakainya pada pembukaan berikutnya.

## Catatan

- Alamat GitHub Pages bisa dibuka siapa saja yang mengetahuinya, dan repository Public berarti kode aplikasinya dapat dilihat orang lain. Halaman ini sudah diberi tanda agar tidak diindeks mesin pencari.
- Membuka PDF langsung dari File Explorer hanya didukung Edge dan Chrome di komputer (Windows, macOS, Linux, ChromeOS).
- Di Windows, Chrome dan Edge mendaftarkan file milik aplikasi web tanpa ikon, sehingga file PDF tampil dengan ikon kosong di File Explorer. Ikon Reef PDF bisa dipasang dengan skrip `Reef-PDF-file-icon.ps1` (dikirim terpisah, bukan bagian dari folder ini).
