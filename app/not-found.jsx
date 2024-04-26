"use client";

import Image from "next/image";
import NotFoundImage from "@/public/assets/logo.png";
import styles from "@/app/style/notfound.module.css";

export default function NotFound() {

  return (
    <div className={styles.notFound}>
        <Image
          className={styles.notFoundImg}
          src={NotFoundImage}
          height={100}
          alt="Not found image"
          priority
        />
      <span>No page found</span>
    </div>
  );
}
