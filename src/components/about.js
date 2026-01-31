import React from "react";
import FadeInSection from "./FadeInSection";
import Button from "./Button";
import styles from "./About.module.css";

const profileImageUrl = `${process.env.PUBLIC_URL}/images/profile.jpg`;

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <FadeInSection>
          <h2 className={styles.sectionTitle}>About Me</h2>
        </FadeInSection>

        <div className={styles.content}>
          <FadeInSection delay={100}>
            <div className={styles.profileImage}>
              <div className={styles.imagePlaceholder} style={{ backgroundImage: `url(${profileImageUrl})` }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className={styles.info}>
              <p className={styles.bio}>
                I'm a Software Engineering-focused Informatics student at the University of Washington, specializing in building scalable, data-driven applications. I'm driven by the challenge of solving complex problems through thoughtful software design and modern development practices.
              </p>

              <div className={styles.education}>
                <h3>Education</h3>
                <div className={styles.educationItem}>
                  <h4>University of Washington</h4>
                  <p className={styles.degree}>B.S. Informatics</p>
                  <p className={styles.focus}>Software Engineering & Data Science Focus</p>
                </div>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>3.83</div>
                  <div className={styles.statLabel}>GPA</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>9x</div>
                  <div className={styles.statLabel}>Dean's List</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className={styles.statLabel}>Eagle Scout</div>
                </div>
              </div>

              <div className={styles.actions}>
                <Button variant="secondary" href="/resume.pdf">
                  Download Resume
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

export default About;