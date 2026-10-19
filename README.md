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

## Halaman Home

Reef PDF dibuka di halaman **Home** (tanpa dokumen contoh), mirip Adobe Acrobat:

- **Recommended tools**: Edit a PDF, Fill & Sign, Combine files (beberapa PDF/gambar jadi satu PDF), Pictures to PDF, Recognize text (OCR), dan Convert a PDF. Tiap alat membuka file lalu langsung masuk ke alat itu.
- **Open File**, seret PDF ke halaman ini, atau **Start with a blank page**.
- **Recent**: PDF yang pernah dibuka atau disimpan, lengkap dengan gambar halaman pertama, waktu dibuka, dan ukuran. Klik untuk membuka lagi (browser bisa menanyakan izin sekali). Ada tampilan daftar dan thumbnail, tombol × untuk menghapus satu file dari daftar, dan **Clear recent**. Daftar ini hanya disimpan di browser komputer ini; filenya sendiri tidak disalin. Fitur ini bekerja di Chrome dan Edge.
- Tab **Home** (ikon rumah) selalu ada di kiri deretan tab. Menutup tab terakhir juga kembali ke Home.

Panel kanan (Guide/Properties) tersembunyi saat mulai. Panel muncul sendiri saat pertama kali ada yang bisa diatur (misalnya saat mengedit teks atau memilih objek), dan bisa dibuka atau ditutup dengan tombol panel di ujung kanan toolbar. Setelah ditutup dengan tombol itu, panel tidak muncul sendiri lagi sampai aplikasi dibuka ulang.

## Beberapa PDF dalam satu jendela (tab)

Setiap PDF yang dibuka mendapat tab sendiri, seperti di Adobe Acrobat. Tiap tab menyimpan suntingan, undo, zoom, dan posisi halamannya masing-masing. Titik biru di tab berarti ada perubahan yang belum diunduh.

- **Open** atau tombol **+** di deretan tab membuka PDF di tab baru. **Merge** tetap menambahkan halaman ke dokumen yang sedang tampil.
- PDF yang dibuka dari File Explorer saat Reef PDF sudah terbuka masuk sebagai tab baru di jendela yang sama, bukan jendela baru.
- Tutup tab dengan tombol ×, klik tengah mouse, atau tombol Delete saat tab terfokus. Ctrl+Tab pindah ke tab berikutnya di aplikasi yang sudah di-install.
- Aturan "satu jendela" ada di `manifest.webmanifest`. Aplikasi yang sudah ter-install baru mengikutinya setelah Chrome memperbarui data aplikasinya (bisa sampai sehari). Supaya langsung berlaku: uninstall Reef PDF, lalu install lagi dari alamat ini.

## OCR (teks dari hasil scan)

Halaman hasil scan dan foto adalah gambar. Tombol **OCR** di toolbar membacanya, sehingga teksnya bisa dicari, dipilih, disalin, dan diedit dengan **Edit text**, dan PDF yang diunduh menjadi bisa dicari. Semua dikerjakan di browser; halaman tidak diunggah.

- Pertama kali dipakai, mesin OCR diunduh dari folder ini (sekitar 4 MB), lalu disimpan sehingga berikutnya juga jalan tanpa internet.
- Hasil terbaik untuk teks cetak yang bersih. Tulisan tangan, stempel, dan foto buram tidak terbaca dengan andal; angka penting sebaiknya dicek ulang.
- Halaman yang miring 90° atau terbalik perlu diputar dulu dengan tombol putar di panel Pages.
- Teks yang diedit di atas hasil scan ditulis dengan font yang paling mirip dan menutup gambar di bawahnya, jadi tampilannya bisa sedikit berbeda dari cetakan di sekitarnya.
- PDF yang diunduh menyimpan hasil OCR-nya. Bila dibuka lagi di Reef PDF, teksnya langsung bisa diedit tanpa OCR ulang.

## Convert (PDF ke Word, Excel, PowerPoint)

Tombol **Convert** di toolbar mengubah dokumen yang sedang tampil, lengkap dengan suntingannya, menjadi file Office. Semua dikerjakan di browser; dokumen tidak diunggah.

