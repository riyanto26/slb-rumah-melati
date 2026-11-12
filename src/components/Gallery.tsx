export default function Gallery() {
  const galleryItems = [
    { image: '/gallery-1.webp', alt: 'Ruang kelas dengan AC dan meja belajar', caption: 'Ruang Kelas Ber-AC & Nyaman' },
    { image: '/gallery-2.webp', alt: 'Ruang kelas dengan AC dan meja belajar', caption: 'Ruang Kelas Ber-AC & Nyaman' },
    { image: '/about-1.webp', alt: 'Guru mendampingi tiga siswa saat belajar bersama', caption: 'Pendampingan Intensif (1 Guru : 3 Murid)' },
    { image: '/about-2.webp', alt: 'Guru mendampingi siswa belajar di meja kelas', caption: 'Kegiatan Belajar dengan Pendampingan' },
  ]
  return (
    <section className="gallery section shell" id="galeri">
      <div className="gallery-layout">
        <div className="gallery-intro section-heading-stack">
          <p className="section-badge">
            Fasilitas & Galeri
          </p>
          <h2 className="font-georgia">Suasana belajar yang nyaman dan menyenangkan.</h2>
          <p className="gallery-intro-copy">
            Didukung fasilitas ruang kelas ber-AC serta rasio ideal 1 guru untuk 3 murid guna memastikan perhatian personal yang optimal bagi setiap anak.
          </p>
        </div>
        <div className="gallery-columns" aria-label="Galeri fasilitas dan kegiatan">
          <div className="gallery-column">
            <div className="gallery-column-track">
              {[0, 1].map((group) => (
                <div className="gallery-column-group" key={group} aria-hidden={group === 1}>
                  {galleryItems.map((item, index) => (
                    <figure key={`${group}-${index}`}>
                      <img src={item.image} alt={group === 0 ? item.alt : ''} />
                      <figcaption>{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}