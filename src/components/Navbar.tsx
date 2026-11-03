import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const previousScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - previousScrollY.current

      if (isMenuOpen || currentScrollY < 80 || scrollDifference < -4) {
        setIsHidden(false)
      } else if (scrollDifference > 4) {
        setIsHidden(true)
      }

      previousScrollY.current = currentScrollY
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-12 transition-transform duration-300 ease-in-out ${
          isHidden || isMenuOpen ? '-translate-y-full pointer-events-none' : 'translate-y-0'
        }`}
        onFocusCapture={() => setIsHidden(false)}
      >
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between py-3 px-6 rounded-full bg-black/30 backdrop-blur-md border border-white/15 shadow-lg text-white">
          {/* Brand Logo & Name */}
          <a className="flex items-center gap-3 text-sm font-semibold tracking-tight" href="#beranda">
            <img
              src="/logo-slb.png"
              alt="Logo SLB Rumah Melati"
              className="shrink-0"
              style={{ width: 38, height: 38, objectFit: 'contain' }}
            />
            <span className="hidden sm:inline font-sans">SLB Rumah Melati</span>
          </a>

          {/* Links Navigation */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-200">
            <a href="#beranda" className="hover:text-white transition-colors">Beranda</a>
            <a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a>
            <a href="#terapi" className="hover:text-white transition-colors">Layanan Terapi</a>
            <a href="#program" className="hover:text-white transition-colors">Program & Vokasi</a>
            <a href="#galeri" className="hover:text-white transition-colors">Fasilitas</a>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </div>

          {/* CTA Button */}
          <a
            href="#ppdb"
            className="hidden md:inline-flex px-4 py-2 rounded-full bg-[#1d4ed8] text-white font-medium text-xs hover:bg-[#1e40af] transition-all shadow-md"
          >
            Daftar PPDB
          </a>

          <button
            type="button"
            className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-white/20 text-white"
            aria-label="Buka menu navigasi"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setIsHidden(false)
              setIsMenuOpen(true)
            }}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <div className="mobile-menu-top">
            <a className="mobile-menu-brand" onClick={closeMenu} href="#beranda">
              <img src="/logo-slb.png" alt="" />
              <span>SLB Rumah Melati</span>
            </a>
            <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Tutup menu navigasi">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="mobile-menu-body">
            <div className="mobile-menu-heading">
              <p>JELAJAHI SEKOLAH</p>
              <h2>Temukan ruang<br />untuk bertumbuh.</h2>
            </div>
          <nav className="mobile-menu-links">
            {[
              ['Beranda', '#beranda'],
              ['Tentang Kami', '#tentang'],
              ['Layanan Terapi', '#terapi'],
              ['Program & Vokasi', '#program'],
              ['Fasilitas & Galeri', '#galeri'],
              ['Kontak', '#kontak'],
            ].map(([label, href], index) => (
              <a onClick={closeMenu} href={href} key={href}>
                <span className="mobile-menu-index">0{index + 1}</span>
                <span>{label}</span>
                <span className="mobile-menu-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          </div>
          <div className="mobile-menu-bottom">
            <p>Pendidikan dengan kasih, tumbuh dengan percaya diri.</p>
            <a onClick={closeMenu} href="#ppdb" className="mobile-menu-cta">Daftar PPDB <span aria-hidden="true">→</span></a>
          </div>
        </div>
      )}
    </>
  )
}