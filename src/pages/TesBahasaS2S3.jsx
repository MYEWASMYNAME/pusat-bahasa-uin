import { Link } from 'react-router-dom'
import './DetailTesBahasaS2S3.css'
const layanan = [
{
nomor: '01',
judul: 'Pelatihan Bahasa Asing',
deskripsi:
'Tingkatkan kemampuan bahasa asing melalui program pelatihan yang dirancang untuk mendukung kebutuhan akademik.',
harga: 'Rp300.000',
satuan: 'per bahasa',
},
{
nomor: '02',
judul: 'Tes Kemahiran Bahasa',
deskripsi:
'Ukur kemampuan bahasa asing sebagai bagian dari kebutuhan akademik dan persyaratan studi.',
harga: 'Rp200.000',
satuan: 'per bahasa',
},
{
nomor: '03',
judul: 'Paket Pelatihan + Tes',
deskripsi:
'Ikuti pelatihan sekaligus tes kemahiran bahasa dalam satu paket layanan.',
harga: 'Rp500.000',
satuan: 'per bahasa',
},
]
function TesBahasaS2S3() {
return (
<main className="detail-s2s3">
<section className="s2s3-hero">
<div className="s2s3-container">
<nav className="s2s3-breadcrumb">
<Link to="/">Beranda</Link>
<span>/</span>
<Link to="/layanan">Layanan</Link>
<span>/</span>
<Link to="/layanan/tes-bahasa">Tes Bahasa</Link>
<span>/</span>
<span>S2/S3</span>
</nav>
      <div className="s2s3-hero-content">
        <span className="s2s3-eyebrow">LAYANAN AKADEMIK</span>
        <h1>Tes dan Pelatihan Bahasa Asing S2/S3</h1>
        <p>
          Layanan tes kemahiran dan pelatihan bahasa asing untuk
          mendukung kebutuhan akademik mahasiswa jenjang magister
          dan doktor.
        </p>

        <div className="s2s3-hero-actions">
          <a
            href="https://layanan.pb.uin-suska.ac.id/register.php"
            target="_blank"
            rel="noreferrer"
            className="s2s3-btn s2s3-btn-primary"
          >
            Daftar Sekarang
          </a>
          <a href="#pilihan-layanan" className="s2s3-btn s2s3-btn-outline">
            Lihat Layanan
          </a>
        </div>
      </div>
    </div>
  </section>

  <section className="s2s3-section" id="pilihan-layanan">
    <div className="s2s3-container">
      <div className="s2s3-section-heading">
        <span className="s2s3-eyebrow">PILIHAN LAYANAN</span>
        <h2>Layanan Bahasa untuk S2/S3</h2>
        <p>Pilih layanan sesuai kebutuhan akademik kamu.</p>
      </div>

      <div className="s2s3-service-grid">
        {layanan.map((item) => (
          <article className="s2s3-service-card" key={item.nomor}>
            <span className="s2s3-service-number">{item.nomor}</span>
            <h3>{item.judul}</h3>
            <p>{item.deskripsi}</p>
            <div className="s2s3-price">
              <strong>{item.harga}</strong>
              <span>{item.satuan}</span>
            </div>
            <a
              href="https://layanan.pb.uin-suska.ac.id/register.php"
              target="_blank"
              rel="noreferrer"
              className="s2s3-card-link"
            >
              Pilih Layanan <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>

      <div className="s2s3-info-panel">
        <div>
          <span className="s2s3-eyebrow">INFORMASI PENDAFTARAN</span>
          <h2>Bagaimana cara mendaftar?</h2>
          <p>
            Ikuti langkah berikut untuk mengakses layanan Pusat
            Pengembangan Bahasa.
          </p>
        </div>

        <ol className="s2s3-steps">
          <li>
            <span>1</span>
            <div>
              <strong>Buat akun</strong>
              <p>Daftar melalui portal layanan resmi.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>Pilih layanan</strong>
              <p>Pilih tes atau pelatihan sesuai kebutuhan.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Periksa informasi pembayaran</strong>
              <p>Ikuti tarif, prosedur, dan instruksi yang tertera di portal.</p>
            </div>
          </li>
        </ol>

        <a
          href="https://layanan.pb.uin-suska.ac.id/register.php"
          target="_blank"
          rel="noreferrer"
          className="s2s3-btn s2s3-btn-primary"
        >
          Buka Portal Pendaftaran
        </a>
      </div>

      <div className="s2s3-contact">
        <div>
          <h3>Butuh informasi lebih lanjut?</h3>
          <p>Hubungi Pusat Pengembangan Bahasa UIN Suska Riau.</p>
        </div>
        <div className="s2s3-contact-links">
          <a href="tel:082379823169">0823-7982-3169</a>
          <a href="mailto:pb@uin-suska.ac.id">pb@uin-suska.ac.id</a>
        </div>
      </div>

      <Link to="/layanan/tes-bahasa" className="s2s3-back-link">
        ← Kembali ke pilihan tes bahasa
      </Link>
    </div>
  </section>
</main>
)
}
export default TesBahasaS2S3