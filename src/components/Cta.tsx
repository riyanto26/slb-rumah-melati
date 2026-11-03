export default function Cta() {
  return (
    <section className="cta">
      <span className="cta-decoration cta-decoration-yellow" aria-hidden="true" />
      <span className="cta-decoration cta-decoration-purple" aria-hidden="true" />
      <span className="cta-decoration cta-decoration-green" aria-hidden="true" />
      <span className="cta-decoration cta-decoration-blue" aria-hidden="true" />
      <div className="cta-content">
        <p className="cta-badge">Penerimaan Peserta Didik Baru</p>
        <h2>Langkah kecil hari ini,<br /><span>masa depan mandiri nanti.</span></h2>
        <p className="cta-copy">
          Temukan lingkungan belajar yang mendukung potensi dan kemandirian ananda.
          Mari mulai perjalanan bersama SLB Rumah Melati.
        </p>
        <div className="cta-actions">
          <a className="button button-light" href="https://wa.me/6280000000000">Jadwalkan Konsultasi</a>
          <a className="cta-secondary" href="#program">Lihat Program</a>
        </div>
      </div>
    </section>
  )
}