
import { Link } from 'react-router-dom'
import './TesBahasa.css'

const langkah = [
  {
    nomor: '01',
    judul: 'Buat akun',
    deskripsi:
      'Buka portal pendaftaran dan lengkapi data diri dengan benar untuk membuat akun.',
  },
  {
    nomor: '02',
    judul: 'Aktivasi email',
    deskripsi:
      'Periksa inbox email yang kamu daftarkan, kemudian klik tautan aktivasi akun.',
  },
  {
    nomor: '03',
    judul: 'Pilih layanan tes',
    deskripsi:
      'Masuk ke dashboard, pilih layanan tes yang dibutuhkan, lalu ikuti petunjuknya.',
  },
]

const informasi = [
  'Satu mahasiswa cukup memiliki satu akun untuk mengakses seluruh layanan P2B.',
  'Pembuatan akun gratis. Biaya dikenakan sesuai tarif layanan yang dipilih.',
  'Jadwal, tarif, dan teknis pembayaran tersedia pada setiap layanan tes.',
]

const linkDaftar =
  'https://layanan.pb.uin-suska.ac.id/register.php'

function TesBahasa() {
  return (
    <main className="tb-page">
      <section className="tb-hero">
        <div className="tb-hero-shape tb-shape-one" />
        <div className="tb-hero-shape tb-shape-two" />

        <div className="tb-container tb-hero-inner">
          <nav className="tb-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/layanan">Layanan</Link>
            <span>/</span>
            <span>Tes Bahasa</span>
          </nav>

          <div className="tb-hero-grid">
            <div className="tb-hero-copy">
              <span className="tb-eyebrow">
                <span className="tb-eyebrow-dot" />
                LAYANAN PUSAT BAHASA
              </span>

              <h1>
                Bahasa Arab
                <br />
                <span>& Inggris.</span>
                <br />
                <span className="tb-title-outline">Offline</span>
              </h1>

              <p className="tb-hero-description">
                Layanan tes kemampuan bahasa untuk mahasiswa
                D3 dan S1 dengan metode paper-based.
                Persiapkan langkah akademikmu bersama Pusat
                Bahasa UIN SUSKA RIAU.
              </p>

              <div className="tb-hero-actions">
                <a
                  href={linkDaftar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tb-button tb-button-light"
                >
                  Daftar Sekarang <span>↗</span>
                </a>

                <a href="#panduan" className="tb-text-link">
                  Pelajari langkahnya <span>↓</span>
                </a>
              </div>

              <div className="tb-hero-note">
                <span className="tb-check">✓</span>
                Pembuatan akun gratis
              </div>
            </div>

            <div className="tb-visual" aria-label="Ilustrasi bahasa">
              <div className="tb-visual-top">
                <span>LANGUAGE TEST</span>
                <span>01 — 03</span>
              </div>

             
<div className="tb-visual-art tb-language-art">
  <span className="tb-art-english">English</span>

  <span className="tb-art-arabic" lang="ar" dir="rtl">
    اللغة العربية
  </span>

  <span className="tb-art-divider" />

  <span className="tb-art-caption">
    TWO LANGUAGES.
    <br />
    ONE JOURNEY.
  </span>
</div>


              <div className="tb-visual-bottom">
                <span>ARABIC</span>
                <span className="tb-visual-bottom-dot">●</span>
                <span>ENGLISH</span>
                <span className="tb-visual-bottom-year">P2B / UIN</span>
              </div>
            </div>
          </div>

          <div className="tb-hero-footer">
            <span>TES KEMAMPUAN BAHASA</span>
            <span>MAHASISWA D3 & S1</span>
            <span>PAPER-BASED TEST</span>
          </div>
        </div>
      </section>

      <section className="tb-steps-section" id="panduan">
        <div className="tb-container">
          <div className="tb-section-heading">
            <div>
              <span className="tb-section-label">
                PROSES PENDAFTARAN
              </span>
              <h2>
                Tiga langkah.
                <br />
                <span>Satu akun untuk semua.</span>
              </h2>
            </div>

            <p>
              Ikuti alur berikut untuk membuat akun dan
              memilih layanan tes sesuai kebutuhanmu.
            </p>
          </div>

          <div className="tb-steps-grid">
            {langkah.map((item) => (
              <article className="tb-step" key={item.nomor}>
                <div className="tb-step-top">
                  <span className="tb-step-number">{item.nomor}</span>
                  <span className="tb-step-arrow">↗</span>
                </div>

                <h3>{item.judul}</h3>
                <p>{item.deskripsi}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-info-section">
        <div className="tb-container tb-info-grid">
          <div className="tb-info-heading">
            <span className="tb-section-label">
              SEBELUM MENDAFTAR
            </span>
            <h2>
              Informasi
              <br />
              <span>yang perlu kamu tahu.</span>
            </h2>
            <p>
              Kenali ketentuan dasar sebelum memilih
              layanan tes di Pusat Bahasa.
            </p>
          </div>

          <div className="tb-info-list">
            {informasi.map((teks, index) => (
              <div className="tb-info-item" key={teks}>
                <span>0{index + 1}</span>
                <p>{teks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tb-register-section">
        <div className="tb-container">
          <div className="tb-register-panel">
            <div className="tb-register-decoration">→</div>

            <div className="tb-register-copy">
              <span className="tb-section-label">
                MULAI LANGKAHMU
              </span>
              <h2>
                Siap menguji
                <br />
                kemampuanmu?
              </h2>
              <p>
                Kunjungi portal resmi untuk membuat akun,
                mengaktifkannya melalui email, dan memilih
                layanan tes yang kamu butuhkan.
              </p>
            </div>

            <div className="tb-register-action">
              <span className="tb-register-caption">
                PORTAL PENDAFTARAN RESMI
              </span>

              <a
                href={linkDaftar}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-button tb-button-dark"
              >
                Buka Portal Pendaftaran <span>↗</span>
              </a>

              <span className="tb-register-free">
                Gratis untuk pembuatan akun
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="tb-contact-section">
        <div className="tb-container">
          <div className="tb-contact-heading">
            <span className="tb-section-label">
              KAMI SIAP MEMBANTU
            </span>
            <h2>Ada yang ingin ditanyakan?</h2>
            <p>
              Hubungi Pusat Bahasa untuk mendapatkan informasi
              lebih lanjut mengenai layanan tes.
            </p>
          </div>

          <div className="tb-contact-grid">
            <a
              href="https://wa.me/6282379823169"
              target="_blank"
              rel="noopener noreferrer"
              className="tb-contact-card"
            >
              <span className="tb-contact-icon">↗</span>
              <span className="tb-contact-label">
                WHATSAPP / TELEPON
              </span>
              <strong>0823-7982-3169</strong>
              <span className="tb-contact-action">
                Hubungi kami <span>→</span>
              </span>
            </a>

            <a
              href="mailto:pb@uin-suska.ac.id"
              className="tb-contact-card"
            >
              <span className="tb-contact-icon">✉</span>
              <span className="tb-contact-label">
                EMAIL INFORMASI
              </span>
              <strong>pb@uin-suska.ac.id</strong>
              <span className="tb-contact-action">
                Kirim email <span>→</span>
              </span>
            </a>
          </div>

          <div className="tb-bottom-nav">
            <Link to="/layanan">← Kembali ke semua layanan</Link>
            <span>PUSAT BAHASA UIN SUSKA RIAU</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TesBahasa
