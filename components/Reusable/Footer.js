import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content center-content">
        <img src="/Base/logo.png" alt="BioOil Logo" />
        <p>© 2021 BioOil. Сите права се заштитени.</p>
        <span>
          Designed and developed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/wellworks.creative/"
          >
            wellworks creative
          </a>
        </span>
        <div className="footer__icons">
          <a
            href="https://www.facebook.com/biooilMK/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Icons/facebook.png" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/biooilmk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Icons/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/biooilMK/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Icons/mail.png" alt="messenger" />
          </a>
        </div>
      </div>
      <div className="footer__sponsored">
        <img src="/Base/premium-products.png" alt="Премиум Продукти" />
        <img src="/Base/swiss.png" alt="Швајцарска амбасада" />
      </div>
    </footer>
  );
}
