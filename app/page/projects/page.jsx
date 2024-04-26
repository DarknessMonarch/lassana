"use client";
import Image from "next/image";
import { useState } from "react";
import board from "@/public/assets/board1.png";
import cyber from "@/public/assets/cyber.png";
import design from "@/public/assets/banner.png";
import airtraffic from "@/public/assets/airtraffic.png";
import technical from "@/public/assets/technical.png";
import arduino1 from "@/public/assets/arduino1.jpg";
import styles from "@/app/style/project.module.css";

import { BookOpenIcon as OpenPdfIcon } from "@heroicons/react/24/outline";

export default function ProjectPage() {
  const [dataFilter, setDataFilter] = useState("all");

  const projectData = [
    {
      id: 1,
      image: arduino1,
      title: "An arduino project car",
      description:
        "Building a robotic car was one of the ways I tried to improve my hardware and software skills as a developing engineer who was fascinated by the beauty of technology. First, I carefully put the necessary parts together and made improvements to the car's frame. I then went ahead and programmed the robotic automobile to do the appropriate functions. Using an Arduino microprocessor and the Arduino text editor, I carefully programmed the behavioral algorithms that control how the automobile drives. ",
      category: "Engineering",
      pdf: "/file/arduino.pdf",
    },
    {
      id: 2,
      image: design,
      title: "Banner Design",
      description: "A Banner showing my profession",
      category: "Design",
      pdf: "",
    },
    {
      id: 3,
      image: board,
      title: "Social Pocket Purse (Engineering Design)",
      description:
        "I have ventured into the field of SolidWorks design in the realm of technology. One noteworthy job I worked on was designing and 3D printing a creation of my own. I decided to create a multipurpose accessory that could also be used as a key holder: a social pocket purse. Interestingly, this invention had an integrated barcode scanner that allowed for quick access to a user's social media profile. The design also included a touchscreen pen, which increased the device's usefulness.",
      category: "Engineering",
      pdf: "/file/Social.pdf",
    },
    {
      id: 4,
      image: technical,
      title: " Technical Writing",
      description:
        "Having majored in technology, I understand the critical role that technical writing plays in the industry. Realizing how important it was to the direction of my career, I enrolled in a Technical Writing course. I completed a technical description and definition project for this coursework that involved explaining a technology device's intricate workings in clear, brief langua",
      category: "Technical",
      pdf: "/file/Technical.pdf",
    },
    {
      id: 5,
      image: airtraffic,
      title: "Air Traffic Simulation",
      description:
        "During my enrollment at Delaware County Community College pursuing my associate degree, a pivotal culmination of my studies emerged in the form of an Air Traffic Simulation project within the realm of Data Structures and Algorithms. This undertaking served as a testament to my adeptness in structuring algorithms comprehensively. Leveraging Java as the programming language of choice, I meticulously crafted an Air Traffic Simulation program, aiming to demonstrate proficiency in code clarity and algorithmic implementation.",
      category: "Programming",
      pdf: "",
    },
    {
      id: 6,
      image: cyber,
      title: "Cyber Security",
      description:
        "Conducting  penetration testing to find security vulnerability that company's network face",
      category: "hacking",
      pdf: "/file/cyber.pdf",
    },
  ];

  const handleFilterChange = (filter) => {
    setDataFilter(filter);
  };

  const openPdf = (pdfUrl) => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <div className={styles.ProjectContainer}>
      <h1>Portfolio</h1>
      <div className={styles.ProjectContainerInner}>
        <div className={styles.ProjectContainerNav}>
          <button
            type="button"
            className={`${styles.Projectbutton} ${
              dataFilter === "all" ? styles.active : ""
            }`}
            data-filter="all"
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`${styles.Projectbutton} ${
              dataFilter === "hacking" ? styles.active : ""
            }`}
            data-filter="hacking"
            onClick={() => handleFilterChange("hacking")}
          >
            CyberSecurity
          </button>
          <button
            type="button"
            className={`${styles.Projectbutton} ${
              dataFilter === "Programming" ? styles.active : ""
            }`}
            data-filter="Programming"
            onClick={() => handleFilterChange("Programming")}
          >
            Programming
          </button>
          <button
            type="button"
            className={`${styles.Projectbutton} ${
              dataFilter === "Engineering" ? styles.active : ""
            }`}
            data-filter="Engineering"
            onClick={() => handleFilterChange("Engineering")}
          >
            Engineering
          </button>
          <button
            type="button"
            className={`${styles.Projectbutton} ${
              dataFilter === "Technical" ? styles.active : ""
            }`}
            data-filter="Technical"
            onClick={() => handleFilterChange("Technical")}
          >
            Technical Writing
          </button>
          <button
            type="button"
            className={`${styles.Projectbutton} ${
              dataFilter === "Design" ? styles.active : ""
            }`}
            data-filter="Design"
            onClick={() => handleFilterChange("Design")}
          >
            Design
          </button>
        </div>
        {/* Portfolio Container */}
        <div className={styles.PortfolioContainer}>
          {projectData
            .filter(
              (project) =>
                dataFilter === "all" || project.category === dataFilter
            )
            .map((project) => (
              
              <div
                key={project.id}
                className={styles.PortfolioItem}
                data-category={project.category}
              >
              

                <Image
                  className={styles.PortfolioImage}
                  src={project.image}
                  alt="Portfolio image"
                  layout="fill"
                  quality={100}
                  objectFit="cover"
                  priority
                />
                
                <div className={styles.PortfolioInfo}>
                {project.pdf !== "" ? (
                  <OpenPdfIcon
                    className={styles.OpenpdfIcon}
                    onClick={() => openPdf(project.pdf)}
                  />
                ) : null}
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
        </div>
        {/* Portfolio Container End */}
      </div>
    </div>
  );
}
