"use client";
import Image from "next/image";
import contact from "@/public/assets/contact.png";
import styles from "@/app/style/contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactContain}>
      <Image
        className={styles.contactImageA}
        src={contact}
        alt="coding image"
        height={280}
        priority
      />
    </div>
  );
}
