import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Tentang Kami</h3>
          <p>Phone store bertekad untuk menyediakan pengalaman belanja online
             yang menyenangkan dan praktis bagi pelanggan kami. 
             Kami menawarkan berbagai produk HP terbaru dan terbaik.</p>
        </div>
        <div className="footer-section">
          <h3>Kategori</h3>
          <ul>
            <li><a href="#">Smartphone</a></li>
            <li><a href="#">Tablet</a></li>
            <li><a href="#">Aksesori</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Kontak</h3>
          <p>Alamat: DKI Jakarta </p>
          <p>Email: LitllePhone@onlineshop.com</p>
          <p>Telepon: 123-4567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Online Shop HP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
