export default function Footer() {
  return (
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
          <div><span className="footer-label">Hubungi kami</span><a href="mailto:yppabki_rumahmelati@ymail.com">yppabki_rumahmelati@ymail.com</a><p>Senin—Jumat<br />08.00—15.00 WIB</p></div>
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
  )
}