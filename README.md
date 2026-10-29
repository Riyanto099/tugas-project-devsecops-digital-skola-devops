# Portofolio DevSecOps — Notes App ExpressJS

Proyek aplikasi Notes App berbasis Node.js dan ExpressJS yang menerapkan praktik DevSecOps melalui otomasi pemeriksaan kualitas kode, pengujian otomatis, pengukuran test coverage, dan analisis kode statis menggunakan GitHub Actions dan SonarQube.

## Tentang Proyek

Proyek ini dibuat untuk mempraktikkan penerapan proses Continuous Integration (CI) dalam pengembangan aplikasi. Pipeline otomatis digunakan untuk memeriksa kualitas kode, menjalankan pengujian, serta menganalisis potensi masalah pada kode aplikasi.

Proyek ini menunjukkan penerapan otomasi pengujian dan analisis kode sebagai bagian dari proses pengembangan perangkat lunak yang lebih terstruktur dan mudah dipelihara.

## Fitur Utama

- **CI dengan GitHub Actions:** Mengotomatisasi proses pemeriksaan kode dan pengujian.
- **Code Linting dengan ESLint:** Memeriksa kualitas dan konsistensi kode JavaScript.
- **Unit Testing dengan Jest:** Menjalankan pengujian otomatis untuk memvalidasi fungsi aplikasi.
- **Test Coverage:** Menghasilkan laporan cakupan pengujian untuk mengevaluasi bagian kode yang telah diuji.
- **Analisis Kode dengan SonarQube:** Menganalisis kualitas kode dan mendeteksi potensi masalah keamanan.
- **Pipeline Terpisah:** Memisahkan proses linting, pengujian, dan analisis kode ke dalam job yang berbeda agar kegagalan lebih mudah ditelusuri.

## Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| Node.js | Menjalankan aplikasi JavaScript |
| ExpressJS | Framework backend aplikasi |
| ESLint | Pemeriksaan kualitas kode |
| Jest | Pengujian otomatis |
| GitHub Actions | Otomasi pipeline CI |
| SonarQube | Analisis kualitas dan potensi masalah keamanan kode |
| Git | Pengelolaan versi kode |

## Alur CI Pipeline

```text
Developer melakukan Git Push
             |
             v
      GitHub Actions
             |
       +-----+-----+
       |           |
       v           v
     ESLint    Jest Unit Test
                     |
                     v
               Test Coverage
       |           |
       +-----+-----+
             |
             v
      SonarQube Scan
             |
             v
     Evaluasi Hasil Analisis
```

Pipeline memisahkan proses linting, unit testing, dan SonarQube scan. Analisis SonarQube dikonfigurasi agar berjalan setelah job linting dan unit testing berhasil.

## Instalasi dan Penggunaan

### Prasyarat

- Node.js versi 22
- npm
- Git
- SonarQube untuk analisis kode statis

### 1. Clone Repository

```bash
git clone <URL_REPOSITORY_KAMU>
cd <NAMA_FOLDER_PROYEK>
```

### 2. Instal Dependensi

```bash
npm ci
```

### 3. Jalankan ESLint

```bash
npm run lint
```

Perintah ini digunakan untuk memeriksa kualitas dan konsistensi kode.

### 4. Jalankan Unit Test dan Coverage

```bash
npm test -- --coverage
```

Perintah ini menjalankan pengujian menggunakan Jest dan menghasilkan laporan test coverage.

## Integrasi SonarQube

Konfigurasi analisis SonarQube disimpan dalam file `sonar-project.properties`. File ini menentukan direktori sumber kode, direktori pengujian, dan lokasi laporan coverage.

Untuk menghubungkan SonarQube dengan GitHub Actions, konfigurasi repository secrets yang diperlukan adalah:

- `SONAR_HOST_URL` — alamat server SonarQube.
- `SONAR_TOKEN` — token autentikasi SonarQube.

Token autentikasi disimpan sebagai secret dan tidak ditulis langsung di dalam kode sumber.

## Struktur Proyek

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
├── tests/
├── package.json
├── package-lock.json
├── sonar-project.properties
└── README.md
```

Struktur di atas merupakan gambaran umum. Sesuaikan dengan file dan direktori yang benar-benar tersedia di repository.

## Hasil yang Ditargetkan

- Pemeriksaan ESLint berjalan tanpa error.
- Unit test Jest berhasil dijalankan.
- Laporan test coverage berhasil dihasilkan.
- Analisis SonarQube berhasil dijalankan.
- Hasil pipeline dapat dipantau melalui tab Actions di GitHub.

Status keberhasilan dan hasil pengukuran perlu disesuaikan dengan hasil eksekusi yang sebenarnya.

## Dokumentasi Proyek

Tambahkan bukti pengerjaan berupa:

- Screenshot GitHub Actions yang menunjukkan pipeline berhasil.
- Screenshot dashboard proyek SonarQube.
- Screenshot hasil unit test dan laporan coverage.

## Pembelajaran yang Diperoleh

Melalui proyek ini, saya mempelajari penerapan otomasi CI menggunakan GitHub Actions, pemeriksaan kualitas kode dengan ESLint, pengujian otomatis menggunakan Jest, pengukuran test coverage, serta integrasi SonarQube untuk analisis kode statis.

Proyek ini juga membantu saya memahami bagaimana setiap tahapan pipeline dapat dipisahkan agar proses validasi aplikasi lebih terstruktur dan memudahkan identifikasi kegagalan.

## Tentang Proyek Ini

Proyek ini merupakan bagian dari pengembangan portofolio praktik DevOps dan DevSecOps, dengan fokus pada otomasi CI, pengujian perangkat lunak, dan peningkatan kualitas kode.
