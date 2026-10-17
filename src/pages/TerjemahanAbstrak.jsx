import { Link } from 'react-router-dom'
import './TerjemahanAbstrak.css'
const bahasa = [
{
kode: '01',
dari: 'Bahasa Indonesia',
ke: 'Bahasa Arab',
simbol: 'ع',
},
{
kode: '02',
dari: 'Bahasa Indonesia',
ke: 'Bahasa Inggris',
simbol: 'EN',
},
]
const alur = [
{
nomor: '01',
judul: 'Isi formulir pendaftaran',
deskripsi:
'Lengkapi formulir layanan terjemahan abstrak melalui tautan resmi.',
},
{
nomor: '02',
judul: 'Lakukan pembayaran',
deskripsi:
'Transfer biaya layanan ke rekening yang tercantum pada informasi pembayaran.',
},
{
nomor: '03',
judul: 'Unggah bukti pembayaran',
deskripsi:
'Kirim bukti pembayaran melalui formulir sesuai petunjuk yang diberikan.',
},
{
nomor: '04',
judul: 'Terima hasil terjemahan',
deskripsi:
'Tim penerjemah memproses abstrak dan mengirimkan hasil melalui email.',
},
]
function TerjemahanAbstrak() {
return (
<main className="terjemahan-page">
<section className="terjemahan-hero">
<div className="terjemahan-container">
<nav className="terjemahan-breadcrumb">
<Link to="/">Beranda</Link>
<span>/</span>
<Link to="/layanan">Layanan</Link>
<span>/</span>
<span>Terjemahan Abstrak</span>
</nav>
      <div className="terjemahan-hero-content">
        <span className="terjemahan-eyebrow">
          LAYANAN PENERJEMAHAN
        </span>

        <h1>Jasa Terjemahan Abstrak</h1>

        <p>
          Bantu karya ilmiahmu menjangkau lebih banyak pembaca melalui
          layanan terjemahan abstrak dari Bahasa Indonesia ke Bahasa
          Arab atau Bahasa Inggris.
        </p>

        <div className="terjemahan-hero-actions">
          <a
            href="https://forms.gle/MawtmfEYvcqHumun7"
            target="_blank"
            rel="noreferrer"
            className="terjemahan-btn terjemahan-btn-primary"
          >
            Daftar Layanan <span>↗</span>
          </a>

          <a
            href="#alur-layanan"
            className="terjemahan-btn terjemahan-btn-outline"
          >
            Lihat Alur Layanan
          </a>
        </div>

        <div className="terjemahan-hero-meta">
          <span>✓</span>
          <p>
            Ikuti prosedur pendaftaran dan pembayaran sesuai petunjuk
            resmi.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="terjemahan-section">
    <div className="terjemahan-container">
      <div className="terjemahan-intro">
        <div>
          <span className="terjemahan-eyebrow">PILIHAN BAHASA</span>
          <h2>Terjemahkan Abstrakmu</h2>
        </div>

        <p>
          Pilih pasangan bahasa yang sesuai dengan kebutuhan karya
          ilmiah atau penelitianmu.
        </p>
      </div>

      <div className="terjemahan-language-grid">
        {bahasa.map((item) => (
          <article className="terjemahan-language-card" key={item.kode}>
            <div className="terjemahan-language-top">
              <span className="terjemahan-language-code">
                {item.kode}
              </span>
              <span className="terjemahan-language-symbol">
                {item.simbol}
              </span>
            </div>

            <span className="terjemahan-language-label">
              BAHASA SUMBER
            </span>
            <h3>{item.dari}</h3>

            <div className="terjemahan-language-arrow">
              <span>↓</span>
              Diterjemahkan ke
            </div>

            <span className="terjemahan-language-label">
              BAHASA TUJUAN
            </span>
            <h3>{item.ke}</h3>
          </article>
        ))}
      </div>

      <section className="terjemahan-registration">
        <div className="terjemahan-registration-copy">
          <span className="terjemahan-eyebrow">
            PENDAFTARAN ONLINE
          </span>
          <h2>Mulai proses terjemahan abstrakmu</h2>
          <p>
            Isi formulir layanan untuk menyampaikan kebutuhan
            penerjemahan. Pastikan data dan dokumen yang diperlukan
            sudah disiapkan.
          </p>

          <a
            href="https://forms.gle/MawtmfEYvcqHumun7"
            target="_blank"
            rel="noreferrer"
            className="terjemahan-btn terjemahan-btn-primary"
          >
            Buka Formulir Layanan <span>↗</span>
          </a>
        </div>

        <div className="terjemahan-registration-visual">
          <div className="terjemahan-document-icon">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M17 7H37L49 19V55H17V7Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M37 7V19H49M24 30H42M24 38H42M24 46H36"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="terjemahan-visual-caption">
            ABSTRACT TRANSLATION
          </span>
          <h3>Terjemahan untuk karya ilmiah</h3>
          <p>
            Ikuti petunjuk resmi agar proses layanan berjalan lancar.
          </p>
        </div>
      </section>

      <section className="terjemahan-payment">
        <div className="terjemahan-payment-heading">
          <span className="terjemahan-eyebrow">
            INFORMASI PEMBAYARAN
          </span>
          <h2>Rekening Pembayaran</h2>
          <p>
            Gunakan informasi rekening berikut sesuai pengumuman
            layanan resmi.
          </p>
        </div>

        <div className="terjemahan-bank-card">
          <div className="terjemahan-bank-header">
            <div className="terjemahan-bank-mark">BRK</div>
            <div>
              <span>REKENING PEMBAYARAN</span>
              <h3>BRK Syariah</h3>
            </div>
          </div>

          <div className="terjemahan-account-number">
            <span>Nomor Rekening</span>
            <strong>1010300014</strong>
          </div>

          <div className="terjemahan-account-name">
            <span>Nama Rekening</span>
            <strong>RPL 008 BLU UIN SUSKA UTK PKE</strong>
          </div>

          <div className="terjemahan-payment-note">
            <span>ⓘ</span>
            <p>
              Pastikan kembali nominal dan instruksi pembayaran melalui
              formulir atau kanal resmi sebelum melakukan transfer.
            </p>
          </div>
        </div>
      </section>

      <section className="terjemahan-process" id="alur-layanan">
        <div className="terjemahan-process-heading">
          <span className="terjemahan-eyebrow">TAHAPAN LAYANAN</span>
          <h2>Alur Terjemahan Abstrak</h2>
          <p>
            Ikuti empat tahapan berikut sesuai prosedur layanan.
          </p>
        </div>

        <div className="terjemahan-timeline">
          {alur.map((item) => (
            <article className="terjemahan-step" key={item.nomor}>
              <div className="terjemahan-step-number">
                {item.nomor}
              </div>

              <div className="terjemahan-step-content">
                <h3>{item.judul}</h3>
                <p>{item.deskripsi}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="terjemahan-help">
        <div className="terjemahan-help-icon">?</div>
        <div className="terjemahan-help-copy">
          <h3>Butuh informasi lebih lanjut?</h3>
          <p>
            Hubungi Pusat Pengembangan Bahasa UIN SUSKA Riau melalui
            kontak resmi untuk menanyakan prosedur layanan.
          </p>
        </div>
        <a
          href="https://pb.uin-suska.ac.id/"
          target="_blank"
          rel="noreferrer"
          className="terjemahan-help-link"
        >
          Website Resmi <span>↗</span>
        </a>
      </section> */}

      {/* <Link to="/layanan" className="terjemahan-back-link">
        ← Kembali ke semua layanan
      </Link> */}
    </div>
  </section>
</main>
)
}
export default TerjemahanAbstrak