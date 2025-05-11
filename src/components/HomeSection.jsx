// src/components/HomeSection.jsx
"use client";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Hi, I'm <span className={styles.name}>Ramajayam K</span></h1>
          <h2>Full Stack Developer</h2>
          <p>
            Passionate developer with 2+ years of experience building scalable web apps
            using MERN stack, Laravel, PHP, and more.
          </p>

          <div className={styles.buttons}>
            <Link href="/about"><button>About Me</button></Link>
            <Link href="/projects"><button>My Projects</button></Link>
          </div>

          <div className={styles.socials}>
            <a href="mailto:ramajayamkasi11@gmail.com" target="_blank">📧</a>
            <a href="https://github.com/Ramajayam-K" target="_blank">🐙</a>
            <a href="http://www.linkedin.com/in/ramajayam-k" target="_blank">🔗</a>
            <a href="https://leetcode.com/u/ramajayamK11/" target="_blank">🧠</a>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src="/images/hero.jpg" // replace with your image
            alt="Ramajayam K"
            width={300}
            height={300}
            className={styles.profilePic}
          />
        </div>
      </div>
    </section>
  );
}