- **Word (.docx)**: paragraf tetap bisa diedit dan mengalir seperti dokumen Word biasa, dengan font, ukuran, tebal/miring, warna, rata kiri/kanan/tengah/justify, indentasi, dan jarak baris aslinya. Tabel bergaris menjadi tabel Word (termasuk sel gabungan), tabel tanpa garis menjadi tabel tanpa border, halaman dua kolom menjadi kolom Word, dan gambar tetap di posisinya.
- **Excel (.xlsx)**: satu sheet per halaman. Angka seperti `1.250.000.000`, `(25.000.000)`, `12,5%` menjadi angka sungguhan yang bisa dijumlahkan; nomor seperti NPWP atau nomor rekening tetap teks.
- **PowerPoint (.pptx)**: satu slide per halaman. Teks menjadi text box yang bisa diedit; garis, warna, dan gambar halaman menjadi latar slide.
- Halaman hasil scan ditawari OCR dulu, supaya teksnya ikut bisa diedit. Kalau tidak, halaman itu masuk sebagai gambar.
- Bagan dan gambar vektor tetap menjadi gambar. Bila font aslinya tidak ada di komputer yang membuka file, baris bisa terpotong di kata yang berbeda.

## Link di PDF

Link di dalam PDF (alamat web, e-mail, atau link ke halaman lain di dokumen yang sama) bisa diklik dengan alat **Select**. Saat kursor di atas link, alamat tujuannya tampil di tooltip dan di status bar bawah. Seret dari atas link tetap memilih teks, tidak membuka link.

- Dengan alat lain (misalnya **Edit text**), atau di atas teks yang sudah diedit, pakai **Ctrl+klik** untuk membuka link.
- Link web terbuka di tab browser baru. Link ke halaman lain di dokumen langsung melompat ke halaman dan posisinya.
- Link tetap tersimpan di PDF yang diunduh.
- Bila browser memblokir pop-up (misalnya saat Reef PDF dibuka di dalam halaman situs lain), muncul pesan dengan tombol **Copy link**.

## Simpan (Ctrl+S)

**Save PDF** atau **Ctrl+S** menanyakan dua pilihan: **Overwrite** (menimpa file asli di tempatnya) atau **Save as…** (simpan sebagai file baru, pilih nama dan folder). **Ctrl+Shift+S** langsung ke Save as.

- Menimpa file asli bisa untuk PDF yang dibuka dengan **Open**, diseret ke jendela, atau dibuka dari File Explorer, di Chrome dan Edge. Pertama kali, browser meminta izin untuk mengubah file itu.
- Setelah Save as, tab itu mengikuti file barunya, jadi Ctrl+S berikutnya menimpa file baru tersebut.
- Bila file sedang dibuka di program lain (misalnya Adobe Reader), penimpaan bisa gagal; tutup dulu di sana atau pakai Save as.
- Di browser lain, atau saat Reef PDF dibuka di dalam halaman situs lain, menyimpan berarti mengunduh salinan seperti sebelumnya.

## Print

Tombol printer di sebelah **Download PDF**, atau **Ctrl+P**, mencetak halaman dokumen saja (lengkap dengan suntingan dan isian formulir), bukan tampilan editornya. Ukuran dan arah tiap halaman (portrait/landscape) ikut. Kalau print dibuka dari menu browser, yang tercetak hanya petunjuk untuk memakai tombol Print.

## Memperbarui

Unggah ulang file dengan nama yang sama ke repository. Aplikasi yang sudah ter-install mengambil versi baru saat dibuka dalam keadaan online, dan memakainya pada pembukaan berikutnya.

## Catatan

- Alamat GitHub Pages bisa dibuka siapa saja yang mengetahuinya, dan repository Public berarti kode aplikasinya dapat dilihat orang lain. Halaman ini sudah diberi tanda agar tidak diindeks mesin pencari.
- Membuka PDF langsung dari File Explorer hanya didukung Edge dan Chrome di komputer (Windows, macOS, Linux, ChromeOS).
- Di Windows, Chrome dan Edge mendaftarkan file milik aplikasi web tanpa ikon, sehingga file PDF tampil dengan ikon kosong di File Explorer. Ikon Reef PDF bisa dipasang dengan skrip `Reef-PDF-file-icon.ps1` (dikirim terpisah, bukan bagian dari folder ini).
