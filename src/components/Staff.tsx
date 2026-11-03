import { useState } from 'react'
import { staffMembers } from '../data/schoolData'

export default function Staff() {
  const biographies = [
    'Mendampingi siswa mengenali potensi diri dan membangun kemandirian melalui kegiatan belajar yang terarah dan penuh perhatian.',
    'Membantu siswa mengembangkan kemampuan komunikasi, menyampaikan kebutuhan, dan berinteraksi dengan lingkungan sekitar.',
    'Mendukung keterampilan motorik dan aktivitas sehari-hari agar siswa semakin percaya diri dan mandiri.',
    'Menciptakan suasana kelas yang aman dan menyenangkan agar setiap siswa dapat belajar sesuai ritmenya.',
    'Membantu siswa membangun perilaku positif, fokus, dan kemampuan beradaptasi dalam keseharian.',
    'Mendampingi siswa berlatih keterampilan sosial dan kemandirian dengan pendekatan yang penuh empati.',
  ]
  const slides = Array.from({ length: Math.ceil(staffMembers.length / 3) }, (_, index) =>
    staffMembers.slice(index * 3, index * 3 + 3),
  )
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="staff section">
      <div className="shell staff-layout">
        <div className="staff-intro">
          <p className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-[#1d4ed8] underline decoration-2 underline-offset-4">
            Tenaga Pendidik
          </p>
          <h2>Hadir dengan hati, mendampingi dengan ilmu.</h2>
          <p className="staff-intro-copy">
            Tim kami bekerja bersama keluarga untuk memahami kebutuhan setiap anak dan mendukung proses tumbuh kembangnya.
          </p>
        </div>
        <div className="staff-carousel">
          <div className="staff-controls">
            <span>{String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
            <button
              type="button"
              onClick={() => setCurrentSlide((slide) => Math.max(0, slide - 1))}
              disabled={currentSlide === 0}
              aria-label="Tampilkan tenaga pendidik sebelumnya"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setCurrentSlide((slide) => Math.min(slides.length - 1, slide + 1))}
              disabled={currentSlide === slides.length - 1}
              aria-label="Tampilkan tenaga pendidik berikutnya"
            >
              →
            </button>
          </div>
          <div className="staff-viewport" aria-live="polite">
            <div className="staff-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, slideIndex) => (
                <div className="staff-slide" key={slideIndex}>
                  {slide.map((member, memberIndex) => {
                    const biographyIndex = slideIndex * 3 + memberIndex
                    return (
                      <article className="staff-card" key={member.name}>
                        <img className="portrait" src={member.photo} alt={`Foto ${member.name}`} loading="lazy" />
                        <div className="staff-identity"><h3>{member.name}</h3><p>{member.role}</p></div>
                        <p className="staff-bio">{biographies[biographyIndex]}</p>
                      </article>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}