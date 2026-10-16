import { Link } from 'react-router-dom'
import './TesBahasaOnline.css'

const skills = [
{
number: '01',
title: 'Grammar',
description: 'Mengukur pemahaman tata bahasa Inggris.',
},
{
number: '02',
title: 'Vocabulary',
description: 'Mengukur penguasaan kosakata bahasa Inggris.',
},
{
number: '03',
title: 'Reading',
description: 'Mengukur kemampuan memahami bacaan.',
},
{
number: '04',
title: 'Listening',
description: 'Mengukur kemampuan memahami percakapan audio.',
},
]

const kategori = [
{
title: 'Mahasiswa',
harga: 'Rp225.000',
deskripsi: 'Untuk mahasiswa yang membutuhkan tes bahasa Inggris.',
},
{
title: 'Umum',
harga: 'Rp330.000',
deskripsi: 'Untuk peserta umum yang ingin mengikuti tes bahasa Inggris.',
},
]

function TesBahasaOnline() {
return (
<main className="tes-online">
<section className="online-hero">
<div className="online-container">
<nav className="online-breadcrumb">
<Link to="/">Beranda</Link>
<span>/</span>
<Link to="/layanan">Layanan</Link>
<span>/</span>
<Link to="/layanan/tes-bahasa">Tes Bahasa</Link>
<span>/</span>
<span>Tes Online</span>
</nav>

      <div className="online-hero-grid">
        <div className="online-hero-copy">
          <span className="online-eyebrow">FLEKSIBEL DAN PRAKTIS</span>
          <h1>Tes Bahasa Inggris Online</h1>
          <p>
            Ikuti tes bahasa Inggris melalui platform online dengan
            proses yang praktis. Pelajari informasi layanan dan
            persiapkan diri sebelum mendaftar.
          </p>

          <div className="online-hero-actions">
            <a
              href="https://myexamhubs.com/"
              target="_blank"
              rel="noreferrer"
              className="online-btn online-btn-primary"
            >
              Buka Platform Tes
            </a>
            <a href="#biaya-tes" className="online-btn online-btn-outline">
              Lihat Biaya
            </a>
          </div>

          <div className="online-hero-note">
            <span>✓</span>
            <p>Pelajari ketentuan tes sebelum melakukan pembayaran.</p>
          </div>
        </div>

        <div className="online-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
            alt="Peserta mengikuti tes bahasa Inggris menggunakan laptop"
          />
          <div className="online-visual-card">
            <span className="online-visual-icon">A+</span>
            <div>
              <strong>English Proficiency</strong>
              <span>Ukur kemampuan bahasa Inggris</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="online-section">
    <div className="online-container">
      <div className="online-heading">
        <span className="online-eyebrow">KOMPONEN TES</span>
        <h2>Aspek yang Dipelajari</h2>
        <p>
          Berikut contoh keterampilan yang perlu dipersiapkan dalam
          menghadapi tes bahasa Inggris.
        </p>
      </div>

      <div className="online-skill-grid">
        {skills.map((skill) => (
          <article className="online-skill-card" key={skill.number}>
            <span className="online-skill-number">{skill.number}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>

      <section className="online-pricing" id="biaya-tes">
        <div className="online-heading">
          <span className="online-eyebrow">BIAYA LAYANAN</span>
          <h2>Pilih Kategori Peserta</h2>
          <p>
            Periksa kategori, tarif, dan ketentuan yang berlaku sebelum
            melakukan pendaftaran.
          </p>
        </div>

        <div className="online-price-grid">
          {kategori.map((item) => (
            <article className="online-price-card" key={item.title}>
              <span className="online-price-label">{item.title}</span>
              <h3>{item.harga}</h3>
              <p>{item.deskripsi}</p>
              <a
                href="https://myexamhubs.com/"
                target="_blank"
                rel="noreferrer"
                className="online-btn online-btn-primary"
              >
                Lanjut ke Platform
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="online-guide">
        <div>
          <span className="online-eyebrow">PANDUAN PESERTA</span>
          <h2>Persiapkan Tes Kamu</h2>
          <p>
            Pastikan seluruh informasi dan persyaratan sudah dipahami
            sebelum mengikuti tes online.
          </p>
        </div>

        <ol>
          <li>
            <span>1</span>
            <div>
              <strong>Buka platform resmi</strong>
              <p>Akses platform tes melalui tautan yang tersedia.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>Periksa ketentuan</strong>
              <p>Pastikan kategori peserta, biaya, dan masa aktif akun.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Siapkan perangkat</strong>
              <p>Gunakan perangkat dan koneksi internet yang stabil.</p>
            </div>
          </li>
        </ol>
      </section>

      <div className="online-contact">
        <div>
          <h3>Masih punya pertanyaan?</h3>
          <p>Hubungi Pusat Pengembangan Bahasa untuk informasi layanan.</p>
        </div>
        <a href="mailto:pb@uin-suska.ac.id">pb@uin-suska.ac.id ↗</a>
      </div>

      <Link to="/layanan/tes-bahasa" className="online-back-link">
        ← Kembali ke pilihan tes bahasa
      </Link>
    </div>
  </section>
</main>

)
}

export default TesBahasaOnline