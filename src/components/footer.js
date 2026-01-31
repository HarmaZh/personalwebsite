import React from "react";
import SocialLinks from "./SocialLinks";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "about", label: "About" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "skills", label: "Skills" },
    { href: "contact", label: "Contact" }
  ];

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Harman Zhang</h3>
            <p className={styles.description}>
              Full-Stack Developer & UW Informatics Student building data-driven applications.
            </p>
            <SocialLinks variant="footer" />
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:harman.zhang60@gmail.com">harman.zhang60@gmail.com</a>
              </li>
              <li>
                <a href="tel:+12064309075">(206) 430-9075</a>
              </li>
              <li>Seattle, WA</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Harman Zhang. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
