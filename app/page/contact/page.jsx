"use client";
import Image from "next/image";
import coding from "@/public/assets/coding.gif";
import contact from "@/public/assets/contact.png";
import styles from "@/app/style/contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactC}>
      <Image
        className={styles.contactImageA}
        src={coding}
        alt="coding image"
        height={220}
        priority
      />
     <Image
        className={styles.contactImageB}
        src={contact}
        alt="coding image"
        height={220}
        priority
      />    
   {/*  */}
    </div>
  );
}
