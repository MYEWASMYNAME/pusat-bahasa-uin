import './Tentang.css'

function Tentang() {
  return (
    <div className="inner-page tentang-page">
      {/* HERO */}
      <section className="tentang-hero">
        <div className="container">
          <span className="page-label">TENTANG KAMI</span>

          <h1>
            Mengenal Pusat Pengembangan Bahasa
            <span> UIN SUSKA RIAU</span>
          </h1>

          <p>
            Pusat Pengembangan Bahasa (P2B) merupakan salah satu
            unit di lingkungan Universitas Islam Negeri Sultan
            Syarif Kasim Riau yang berperan dalam pengembangan
            dan pelayanan bahasa.
          </p>
        </div>
      </section>

      {/* IDENTITAS */}
      <section className="tentang-identitas">
        <div className="container">
          <div className="identitas-card">
            <span className="section-label">PROFIL LEMBAGA</span>

            <h2>Pusat Pengembangan Bahasa (P2B)</h2>

            <p>
              Pusat Pengembangan Bahasa merupakan unit yang
              mendukung pengembangan kemampuan bahasa di
              lingkungan UIN SUSKA Riau. Dalam perjalanannya,
              lembaga ini mengalami beberapa kali perubahan
              nama, tetapi tetap menjalankan fungsi utama
              dalam pengembangan dan pelayanan bahasa.
            </p>
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="tentang-sejarah">
        <div className="container">
          <div className="sejarah-heading">
            <span className="section-label">PERJALANAN KAMI</span>
            <h2>Sejarah Pusat Pengembangan Bahasa</h2>
            <p>
              Perjalanan panjang dalam pengembangan dan
              pelayanan bahasa di UIN SUSKA Riau.
            </p>
          </div>

          <div className="sejarah-content">
            <div className="sejarah-item">
              <div className="sejarah-tahun">Awal Berdiri</div>

              <div className="sejarah-detail">
                <h3>Unit Pembina Bahasa (UBINSA)</h3>
                <p>
                  Pada awal berdirinya, Pusat Pengembangan
                  Bahasa diberi nama Unit Pembina Bahasa
                  (UBINSA) IAIN SUSQA Pekanbaru. Selama
                  berdiri, UBINSA telah mengalami beberapa
                  kali pergantian pimpinan.
                </p>
              </div>
            </div>

            <div className="sejarah-item">
              <div className="sejarah-tahun">2003</div>

              <div className="sejarah-detail">
                <h3>Pusat Pengembangan dan Pelayanan Bahasa</h3>
                <p>
                  Pada tahun 2003, UBINSA berubah menjadi
                  Pusat Pengembangan dan Pelayanan Bahasa
                  (P3B) UIN SUSKA Riau. Lembaga ini dipercaya
                  untuk mengasuh mata kuliah bahasa asing,
                  yaitu bahasa Arab dan bahasa Inggris, bagi
                  jurusan nonbahasa di lingkungan UIN SUSKA Riau.
                </p>
              </div>
            </div>

            <div className="sejarah-item">
              <div className="sejarah-tahun">2005</div>

              <div className="sejarah-detail">
                <h3>Pusat Bahasa (PB)</h3>
                <p>
                  Pada tahun 2005, seiring dengan perubahan
                  status dari IAIN menjadi Universitas Islam
                  Negeri (UIN), Pusat Pengembangan dan
                  Pelayanan Bahasa (P3B) berubah menjadi
                  Pusat Bahasa (PB) UIN SUSKA Riau.
                </p>
              </div>
            </div>

            <div className="sejarah-item">
              <div className="sejarah-tahun">2013</div>

              <div className="sejarah-detail">
                <h3>Pusat Pengembangan Bahasa (P2B)</h3>
                <p>
                  Pada tahun 2013, Pusat Bahasa (PB) kembali
                  berubah nama menjadi Pusat Pengembangan
                  Bahasa (P2B). Walaupun mengalami beberapa
                  kali perubahan nama, fungsi utamanya tetap
                  sebagai pusat pengembangan dan pelayanan
                  bahasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNGSI LEMBAGA */}
<section className="tentang-fungsi">
  <div className="container">
    <div className="fungsi-card">
      <div className="fungsi-icon">
        <img
          src="/UIN.png"
          alt="Logo UIN SUSKA Riau"
          className="fungsi-logo"
        />
      </div>

            <div>
              <span className="section-label">KOMITMEN KAMI</span>
              <h2>Pengembangan dan Pelayanan Bahasa</h2>
              <p>
                P2B terus menjalankan fungsi pengembangan
                dan pelayanan bahasa untuk mendukung kebutuhan
                pembelajaran serta peningkatan kemampuan bahasa
                di lingkungan UIN SUSKA Riau.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tentang
