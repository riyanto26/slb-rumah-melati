import { photos } from '../data/schoolData'

export default function Gallery() {
  const galleryItems = [
    { image: photos.story, alt: 'Anak-anak mengikuti sesi bercerita bersama', caption: 'Ruang kelas interaktif' },
    { image: photos.study, alt: 'Siswa belajar menulis dengan pendampingan', caption: 'Pendampingan personal' },
    { image: photos.art, alt: 'Anak-anak berkegiatan kreatif bersama', caption: 'Aktivitas kreatif' },
    { image: photos.class, alt: 'Suasana kegiatan belajar di kelas', caption: 'Kegiatan belajar' },
    { image: photos.hero, alt: 'Suasana sekolah SLB Rumah Melati', caption: 'Lingkungan sekolah' },
  ]
  const columns = [galleryItems.slice(0, 3), galleryItems.slice(2)]

  return (
    <section className="gallery section shell" id="galeri">
      <div className="gallery-layout">
        <div className="gallery-intro">
          <p className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-[#1d4ed8] underline decoration-2 underline-offset-4">
            Fasilitas & Galeri
          </p>
          <h2>Suasana belajar yang nyaman dan menyenangkan.</h2>
        </div>
        <div className="gallery-columns">
          {columns.map((items, columnIndex) => (
            <div className="gallery-column" key={columnIndex}>
              <div className={`gallery-column-track${columnIndex === 1 ? ' gallery-column-track-reverse' : ''}`}>
                {[0, 1].map((group) => (
                  <div className="gallery-column-group" key={group} aria-hidden={group === 1}>
                    {items.map((item, index) => (
                      <figure key={`${group}-${index}`}>
                        <img src={item.image} alt={group === 0 ? item.alt : ''} />
                        <figcaption>{item.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}