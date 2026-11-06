export default function Hero() {
  return (
    <section className="hero-landing" id="beranda">
      <div className="hero-landing-image" aria-hidden="true">
        <img src="/hero-image.webp" alt="" />
        <div className="hero-landing-image-blur" />
        <div className="hero-landing-image-fade" />
      </div>

      <div className="hero-landing-content">
        <h1>
          <span>Mendampingi Ananda Istimewa</span>
          <span>Menuju Kemandirian.</span>
        </h1>
        <p>
          Sekolah khusus terpadu untuk anak Autisme, Down Syndrome, dan Hambatan Belajar
          dengan pendekatan penuh kasih sayang, ramah anak, dan profesional.
        </p>
        <div className="hero-landing-actions">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSenQF6Q0M-4jSSQfPbalEezsyK3-k0J1-uxV7SRqxEV3SW1iw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-landing-primary"
          >
            Daftar PPDB Sekarang <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/6280000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-landing-secondary"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
      <nav className="hero-social-links" aria-label="Media sosial SLB Rumah Melati">
        <a
          href="https://www.instagram.com/slbrumahmelati?dlrf=MW1udmRjODVkb2pndA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram SLB Rumah Melati"
        >
          <i className="ri-instagram-line" aria-hidden="true" />
        </a>
        <a
          href="https://www.tiktok.com/@slb.rumah.melati?_r=1&_t=ZS-9B7LF76SNee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok SLB Rumah Melati"
        >
          <i className="ri-tiktok-line" aria-hidden="true" />
        </a>
        <a
          href="https://youtube.com/@slbrumahmelati4933?si=D1GmnCgEJ5jx4f91"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube SLB Rumah Melati"
        >
          <i className="ri-youtube-line" aria-hidden="true" />
        </a>
        <a
          href="https://www.facebook.com/share/1DrCscExqD/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook SLB Rumah Melati"
        >
          <i className="ri-facebook-line" aria-hidden="true" />
        </a>
      </nav>
    </section>
  )
}
