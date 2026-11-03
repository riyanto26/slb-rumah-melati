const photos = {
  hero: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1800&q=85',
  class: 'https://images.unsplash.com/photo-1589206946274-929e4da3996b?auto=format&fit=crop&w=1200&q=85',
  story: 'https://images.unsplash.com/photo-1588075592405-d3d4f0846961?auto=format&fit=crop&w=1200&q=85',
  study: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=85',
  art: 'https://images.unsplash.com/photo-1786926274316-981cac2a2662?auto=format&fit=crop&w=1200&q=85',
}

const services = [
  ['01', 'Terapi Behaviour', 'Membangun perilaku positif, fokus, serta kemampuan adaptasi anak secara bertahap.'],
  ['02', 'Terapi Wicara', 'Meningkatkan kemampuan komunikasi verbal dan nonverbal sesuai kebutuhan anak.'],
  ['03', 'Terapi Okupasi', 'Mengoptimalkan keterampilan motorik halus dan kemandirian dalam aktivitas harian.'],
  ['04', 'Terapi Remedial', 'Mendampingi kemampuan akademik dasar: membaca, menulis, dan berhitung.'],
]

const programs = [
  ['Bina Diri & Behaviour', 'Rutinitas terarah untuk melatih kemandirian, regulasi emosi, dan keterampilan sehari-hari.'],
  ['Fun Cooking', 'Belajar mengikuti instruksi, mengenal bahan, dan bekerja sama melalui kegiatan memasak.'],
  ['Berkebun', 'Mengenal alam sekaligus melatih tanggung jawab, sensorik, dan koordinasi motorik.'],
  ['Kunjungan & Kesenian', 'Pengalaman sosial nyata melalui field trip dan eksplorasi seni yang adaptif.'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function SectionHead({ tag, title, copy }: { tag: string; title: string; copy?: string }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{tag}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Navigasi utama">
          <a className="brand" href="#beranda">
            <span className="brand-mark">RM</span>
            <span>SLB Rumah Melati.</span>
          </a>
          <div className="nav-links">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#terapi">Layanan Terapi</a>
            <a href="#program">Program & Vokasi</a>
            <a href="#galeri">Fasilitas</a>
            <a href="#kontak">Kontak</a>
          </div>
          <a className="button button-small" href="#ppdb">Pendaftaran PPDB</a>
        </nav>
      </header>

      <section className="hero shell" id="beranda">
        <div className="hero-copy">
          <div className="badge"><span>✓</span> Pendidikan Inklusif & Vokasi Terpadu di Bekasi Utara</div>
          <h1>Mendampingi Ananda Istimewa Menuju <em>Kemandirian</em></h1>
          <p>Sekolah khusus terpadu untuk anak Autisme, Down Syndrome, dan Hambatan Belajar dengan pendekatan penuh kasih sayang.</p>
          <div className="actions">
            <a className="button" href="#ppdb">Daftar PPDB Sekarang <Arrow /></a>
            <a className="button button-ghost" href="https://wa.me/6280000000000">Konsultasi via WhatsApp</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={photos.hero} alt="Guru mendampingi anak-anak belajar bersama di kelas" />
          <div className="hero-note">
            <span className="note-icon">♥</span>
            <div><strong>Setiap anak berharga</strong><small>Tumbuh dalam ritmenya sendiri</small></div>
          </div>
          <p className="photo-credit">Foto: National Cancer Institute / Unsplash</p>
        </div>
      </section>

      <section className="quick shell" id="ppdb">
        <div className="quick-intro">
          <span>Informasi Sekolah</span>
          <strong>Yang perlu Ayah & Bunda ketahui</strong>
        </div>
        <div className="quick-item"><b>01</b><div><strong>Jam Belajar Inklusif</strong><p>Sesi TK, SD, SMP, hingga Kelas Lanjutan</p></div></div>
        <div className="quick-item"><b>02</b><div><strong>Gelombang PPDB</strong><p>Pendaftaran tahun ajaran baru telah dibuka</p></div></div>
        <div className="quick-item"><b>03</b><div><strong>Konsultasi & Assessment</strong><p>Materi disesuaikan dengan kemampuan siswa</p></div></div>
      </section>

      <section className="about shell section" id="tentang">
        <div className="about-copy">
          <SectionHead tag="Tentang Kami" title="Lingkungan aman untuk bertumbuh tanpa batas." />
          <p>Kami berkomitmen memberikan pelayanan pendidikan khusus dengan tenaga pendidik profesional untuk mengembangkan potensi dan kemandirian setiap anak.</p>
          <a className="text-link" href="#kontak">Kenali Rumah Melati <Arrow /></a>
        </div>
        <div className="bento">
          <article className="vision-card">
            <span className="card-label">Visi kami</span>
            <blockquote>“Mengembangkan potensi diri anak berkebutuhan khusus untuk menjadi pribadi yang mandiri.”</blockquote>
            <div className="line-art" aria-hidden="true">✦</div>
          </article>
          <article className="mission-card">
            <span className="card-label">Misi kami</span>
            <ul>
              <li><span>01</span>Meningkatkan keterampilan dan kecakapan hidup.</li>
              <li><span>02</span>Menciptakan lingkungan belajar yang kondusif.</li>
              <li><span>03</span>Membangun citra positif di masyarakat.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="services section" id="terapi">
        <div className="shell">
          <SectionHead tag="Layanan Terapi Khusus" title="Penanganan profesional, sesuai kebutuhan anak." copy="Kolaborasi guru, terapis, dan orang tua dalam program yang terukur dan penuh empati." />
          <div className="service-grid">
            {services.map(([number, title, copy]) => (
              <article className="service-card" key={number}>
                <div className="service-top"><span>{number}</span><Arrow /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <div className="service-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="program section shell" id="program">
        <div className="program-visual">
          <img src={photos.class} alt="Pendamping belajar membantu siswa di kelas" />
          <div className="visual-badge"><b>4+</b><span>Program aktivitas penunjang</span></div>
        </div>
        <div className="program-copy">
          <SectionHead tag="Program & Vokasi" title="Belajar dari pengalaman nyata." copy="Aktivitas menyenangkan dirancang untuk melatih keterampilan sosial, motorik, dan kemandirian." />
          <div className="program-list">
            {programs.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="staff section">
        <div className="shell">
          <SectionHead tag="Tenaga Pendidik" title="Hadir dengan hati, mendampingi dengan ilmu." />
          <div className="staff-grid">
            {[
              ['Ibu Sari Wulandari', 'Guru Pendamping Khusus', 'SW'],
              ['Ibu Nabila Putri', 'Terapis Wicara', 'NP'],
              ['Bapak Aditya Pratama', 'Terapis Okupasi', 'AP'],
            ].map(([name, role, initials], index) => (
              <article className="staff-card" key={name}>
                <div className={`portrait portrait-${index + 1}`}><span>{initials}</span></div>
                <div><h3>{name}</h3><p>{role}</p></div>
                <span className="staff-arrow"><Arrow /></span>
              </article>
            ))}
          </div>
          <p className="staff-note">Nama dan foto tenaga pendidik dapat diperbarui sesuai data sekolah.</p>
        </div>
      </section>

      <section className="gallery section shell" id="galeri">
        <SectionHead tag="Fasilitas & Galeri" title="Suasana belajar yang nyaman dan menyenangkan." />
        <div className="gallery-grid">
          <figure className="gallery-main"><img src={photos.story} alt="Anak-anak mengikuti sesi bercerita bersama" /><figcaption>Ruang kelas interaktif</figcaption></figure>
          <figure><img src={photos.study} alt="Siswa belajar menulis dengan pendampingan" /><figcaption>Pendampingan personal</figcaption></figure>
          <figure><img src={photos.art} alt="Anak-anak berkegiatan kreatif bersama" /><figcaption>Aktivitas kreatif</figcaption></figure>
        </div>
      </section>

      <section className="cta shell">
        <div>
          <p className="eyebrow">Penerimaan Peserta Didik Baru</p>
          <h2>Langkah kecil hari ini, untuk masa depan yang lebih mandiri.</h2>
        </div>
        <a className="button button-light" href="https://wa.me/6280000000000">Jadwalkan Konsultasi <Arrow /></a>
      </section>

      <footer id="kontak">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="brand brand-light" href="#beranda"><span className="brand-mark">RM</span><span>SLB Rumah Melati.</span></a>
            <p>Perumahan Telaga Mas Blok J1 No. 3, RT.001/RW.014, Harapan Baru, Bekasi Utara, Kota Bekasi.</p>
          </div>
          <div><span className="footer-label">Jelajahi</span><a href="#beranda">Beranda</a><a href="#terapi">Layanan Terapi</a><a href="#ppdb">Informasi PPDB</a><a href="#kontak">Kontak</a></div>
          <div><span className="footer-label">Hubungi kami</span><a href="mailto:yppabki_rumahmelati@ymail.com">yppabki_rumahmelati@ymail.com</a><p>Senin—Jumat<br />08.00—15.00 WIB</p></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 SLB Rumah Melati.</span><span>Pendidikan dengan kasih, tumbuh dengan percaya diri.</span></div>
      </footer>
    </main>
  )
}
