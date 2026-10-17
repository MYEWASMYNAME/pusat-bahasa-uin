
function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <main>
        <section className="hero" id="beranda">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                PUSAT PENGEMBANGAN BAHASA
              </div>

              <h1>
                Pusat Pengembangan Bahasa
                <span>UIN Sultan Syarif Kasim Riau</span>
              </h1>

              <p>
                Pusat Pengembangan Bahasa Universitas Islam Negeri
                Sultan Syarif Kasim Riau mendukung pengembangan
                kompetensi bahasa melalui layanan kebahasaan,
                program akademik, kegiatan pembelajaran, dan
                pengembangan kemampuan bahasa bagi sivitas
                akademika serta masyarakat sesuai dengan layanan
                yang tersedia.
              </p>

              <div className="hero-buttons">
                <a href="#layanan" className="primary-button">
                  Jelajahi Layanan
                  <span></span>
                </a>

                <a href="#tentang" className="secondary-button">
                  Tentang Kami
                </a>
              </div>
            </div>

            <div className="hero-decoration">
              <div className="decoration-circle circle-one"></div>
              <div className="decoration-circle circle-two"></div>

              <div className="hero-floating-card">
                <span className="floating-icon">Aa</span>
                <strong>Language</strong>
                <small>Learning Center</small>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATISTIK ================= */}
        <section className="stats-section" aria-label="Ringkasan layanan">
          <div className="container stats-container">
            <div className="stat-item">
              <strong>37</strong>
              <span>Program Bahasa</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>9</strong>
              <span>Jenis Tes Bahasa</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>3</strong>
              <span>Layanan Terjemahan</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>∞</strong>
              <span>Kesempatan Belajar</span>
            </div>
          </div>
        </section>

        {/* ================= LAYANAN ================= */}
        <section className="services-section" id="layanan">
          <div className="section-heading container">
            <div>
              <span className="section-label">LAYANAN KAMI</span>

              <h2>
                Layanan kebahasaan untuk
                <br />
                kebutuhan akademik dan profesional.
              </h2>
            </div>

            <p>
              Pusat Pengembangan Bahasa menyediakan informasi
              mengenai program pembelajaran, tes kompetensi
              bahasa, dan layanan terjemahan untuk mendukung
              kebutuhan akademik dan pengembangan kompetensi.
            </p>
          </div>

          <div className="services-container">
            {/* CARD 1 */}
            <article className="service-showcase-card course-card">
              <div className="service-card-content">
                <div className="service-card-top">
                  <div className="service-number">
                    <strong>37</strong>
                    <span>Program</span>
                  </div>

                  <h3>
                    Kursus
                    <br />
                    Bahasa
                  </h3>
                </div>

                <div className="service-tags">
                  <span>Bahasa Inggris</span>
                  <span>Bahasa Arab</span>
                  <span>Bahasa Asing Lain</span>
                  <span>English for Academic Purposes</span>
                  <span>Test Preparation</span>
                  <span>Short Course</span>
                  <span>BIPA</span>
                  <span>Bahasa Isyarat</span>
                </div>
              </div>

              <a
                href="/program"
                className="service-card-link"
                aria-label="Lihat program pembelajaran bahasa"
              >
                <span>Lihat Program</span>
                <span className="arrow">↗</span>
              </a>
            </article>

            {/* CARD 2 */}
            <article className="service-showcase-card test-card">
              <div className="service-card-content">
                <div className="service-card-top">
                  <div className="service-number">
                    <strong>9</strong>
                    <span>Jenis Tes</span>
                  </div>

                  <h3>
                    Tes
                    <br />
                    Bahasa
                  </h3>
                </div>

                <div className="test-logos">
                  <span>EPT</span>
                  <span>ECCT</span>
                  <span>TOEFL ITP</span>
                  <span>TOEFL iBT</span>
                  <span>TOEIC</span>
                  <span>IELTS</span>
                  <span>TelU EEE</span>
                </div>
              </div>

              <a
                href="/layanan/tes-bahasa"
                className="service-card-link"
                aria-label="Lihat informasi layanan tes bahasa"
              >
                <span>Lihat Layanan</span>
                <span className="arrow">↗</span>
              </a>
            </article>

            {/* CARD 3 */}
            <article className="service-showcase-card translation-card">
              <div className="service-card-content">
                <div className="service-card-top">
                  <div className="service-number">
                    <strong>3</strong>
                    <span>Layanan</span>
                  </div>

                  <h3>Terjemahan</h3>
                </div>

                <div className="translation-description">
                  <p>
                    Informasi layanan terjemahan untuk mendukung
                    kebutuhan akademik, penelitian, publikasi,
                    dan dokumen kelembagaan sesuai layanan yang
                    tersedia.
                  </p>
                </div>

                <div className="translation-symbol">
                  <span>文</span>
                  <span>A</span>
                </div>
              </div>

              <a
                href="/layanan/terjemahan-abstrak"
                className="service-card-link"
                aria-label="Lihat informasi layanan terjemahan"
              >
                <span>Lihat Layanan</span>
                <span className="arrow">↗</span>
              </a>
            </article>
          </div>
        </section>

        {/* ================= TENTANG ================= */}
        <section className="about-section" id="tentang">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-big-text">BAHASA</div>

              <div className="about-card">
                <span>Tentang Kami</span>
                <strong>Pusat Pengembangan Bahasa</strong>
                <small>UIN SUSKA RIAU</small>
              </div>
            </div>

            <div className="about-content">
              <span className="section-label">
                TENTANG PUSAT PENGEMBANGAN BAHASA
              </span>

              <h2>
                Mengembangkan kompetensi bahasa,
                <br />
                mendukung komunikasi dan akademik.
              </h2>

              <p>
                Pusat Pengembangan Bahasa Universitas Islam
                Negeri Sultan Syarif Kasim Riau merupakan unit
                yang mendukung pengembangan kompetensi bahasa
                melalui pembelajaran, layanan kebahasaan,
                pengujian kompetensi, dan kegiatan akademik.
              </p>

              <p>
                Informasi kelembagaan, visi dan misi, serta
                layanan yang tersedia dapat diakses melalui
                halaman resmi Pusat Pengembangan Bahasa.
              </p>

              <a href="/tentang" className="text-button">
                Mengenal Pusat Pengembangan Bahasa
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= PROGRAM ================= */}
        <section className="program-section" id="program">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">
                PROGRAM PENGEMBANGAN BAHASA
              </span>

              <h2>
                Program untuk mendukung
                <br />
                kebutuhan pengembangan bahasa.
              </h2>

              <p>
                Jelajahi informasi program pembelajaran dan
                pengembangan kompetensi bahasa yang tersedia
                di Pusat Pengembangan Bahasa.
              </p>
            </div>

            <div className="program-grid">
              <article className="program-card">
                <span className="program-number">01</span>

                <h3>Academic English</h3>

                <p>
                  Program bahasa Inggris untuk mendukung
                  kebutuhan akademik, pendidikan, dan
                  komunikasi dalam lingkungan perguruan tinggi.
                </p>

                <a href="/program">Lihat Program →</a>
              </article>

              <article className="program-card">
                <span className="program-number">02</span>

                <h3>Pengembangan Kompetensi Bahasa</h3>

                <p>
                  Informasi program pengembangan kemampuan
                  bahasa untuk mendukung kebutuhan pembelajaran
                  dan komunikasi.
                </p>

                <a href="/program">Lihat Program →</a>
              </article>

              <article className="program-card">
                <span className="program-number">03</span>

                <h3>Bahasa Arab</h3>

                <p>
                  Informasi pembelajaran bahasa Arab untuk
                  mendukung pengembangan kompetensi bahasa
                  sesuai program yang tersedia.
                </p>

                <a href="/program">Lihat Program →</a>
              </article>
            </div>
          </div>
        </section>

        {/* ================= BERITA ================= */}
        <section className="news-section" id="berita">
          <div className="container">
            <div className="news-heading">
              <div>
                <span className="section-label">
                  BERITA DAN INFORMASI
                </span>

                <h2>
                  Informasi dan kegiatan
                  <br />
                  Pusat Pengembangan Bahasa.
                </h2>
              </div>

              <a href="/berita">
                Lihat Semua Berita →
              </a>
            </div>

            <div className="news-grid">
              <article className="news-card">
                <div
                  className="news-image yellow"
                  role="img"
                  aria-label="Ilustrasi program pembelajaran bahasa"
                >
                  PROGRAM
                </div>

                <div className="news-body">
                  <span>PROGRAM</span>

                  <h3>
                    Informasi Program Pembelajaran Bahasa
                  </h3>

                  <p>
                    Dapatkan informasi mengenai program
                    pembelajaran dan pengembangan kompetensi
                    bahasa yang tersedia.
                  </p>

                  <a href="/program">
                    Lihat Program →
                  </a>
                </div>
              </article>

              <article className="news-card">
                <div
                  className="news-image green"
                  role="img"
                  aria-label="Ilustrasi informasi layanan bahasa"
                >
                  LAYANAN
                </div>

                <div className="news-body">
                  <span>LAYANAN</span>

                  <h3>
                    Informasi Layanan Kebahasaan
                  </h3>

                  <p>
                    Jelajahi layanan kebahasaan untuk
                    mendukung kebutuhan akademik dan
                    pengembangan kemampuan bahasa.
                  </p>

                  <a href="/layanan">
                    Lihat Layanan →
                  </a>
                </div>
              </article>

              <article className="news-card">
                <div
                  className="news-image pink"
                  role="img"
                  aria-label="Ilustrasi informasi kelembagaan"
                >
                  INFORMASI
                </div>

                <div className="news-body">
                  <span>KELEMBAGAAN</span>

                  <h3>
                    Informasi Pusat Pengembangan Bahasa
                  </h3>

                  <p>
                    Kenali profil, visi, misi, dan informasi
                    kelembagaan Pusat Pengembangan Bahasa
                    UIN Sultan Syarif Kasim Riau.
                  </p>

                  <a href="/tentang">
                    Tentang Kami →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact-section" id="kontak">
          <div className="container contact-box">
            <div>
              <span className="section-label">
                INFORMASI LAYANAN
              </span>

              <h2>
                Dapatkan informasi Pusat
                Pengembangan Bahasa.
              </h2>

              <p>
                Kunjungi halaman layanan atau kontak untuk
                memperoleh informasi mengenai program,
                kegiatan, dan layanan kebahasaan yang tersedia.
              </p>
            </div>

            <a href="/kontak" className="contact-button">
              Hubungi Kami
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">U</div>

              <div className="logo-text">
                <strong>UIN SUSKA RIAU</strong>
                <span>PUSAT PENGEMBANGAN BAHASA</span>
              </div>
            </div>

            <p>
              Pusat Pengembangan Bahasa Universitas Islam
              Negeri Sultan Syarif Kasim Riau.
            </p>
          </div>

          <nav className="footer-links" aria-label="Menu utama">
            <strong>Menu</strong>

            <a href="/">Beranda</a>
            <a href="/tentang">Tentang Kami</a>
            <a href="/tentang/visi-misi">Visi dan Misi</a>
            <a href="/layanan">Layanan</a>
          </nav>

          <nav
            className="footer-links"
            aria-label="Informasi lainnya"
          >
            <strong>Informasi</strong>

            <a href="/program">Program</a>
            <a href="/berita">Berita dan Informasi</a>
            <a href="/kontak">Kontak</a>
          </nav>

          <div className="footer-links">
            <strong>Lokasi</strong>

            <span>UIN Sultan Syarif Kasim Riau</span>
            <span>Pekanbaru, Riau, Indonesia</span>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Pusat Pengembangan
            Bahasa UIN Sultan Syarif Kasim Riau
          </span>

          <span>Hak cipta dilindungi.</span>
        </div>
      </footer>
    </>
  )
}

export default Home
