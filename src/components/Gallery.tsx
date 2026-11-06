export default function Gallery() {
  const galleryItems = [
    { image: '/gallery-1.png', alt: 'Anak-anak mengikuti sesi bercerita bersama', caption: 'Ruang kelas interaktif' },
    { image: '/gallery-2.png', alt: 'Siswa belajar menulis dengan pendampingan', caption: 'Pendampingan personal' },
    { image: '/gallery-3.png', alt: 'Anak-anak berkegiatan kreatif bersama', caption: 'Aktivitas kreatif' },
    { image: '/gallery-4.png', alt: 'Suasana kegiatan belajar di kelas', caption: 'Kegiatan belajar' },
  ]
  const columns = [galleryItems.slice(0, 3), galleryItems.slice(2)]

  return (
    <section className="gallery section shell" id="galeri">
      <div className="gallery-layout">
        <div className="gallery-intro section-heading-stack">
          <p className="section-badge">
            Fasilitas & Galeri
          </p>
          <h2 className="font-georgia">Suasana belajar yang nyaman dan menyenangkan.</h2>
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