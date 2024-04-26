"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/assets/logo.png";
import MenuIcon from "@/public/icons/menu.svg";
import styles from "@/app/style/dashboard.module.css";
import { usePathname, useRouter } from "next/navigation";

import {
  NewspaperIcon as BlogIcon,
  FolderIcon as ProjectIcon,
  DocumentTextIcon as Services,
  ChatBubbleLeftRightIcon as ChatIcon,
  InformationCircleIcon as AboutIcon,
} from "@heroicons/react/24/outline";

export default function DashboardComponent() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.dashContainer}>
      <div className={styles.dashContainerTop}>
      <Image
        className={styles.logo}
        src={LogoImg}
        alt="logo"
        height={30}
        objectFit="contain"
        priority
      />
      {/* <Link href="/page/blog" className={styles.dashLinkContainer}>
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/blog" ? styles.activeDash : ""
            }`}
          >
            <BlogIcon className={styles.dashIcon} alt="projects icon" />
            <h1>Blog</h1>
          </div>
        </Link> */}
        <Link href="/page/contact" className={styles.dashLinkContainer}>
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/contact" ? styles.activeDash : ""
            }`}
          >
            <ChatIcon className={styles.dashIcon} alt="projects icon" />
            <h1>Contact</h1>
          </div>
        </Link>
        <Link href="/page/projects" className={styles.dashLinkContainer}>
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/projects" ? styles.activeDash : ""
            }`}
          >
            <ProjectIcon className={styles.dashIcon} alt="projects icon" />
            <h1>Projects</h1>
          </div>
        </Link>
        {/* <Link href="/page/services" className={styles.dashLinkContainer}>
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/services" ? styles.activeDash : ""
            }`}
          >
            <Services className={styles.dashIcon} alt="calculated icon" />
            <h1>Services </h1>
          </div>
        </Link> */}
        <Link href="/page/about" className={styles.dashLinkContainer}>
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/page/about" ? styles.activeDash : ""
            }`}
          >
            <AboutIcon className={styles.dashIcon} alt="calculated icon" />
            <h1>About </h1>
          </div>
        </Link>
        <Link href="/" className={styles.dashLinkContainer}>
          <div
            className={`${styles.innerDashLink} ${
              pathname === "/" ? styles.activeDash : ""
            }`}
          >
            <Image
              className={styles.dashIcon}
              src={MenuIcon}
              alt="home icon"
              height={40}
              objectFit="contain"
              priority
            />
            <h1>Home</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
