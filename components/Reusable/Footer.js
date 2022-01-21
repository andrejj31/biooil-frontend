import React from "react";

export default function Footer() {
  return (
    <footer className="footer ">
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
          <img src="/Icons/facebook.png" alt="facebook" />
          <img src="/Icons/instagram.png" alt="instagram" />
          <img src="/Icons/messenger.png" alt="messenger" />
        </div>
      </div>
    </footer>
  );
}
