import { programs } from '../data/schoolData'

export default function Programs() {
  return (
    <section className="program section shell" id="program">
      <div className="program-visual">
        <img src="/program-image.png" alt="Kegiatan siswa dalam program belajar SLB Rumah Melati" />
        <div className="visual-badge"><b>4+</b><span>Program aktivitas penunjang</span></div>
      </div>
      <div className="program-content">
        <div className="program-heading section-heading-stack">
          <p className="section-badge section-badge-on-dark">
            Program & Vokasi
          </p>
          <h2 className="font-georgia">Belajar dari pengalaman nyata.</h2>
          <p className="section-copy">Aktivitas menyenangkan dirancang untuk melatih keterampilan sosial, motorik, dan kemandirian.</p>
        </div>
        <div className="program-list">
          {programs.map(([title, copy], index) => (
            <article className="program-card" key={title}>
              <span className="program-card-icon" aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}