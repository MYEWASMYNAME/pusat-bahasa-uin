
import { Link } from 'react-router-dom'
import './DetailTesBahasa.css'

const linkPendaftaran = 'https://layanan.pb.uin-suska.ac.id/register.php'

function TesBahasaD3S1() {
  return (
    <main className="detail-tes-page">
      <section className="detail-tes-hero">
        <div className="detail-tes-container">
          <div className="detail-tes-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/layanan">Layanan</Link>
            <span>/</span>
            <Link to="/layanan/tes-bahasa">Tes Bahasa Asing</Link>
            <span>/</span>
            <span>D3/S1</span>
          </div>

          <span className="detail-tes-eyebrow">
            LAYANAN P2B UIN SUSKA RIAU
          </span>

          <h1>
            Tes Bahasa Arab dan
            <br />
            <span>Inggris Offline</span>
          </h1>

          <p>
            Layanan tes kemahiran bahasa bagi mahasiswa program
            Diploma dan Sarjana dengan metode paper-based.
          </p>

          <div className="detail-tes-tags">
            <span>Mahasiswa D3/S1</span>
            <span>Paper-based</span>
            <span>Bahasa Arab & Inggris</span>
          </div>

          <a
            href={linkPendaftaran}
            target="_blank"
            rel="noreferrer"
            className="detail-tes-primary-button"
          >
            Daftar Sekarang <span>↗</span>
          </a>
        </div>
      </section>

      <section className="detail-tes-body">
        <div className="detail-tes-container detail-tes-layout">
          <article className="detail-tes-main">
            <div className="detail-tes-heading">
              <span className="detail-tes-eyebrow">
                PANDUAN PENDAFTARAN
              </span>
              <h2>Bagaimana cara mendaftar?</h2>
              <p>
                Ikuti langkah berikut untuk membuat akun dan
                memilih layanan tes yang kamu butuhkan.
              </p>
            </div>

            <div className="detail-tes-steps">
              <div className="detail-tes-step">
                <span className="detail-tes-step-number">01</span>
                <div>
                  <h3>Buat akun pendaftaran</h3>
                  <p>
                    Klik tombol pendaftaran untuk membuka laman
                    resmi Pusat Pengembangan Bahasa. Isi seluruh
                    data yang diminta dengan benar.
                  </p>
                  <a
                    href={linkPendaftaran}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buka laman pendaftaran ↗
                  </a>
                </div>
              </div>

              <div className="detail-tes-step">
                <span className="detail-tes-step-number">02</span>
                <div>
                  <h3>Aktivasi akun melalui email</h3>
                  <p>
                    Buka kotak masuk email yang digunakan saat
                    mendaftar, lalu klik tautan aktivasi yang
                    dikirimkan ke email tersebut.
                  </p>
                </div>
              </div>

              <div className="detail-tes-step">
                <span className="detail-tes-step-number">03</span>
                <div>
                  <h3>Pilih layanan tes</h3>
                  <p>
                    Setelah akun aktif, masuk ke Dashboard.
                    Pilih layanan yang diinginkan dan ikuti
                    petunjuk serta ketentuan yang tersedia.
                  </p>
                </div>
              </div>
            </div>

            <div className="detail-tes-note">
              <span className="detail-tes-note-icon">i</span>
              <div>
                <h3>Informasi penting</h3>
                <ul>
                  <li>
                    Satu mahasiswa cukup membuat satu akun untuk
                    mengakses seluruh layanan P2B.
                  </li>
                  <li>
                    Pembuatan akun gratis. Pembayaran dilakukan
                    sesuai tarif layanan yang dipilih.
                  </li>
                  <li>
                    Informasi jadwal, tarif, dan teknis pembayaran
                    tersedia pada masing-masing layanan di sistem
                    pendaftaran.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <aside className="detail-tes-sidebar">
            <div className="detail-tes-register-card">
              <span className="detail-tes-register-icon">↗</span>
              <h3>Siap mengikuti tes?</h3>
              <p>
                Lanjutkan ke sistem resmi P2B untuk membuat akun
                dan memilih layanan tes.
              </p>
              <a
                href={linkPendaftaran}
                target="_blank"
                rel="noreferrer"
                className="detail-tes-register-button"
              >
                Daftar Layanan
              </a>
              <span className="detail-tes-free-label">
                Pendaftaran akun gratis
              </span>
            </div>

            <div className="detail-tes-contact-card">
              <span className="detail-tes-eyebrow">
                BUTUH BANTUAN?
              </span>
              <h3>Kontak Informasi</h3>
              <p>
                Hubungi Pusat Pengembangan Bahasa jika membutuhkan
                informasi lebih lanjut.
              </p>

              <a href="tel:082379823169" className="detail-tes-contact">
                <span className="detail-tes-contact-icon">☎</span>
                <span>
                  <small>WA / Telepon</small>
                  <strong>0823-7982-3169</strong>
                </span>
              </a>

              <a
                href="mailto:pb@uin-suska.ac.id"
                className="detail-tes-contact"
              >
                <span className="detail-tes-contact-icon">✉</span>
                <span>
                  <small>Email</small>
                  <strong>pb@uin-suska.ac.id</strong>
                </span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="detail-tes-bottom">
        <div className="detail-tes-container">
          <Link to="/layanan/tes-bahasa">
            ← Kembali ke daftar Tes Bahasa Asing
          </Link>
        </div>
      </section>
    </main>
  )
}

export default TesBahasaD3S1
