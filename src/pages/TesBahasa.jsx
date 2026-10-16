
import { Link } from 'react-router-dom'
import './TesBahasa.css'

const layananTes = [
  {
    nomor: '01',
    kategori: 'MAHASISWA D3 / S1',
    judul: 'Tes Bahasa Arab dan Inggris Offline',
    tipe: 'PAPER-BASED',
    deskripsi:
      'Layanan tes kemahiran Bahasa Arab dan Inggris untuk mahasiswa program Diploma dan Sarjana.',
    gambar:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    alt: 'Peralatan belajar dan lembar ujian di atas meja',
    fitur: [
      'Khusus mahasiswa D3 dan S1',
      'Pendaftaran akun secara online',
      'Jadwal dan tarif tersedia di sistem',
    ],
    tujuan: '/layanan/tes-bahasa/d3-s1',
    tombol: 'Lihat Detail Layanan',
  },
  {
    nomor: '02',
    kategori: 'MAHASISWA S2 / S3',
    judul: 'Tes dan Pelatihan Bahasa Asing',
    tipe: 'PAPER-BASED',
    deskripsi:
      'Program tes kompetensi dan pelatihan Bahasa Arab maupun Inggris untuk mahasiswa Pascasarjana.',
    gambar:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    alt: 'Mahasiswa mengikuti kegiatan pembelajaran bersama',
    fitur: [
      'Pelatihan mulai Rp300.000',
      'Tes kompetensi mulai Rp200.000',
      'Tersedia paket pelatihan dan tes',
    ],
    tujuan: '/layanan/tes-bahasa/s2-s3',
    tombol: 'Lihat Tarif dan Detail',
  },
  {
    nomor: '03',
    kategori: 'MAHASISWA DAN UMUM',
    judul: 'Tes Bahasa Inggris Online',
    tipe: 'MOBILE-BASED',
    deskripsi:
      'Tes kemahiran Bahasa Inggris online melalui smartphone dengan layanan tes dari British Council.',
    gambar:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Seseorang menggunakan perangkat digital untuk belajar',
    fitur: [
      'Empat kali tes resmi',
      'Pelaksanaan secara online',
      'Akun aktif selama tujuh hari',
    ],
    tujuan: '/layanan/tes-bahasa/online',
    tombol: 'Lihat Detail Layanan',
  },
]

function TesBahasa() {
  return (
    <main className="tes-page">
      <section className="tes-hero">
        <div className="tes-container">
          <div className="tes-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/layanan">Layanan</Link>
            <span>/</span>
            <span>Tes Bahasa Asing</span>
          </div>

          <div className="tes-hero-content">
            <span className="tes-eyebrow">
              PUSAT PENGEMBANGAN BAHASA
            </span>

            <h1>
              Tes Kemahiran
              <br />
              <span>Bahasa Asing</span>
            </h1>

            <p>
              Tingkatkan kemampuan bahasa dan temukan layanan tes
              yang sesuai dengan kebutuhan akademik Anda.
            </p>

            <a href="#pilihan-tes" className="tes-hero-button">
              Jelajahi Layanan
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="tes-hero-decoration" aria-hidden="true">
            <span>Ab</span>
            <span>ب</span>
          </div>
        </div>
      </section>

      <section className="tes-services" id="pilihan-tes">
        <div className="tes-container">
          <div className="tes-section-heading">
            <span className="tes-eyebrow">LAYANAN KAMI</span>
            <h2>Pilih Layanan Tes</h2>
            <p>
              Tersedia pilihan tes offline dan online untuk mahasiswa
              dari berbagai jenjang maupun peserta umum.
            </p>
          </div>

          <div className="tes-card-grid">
            {layananTes.map((layanan) => (
              <article className="tes-card" key={layanan.nomor}>
                <div className="tes-card-image">
                  <img
                    src={layanan.gambar}
                    alt={layanan.alt}
                    loading="lazy"
                  />

                  <span className="tes-card-number">
                    {layanan.nomor}
                  </span>

                  <span className="tes-card-type">
                    {layanan.tipe}
                  </span>
                </div>

                <div className="tes-card-content">
                  <span className="tes-card-category">
                    {layanan.kategori}
                  </span>

                  <h3>{layanan.judul}</h3>

                  <p className="tes-card-description">
                    {layanan.deskripsi}
                  </p>

                  <div className="tes-card-divider" />

                  <ul className="tes-feature-list">
                    {layanan.fitur.map((fitur) => (
                      <li key={fitur}>
                        <span aria-hidden="true">✓</span>
                        {fitur}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={layanan.tujuan}
                    className="tes-card-button"
                  >
                    {layanan.tombol}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="tes-help">
            <div className="tes-help-icon" aria-hidden="true">
              ?
            </div>

            <div className="tes-help-content">
              <h3>Butuh informasi lebih lanjut?</h3>
              <p>
                Hubungi Pusat Pengembangan Bahasa atau kunjungi
                laman pendaftaran untuk informasi layanan.
              </p>
            </div>

            <a
              href="https://layanan.pb.uin-suska.ac.id/register.php"
              target="_blank"
              rel="noreferrer"
              className="tes-help-button"
            >
              Laman Pendaftaran
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TesBahasa
