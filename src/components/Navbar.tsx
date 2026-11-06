import { useEffect, useRef, useState } from 'react'

const navigationLinks = [
  ['Beranda', '#beranda'],
  ['Tentang Kami', '#tentang'],
  ['Layanan Terapi', '#terapi'],
  ['Program & Vokasi', '#program'],
  ['Fasilitas', '#galeri'],
  ['Kontak', '#kontak'],
] as const

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')
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
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
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
    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActiveSection('beranda')
        return
      }

      const currentSection = navigationLinks.reduce((active, [, href]) => {
        const section = document.getElementById(href.slice(1))
        if (section && section.getBoundingClientRect().top <= 160) {
          return href.slice(1)
        }
        return active
      }, 'beranda')

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

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
        className={`fixed top-0 left-0 right-0 z-50 px-3 pt-4 transition-transform duration-300 ease-in-out sm:pt-5 ${
          isHidden || isMenuOpen ? '-translate-y-full pointer-events-none' : 'translate-y-0'
        }`}
        onFocusCapture={() => setIsHidden(false)}
      >
        <nav className="relative mx-auto flex min-h-14 w-fit max-w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-slate-950/55 px-3 text-white shadow-xl shadow-slate-950/15 backdrop-blur-2xl sm:gap-4 sm:px-5">
          <a className="flex shrink-0 items-center gap-2 text-xs font-semibold tracking-tight sm:text-sm" href="#beranda">
            <img
              src="/logo.webp"
              alt="Logo SLB Rumah Melati"
              className="shrink-0"
              style={{ width: 32, height: 32, objectFit: 'contain' }}
            />
            <span className="font-georgia hidden font-extrabold sm:inline">
              SLB Rumah Melati
            </span>
          </a>

          <div className="hidden items-center gap-1 text-[11px] font-medium text-white/90 lg:flex">
            {navigationLinks.map(([label, href]) => (
              <a
                href={href}
                aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                className={`whitespace-nowrap rounded-full border px-2.5 py-2 transition-colors ${
                  activeSection === href.slice(1)
                    ? 'border-white/25 bg-white/15 text-white shadow-inner'
                    : 'border-transparent hover:border-white/20 hover:text-white'
                }`}
                key={href}
                onClick={() => setActiveSection(href.slice(1))}
              >
                {label}
              </a>
            ))}
            <a
              href="#ppdb"
              className="ml-1 inline-flex min-h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-[var(--primary)] px-4 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-xl transition-colors hover:bg-[var(--primary-dark)]"
            >
              Daftar PPDB
            </a>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            aria-label="Buka menu navigasi"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setIsHidden(false)
              setIsMenuOpen(true)
            }}
          >
            <i className="ri-menu-line text-xl" aria-hidden="true" />
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
              <img src="/logo.webp" alt="" />
              <span className="font-georgia">SLB Rumah Melati</span>
            </a>
            <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Tutup menu navigasi">
              <i className="ri-close-line" aria-hidden="true" />
            </button>
          </div>
          <div className="mobile-menu-body">
            <div className="mobile-menu-heading">
              <p>JELAJAHI SEKOLAH</p>
              <h2>Temukan ruang<br />untuk bertumbuh.</h2>
            </div>
          <nav className="mobile-menu-links">
            {navigationLinks.map(([label, href], index) => (
              <a
                onClick={() => {
                  setActiveSection(href.slice(1))
                  closeMenu()
                }}
                href={href}
                aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                className={activeSection === href.slice(1) ? 'is-active' : undefined}
                key={href}
              >
                <span className="mobile-menu-index">0{index + 1}</span>
                <span>{label}</span>
                <span className="mobile-menu-arrow" aria-hidden="true">
                  <i className="ri-arrow-right-up-line" />
                </span>
              </a>
            ))}
          </nav>
          </div>
          <div className="mobile-menu-bottom">
            <p>Pendidikan dengan kasih, tumbuh dengan percaya diri.</p>
            <a onClick={closeMenu} href="#ppdb" className="mobile-menu-cta">
              Daftar PPDB <i className="ri-arrow-right-line" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </>
  )
}