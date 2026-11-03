export default function Footer() {
  return (
    <footer id="kontak">
      <div className="shell footer-inner">
        <div className="footer-cta">
          <h2>Temukan potensi terbaik ananda.<br /><span>Mulai tumbuh bersama kami.</span></h2>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="footer-logo" href="#beranda">
              <img src="/logo-slb.png" alt="Logo SLB Rumah Melati" />
            </a>
            <p>Perumahan Telaga Mas Blok J1 No. 3, RT.001/RW.014, Harapan Baru, Bekasi Utara, Kota Bekasi.</p>
          </div>
          <div><span className="footer-label">Jelajahi</span><a href="#beranda">Beranda</a><a href="#tentang">Tentang Kami</a><a href="#galeri">Fasilitas & Galeri</a></div>
          <div><span className="footer-label">Layanan</span><a href="#terapi">Layanan Terapi</a><a href="#program">Program & Vokasi</a><a href="#ppdb">Informasi PPDB</a></div>
          <div><span className="footer-label">Hubungi kami</span><a href="mailto:yppabki_rumahmelati@ymail.com">yppabki_rumahmelati@ymail.com</a><p>Senin—Jumat<br />08.00—15.00 WIB</p></div>
        </div>
      </div>
      <div className="footer-landscape">
        <img src="/bg-footer.png" alt="Ilustrasi lingkungan dan kegiatan siswa SLB Rumah Melati" />
        <div className="footer-bottom"><span>© 2026 SLB Rumah Melati.</span><span>Pendidikan dengan kasih, tumbuh dengan percaya diri.</span></div>
      </div>
    </footer>
  )
}