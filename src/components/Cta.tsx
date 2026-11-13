export default function Cta() {
  return (
    <section
      className="cta bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/cta-csr-mayora.webp')" }}
    >
      <div className="cta-overlay" aria-hidden="true" />
      <div className="cta-content">
        <div className="section-heading-stack section-heading-stack-center cta-heading-stack">
          <p className="cta-badge">Penerimaan Peserta Didik Baru</p>
          <h2 className="font-georgia">Langkah kecil hari ini,<br /><span>masa depan mandiri nanti.</span></h2>
        </div>
        <p className="cta-copy">
          Temukan lingkungan belajar yang mendukung potensi dan kemandirian ananda.
          Mari mulai perjalanan bersama SLB Rumah Melati.
        </p>
        <div className="cta-actions">
          <a className="button button-light" href="https://wa.me/6285779096272">Jadwalkan Konsultasi</a>
          <a className="cta-secondary" href="#program">Lihat Program</a>
        </div>
      </div>
      <p className="cta-photo-caption">
        📸 Mengemas souvenir CSR Program Binaan PT. Astra Otoparts di PT Mayora Indah Tbk.
      </p>
    </section>
  )
}