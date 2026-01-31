import React from "react";
import FadeInSection from "./FadeInSection";
import SocialLinks from "./SocialLinks";
import styles from "./Contact.module.css";

function Contact() {
  const contactInfo = [
    {
      type: "Email",
      value: "harman.zhang60@gmail.com",
      href: "mailto:harman.zhang60@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      type: "Phone",
      value: "(206) 430-9075",
      href: "tel:+12064309075",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      type: "Location",
      value: "Seattle, WA",
      href: null,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <FadeInSection>
          <h2 className={styles.sectionTitle}>Let's Connect</h2>
          <p className={styles.subtitle}>
            I'm currently seeking full-time software engineering opportunities. Feel free to reach out!
          </p>
        </FadeInSection>

        <div className={styles.contactGrid}>
          {contactInfo.map((info, index) => (
            <FadeInSection key={index} delay={index * 100 + 100}>
              {info.href ? (
                <a href={info.href} className={styles.contactCard}>
                  <div className={styles.icon}>{info.icon}</div>
                  <div className={styles.info}>
                    <div className={styles.label}>{info.type}</div>
                    <div className={styles.value}>{info.value}</div>
                  </div>
                </a>
              ) : (
                <div className={styles.contactCard}>
                  <div className={styles.icon}>{info.icon}</div>
                  <div className={styles.info}>
                    <div className={styles.label}>{info.type}</div>
                    <div className={styles.value}>{info.value}</div>
                  </div>
                </div>
              )}
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400}>
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Find me online</h3>
            <SocialLinks variant="dark" />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default Contact;
