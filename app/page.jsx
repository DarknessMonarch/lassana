"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
import ProfileImg from "@/public/assets/profile.png";
import styles from "@/app/style/home.module.css";
import BackgroundImg from "@/public/assets/background.jpg";

import { ChevronRightIcon as CodeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Image
        className={styles.advertImage}
        src={BackgroundImg}
        alt="background image"
        layout="fill"
        quality={100}
        objectFit="cover"
        priority
      />
      <div className={styles.homeInfoContainer}>
        <h6>👋 Hi there,</h6>
        <h1>I am Lassana Bility</h1>

        <h2>
          <CodeIcon className={styles.codeIconS} height={40} /> a passionate{" "}
          <Typewriter
            options={{
              strings: ["Developer", "Cyber Security analyst", "Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p>
          My experience as a tech major has profoundly shaped how I view life.
          Leveraging algorithms to address personal challenges, I have used my
          entrepreneur, security analyst, engineer, and developer skills to
          examine issues. In the words of Albert Einstein, "Computers are
          incredibly fast, accurate, and stupid. Humans are slow, inaccurate,
          and brilliant. Together, they are powerful beyond imagination."
        </p>
      </div>
      <div className={styles.homeImage}>
        <Image
          className={styles.ProfileImage}
          src={ProfileImg}
          alt="profile image"
          layout="fill"
          quality={100}
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
