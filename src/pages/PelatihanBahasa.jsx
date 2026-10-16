import { Link } from 'react-router-dom'
import './PelatihanBahasa.css'

const program = [
{
nomor: '01',
judul: 'Bahasa Inggris',
deskripsi:
'Kembangkan kemampuan bahasa Inggris untuk mendukung komunikasi, studi, dan kebutuhan akademik.',
tag: 'English',
},
{
nomor: '02',
judul: 'Bahasa Arab',
deskripsi:
'Pelajari bahasa Arab untuk memperkuat kemampuan komunikasi dan pemahaman teks berbahasa Arab.',
tag: 'العربية',
},
{
nomor: '03',
judul: 'Bahasa Asing Lainnya',
deskripsi:
'Cari informasi mengenai pilihan bahasa dan program pelatihan yang tersedia melalui pusat layanan.',
tag: 'Languages',
},
]

function PelatihanBahasa() {
return (
<main className="pelatihan-page">
<section className="pelatihan-hero">
<div className="pelatihan-container">
<nav className="pelatihan-breadcrumb">
<Link to="/">Beranda</Link>
<span>/</span>
<Link to="/layanan">Layanan</Link>
<span>/</span>
<span>Pelatihan Bahasa Asing</span>
</nav>

      <div className="pelatihan-hero-content">
        <span className="pelatihan-eyebrow">TINGKATKAN KOMPETENSI</span>
        <h1>Pelatihan Bahasa Asing</h1>
        <p>
          Kembangkan keterampilan bahasa untuk menunjang pendidikan,
          komunikasi, dan persiapan menghadapi kebutuhan akademik
          maupun profesional.
        </p>

        <div className="pelatihan-hero-actions">
          <Link
            to="/layanan/tes-bahasa/s2-s3"
            className="pelatihan-btn pelatihan-btn-primary"
          >
            Lihat Layanan Bahasa
          </Link>
          <a href="#program" className="pelatihan-btn pelatihan-btn-outline">
            Jelajahi Program
          </a>
        </div>
      </div>
    </div>
  </section>

  <section className="pelatihan-section" id="program">
    <div className="pelatihan-container">
      <div className="pelatihan-heading">
        <span className="pelatihan-eyebrow">PILIHAN PROGRAM</span>
        <h2>Belajar Bahasa, Buka Peluang</h2>
        <p>
          Kenali pilihan bahasa dan hubungi pengelola untuk memastikan
          program, jadwal, serta kelas yang sedang tersedia.
        </p>
      </div>

      <div className="pelatihan-grid">
        {program.map((item) => (
          <article className="pelatihan-card" key={item.nomor}>
            <div className="pelatihan-card-top">
              <span className="pelatihan-number">{item.nomor}</span>
              <span className="pelatihan-tag">{item.tag}</span>
            </div>
            <h3>{item.judul}</h3>
            <p>{item.deskripsi}</p>
            <a
              href="https://layanan.pb.uin-suska.ac.id/register.php"
              target="_blank"
              rel="noreferrer"
              className="pelatihan-card-link"
            >
              Informasi dan Pendaftaran <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>

      <section className="pelatihan-benefit">
        <div className="pelatihan-benefit-copy">
          <span className="pelatihan-eyebrow">MULAI LANGKAHMU</span>
          <h2>Persiapkan diri untuk kesempatan yang lebih luas</h2>
          <p>
            Kemampuan bahasa dapat membantu proses belajar, memperluas
            akses informasi, dan meningkatkan kesiapan menghadapi
            lingkungan multibahasa.
          </p>
          <a
            href="https://layanan.pb.uin-suska.ac.id/register.php"
            target="_blank"
            rel="noreferrer"
            className="pelatihan-btn pelatihan-btn-primary"
          >
            Kunjungi Portal Layanan
          </a>
        </div>

        <div className="pelatihan-benefit-list">
          <div>
            <span>✓</span>
            <p>Pelajari bahasa untuk kebutuhan akademik.</p>
          </div>
          <div>
            <span>✓</span>
            <p>Kembangkan keterampilan komunikasi.</p>
          </div>
          <div>
            <span>✓</span>
            <p>Periksa jadwal dan program yang tersedia.</p>
          </div>
        </div>
      </section>

      <div className="pelatihan-contact">
        <div>
          <h3>Ingin mengetahui jadwal pelatihan?</h3>
          <p>Hubungi Pusat Pengembangan Bahasa untuk informasi terbaru.</p>
        </div>
        <div className="pelatihan-contact-links">
          <a href="tel:082379823169">0823-7982-3169</a>
          <a href="mailto:pb@uin-suska.ac.id">pb@uin-suska.ac.id</a>
        </div>
      </div>

      <Link to="/layanan" className="pelatihan-back-link">
        ← Kembali ke semua layanan
      </Link>
    </div>
  </section>
</main>

)
}

export default PelatihanBahasa