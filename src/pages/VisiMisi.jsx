
import './VisiMisi.css'

function VisiMisi() {
  const misi = [
    'Menyelenggarakan pendidikan dan pengajaran untuk melahirkan sumber daya manusia yang berkualitas secara akademik dan profesional serta memiliki integritas pribadi sebagai sarjana muslim.',
    'Menyelenggarakan penelitian dan pengkajian untuk mengembangkan ilmu pengetahuan, teknologi, dan/atau seni dengan menggunakan paradigma Islami.',
    'Menyelenggarakan pengabdian kepada masyarakat dengan memanfaatkan ilmu pengetahuan, teknologi, dan/atau seni dengan menggunakan paradigma Islami.',
    'Menyelenggarakan tata pamong perguruan tinggi yang otonom, akuntabel, dan transparan yang menjamin peningkatan kualitas berkelanjutan.',
  ]

  const tujuan = [
    'Menghasilkan lulusan yang berakhlak mulia dan menjadi anggota masyarakat yang memiliki kemampuan serta keunggulan akademik dan/atau profesional yang dapat menerapkan, mengembangkan, serta menciptakan ilmu pengetahuan, teknologi, dan/atau seni yang bernafaskan Islam.',
    'Mengembangkan dan menyebarluaskan ilmu agama Islam, ilmu pengetahuan, teknologi, dan/atau seni serta mengupayakan penggunaannya untuk meningkatkan martabat dan taraf kehidupan masyarakat serta memperkaya kebudayaan nasional.',
    'Menghasilkan karya ilmiah dan karya kreatif yang unggul berkelas dunia.',
  ]

  return (
    <main className="visi-misi-page">
      {/* HERO */}
      <section className="vm-hero">
        <div className="container">
          <span className="page-label">TENTANG KAMI</span>

          <h1>Visi, Misi, dan Tujuan</h1>

          <p>
            Landasan dan arah pengembangan Universitas Islam
            Negeri Sultan Syarif Kasim Riau dalam mewujudkan
            pendidikan tinggi yang unggul dan berintegritas.
          </p>
        </div>
      </section>

      {/* VISI */}
      <section className="vm-section">
        <div className="container">
          <article className="vm-visi-card">
            <div className="vm-icon" aria-hidden="true">
              V
            </div>

            <div>
              <span className="vm-eyebrow">ARAH PENGEMBANGAN</span>
              <h2>Visi</h2>

              <blockquote>
                “Visi UIN Suska Riau adalah terwujudnya
                Universitas Islam Negeri sebagai lembaga
                pendidikan tinggi pilihan utama pada tingkat
                dunia yang mengembangkan ajaran Islam, ilmu
                pengetahuan, teknologi dan/atau seni secara
                integral pada tahun 2023.”
              </blockquote>
            </div>
          </article>
        </div>
      </section>

      {/* MISI */}
      <section className="vm-section vm-section-soft">
        <div className="container">
          <div className="vm-heading">
            <span className="vm-eyebrow">LANGKAH STRATEGIS</span>
            <h2>Misi</h2>
            <p>
              Upaya yang dijalankan untuk mewujudkan visi
              universitas.
            </p>
          </div>

          <div className="vm-list">
            {misi.map((item, index) => (
              <article className="vm-list-card" key={index}>
                <span className="vm-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TUJUAN */}
      <section className="vm-section">
        <div className="container">
          <div className="vm-heading">
            {/* <span className="vm-eyebrow">HASIL YANG INGIN DICAPAI</span> */}
            <h2>Tujuan</h2>
            <p>
              Sasaran yang ingin dicapai dalam pelaksanaan
              pendidikan, penelitian, dan pengabdian kepada
              masyarakat.
            </p>
          </div>

          <div className="vm-tujuan-grid">
            {tujuan.map((item, index) => (
              <article className="vm-tujuan-card" key={index}>
                {/* <span className="vm-tujuan-number">
                  Tujuan {index + 1}
                </span> */}

                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATATAN */}
      <section className="vm-footer">
        <div className="container">
          {/* <p>
            Informasi visi, misi, dan tujuan di atas merujuk
            pada teks yang diberikan. Karena visi tersebut
            mencantumkan tahun 2023, pastikan kembali apakah
            masih berlaku atau sudah diperbarui melalui
            sumber resmi UIN SUSKA Riau sebelum dipublikasikan.
          </p> */}
        </div>
      </section>
    </main>
  )
}

export default VisiMisi
