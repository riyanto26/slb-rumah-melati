import { useEffect, useState } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const heroSection = document.getElementById('beranda')
    if (!heroSection) return

    const updateVisibility = () => {
      setShowBackToTop(window.scrollY >= heroSection.offsetHeight)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <>
      <footer id="kontak">
        <div className="footer-map">
          <iframe
            title="Peta lokasi SLB Rumah Melati"
            src="https://maps.google.com/maps?q=-6.2011872%2C107.016763&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="shell footer-inner">
          <div className="footer-cta">
            <h2 className="font-georgia">Temukan potensi terbaik ananda.<br /><span>Mulai tumbuh bersama kami.</span></h2>
          </div>
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="footer-logo" href="#beranda">
                <img src="/logo.webp" alt="Logo SLB Rumah Melati" />
              </a>
              <p>Perumahan Telaga Mas Blok J1 No. 3, RT.001/RW.014, Harapan Baru, Bekasi Utara, Kota Bekasi.</p>
              <a className="footer-map-route" href="https://maps.app.goo.gl/Mxz7wJJnLDKzJaHQ8" target="_blank" rel="noopener noreferrer">
                <i className="ri-map-pin-line" aria-hidden="true" /> Buka rute di Google Maps
              </a>
            </div>
            <div><span className="footer-label">Jelajahi</span><a href="#beranda">Beranda</a><a href="#tentang">Tentang Kami</a><a href="#galeri">Fasilitas & Galeri</a></div>
            <div><span className="footer-label">Layanan</span><a href="#terapi">Layanan Terapi</a><a href="#program">Program & Vokasi</a><a href="#ppdb">Informasi PPDB</a></div>
            <div><span className="footer-label">Hubungi kami</span><a href="mailto:slb.rumela04@gmail.com">slb.rumela04@gmail.com</a><p>Senin—Kamis<br />08.00—14.00 WIB<br />Jumat<br />08.00—11.00 WIB</p></div>
            <div>
              <span className="footer-label">Ikuti Kami</span>
              <a className="footer-social-link" href="https://www.instagram.com/slbrumahmelati?dlrf=MW1udmRjODVkb2pndA==" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line" aria-hidden="true" /> Instagram
              </a>
              <a className="footer-social-link" href="https://www.tiktok.com/@slb.rumah.melati?_r=1&_t=ZS-9B7LF76SNee" target="_blank" rel="noopener noreferrer">
                <i className="ri-tiktok-line" aria-hidden="true" /> TikTok
              </a>
              <a className="footer-social-link" href="https://youtube.com/@slbrumahmelati4933?si=D1GmnCgEJ5jx4f91" target="_blank" rel="noopener noreferrer">
                <i className="ri-youtube-line" aria-hidden="true" /> YouTube
              </a>
              <a className="footer-social-link" href="https://www.facebook.com/share/1DrCscExqD/" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-line" aria-hidden="true" /> Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="footer-landscape">
          <img src="/bg-footer.webp" alt="Ilustrasi lingkungan dan kegiatan siswa SLB Rumah Melati" />
          <div className="footer-bottom"><span>© 2026 SLB Rumah Melati.</span><span>Pendidikan dengan kasih, tumbuh dengan percaya diri.</span></div>
        </div>
      </footer>
      <a
        href="#beranda"
        className={`floating-back-to-top fixed z-40 grid h-12 w-12 place-items-center rounded-full bg-[var(--primary)] text-white shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 ${
          showBackToTop ? 'is-visible' : ''
        }`}
        style={{
          visibility: showBackToTop ? 'visible' : 'hidden',
          opacity: showBackToTop ? 1 : 0,
          transform: showBackToTop ? 'translateY(0)' : 'translateY(12px)',
          pointerEvents: showBackToTop ? 'auto' : 'none',
        }}
        aria-label="Kembali ke atas"
        aria-hidden={!showBackToTop}
        title="Kembali ke atas"
        tabIndex={showBackToTop ? 0 : -1}
        onClick={(event) => {
          event.preventDefault()
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
              ? 'auto'
              : 'smooth',
          })
        }}
      >
        <i className="ri-arrow-up-line text-xl" aria-hidden="true" />
      </a>
    </>
  )
}