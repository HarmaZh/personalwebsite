import React from "react";
import Button from "./Button";
import styles from "./Hero.module.css";

const heroBackgroundUrl = `${process.env.PUBLIC_URL}/images/hero-background.jpg`;

function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className={styles.hero} style={{ backgroundImage: `url(${heroBackgroundUrl})` }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={`${styles.greeting} fadeIn`}>Hi, I'm</p>
          <h1 className={`${styles.name} fadeIn delay-300`}>Harman Zhang</h1>
          <h2 className={`${styles.title} fadeIn delay-600`}>
            Full-Stack Developer & UW Informatics Student
          </h2>
          <p className={`${styles.tagline} fadeIn delay-900`}>
            Building data-driven applications and solving real-world problems through software
          </p>
          <div className={`${styles.cta} fadeIn delay-1200`}>
            <Button variant="primary" onClick={handleScrollToProjects}>
              View Projects
            </Button>
            <Button variant="outline" onClick={handleScrollToContact}>
              Get In Touch
            </Button>
          </div>
        </div>
        <div className={`${styles.scrollIndicator} fadeIn delay-1500`}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
