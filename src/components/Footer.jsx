import React from "react";

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="Dev Stack home">
            <span className="footer-logo-mark">DS</span>
            <span>Dev <b>Stack</b></span>
          </a>
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="social-links">
            <a href="https://github.com/">GitHub</a>
            <a href="https://twitter.com/">Twitter</a>
            <a href="https://linkedin.com/">LinkedIn</a>
          </div>
        </div>

        <FooterLinks title="PRODUCT" links={[["Home", "#home"], ["Technologies", "#technologies"], ["Projects", "#projects"]]} />
        <FooterLinks title="COMPANY" links={[["About", "#about"], ["Contact", "#contact"], ["Careers", "#careers"]]} />
        <FooterLinks title="LEGAL" links={[["Privacy Policy", "#privacy"], ["Terms of Service", "#terms"]]} />
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="footer-links">
      <h3>{title}</h3>
      {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
    </div>
  );
}

export default Footer;
