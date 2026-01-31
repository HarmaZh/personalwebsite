import React from "react";
import styles from "./ExperienceCard.module.css";

function ExperienceCard({ experience, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`${styles.card} ${isEven ? styles.left : styles.right}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{experience.title}</h3>
          <a
            href={experience.companyUrl || '#'}
            className={styles.company}
            target={experience.companyUrl ? '_blank' : undefined}
            rel={experience.companyUrl ? 'noopener noreferrer' : undefined}
            onClick={(e) => !experience.companyUrl && e.preventDefault()}
          >
            {experience.company}
          </a>
          <p className={styles.period}>{experience.period}</p>
        </div>

        <ul className={styles.description}>
          {experience.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className={styles.technologies}>
          {experience.technologies.map((tech, idx) => (
            <span key={idx} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </div>
      <div className={styles.dot}></div>
    </div>
  );
}

export default ExperienceCard;
