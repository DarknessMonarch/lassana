"use client";
import Image from "next/image";
import AboutImg from "@/public/assets/about.jpg";
import styles from "@/app/style/about.module.css";
import TwitterIcon from "@/public/icons/TwitterIcon.svg";
import FacebookIcon from "@/public/icons/FacebookIcon.svg";
import LinkedinIcon from "@/public/icons/LinkedinIcon.svg";
import WhatsappIcon from "@/public/icons/WhatsappIcon.svg";
import InstagramIcon from "@/public/icons/InstagramIcon.svg";

const downloadFile = () => {
  const fileName = "resume.pdf";
  const fileUrl = "/file/Resume.pdf";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

export default function AboutPage() {
  const phoneNumber = "+1(484)-744-0421";
  const openWhatsapp = () => {
    window.open(`http://Wa.me/+14847440421`, "_blank");
  };
  const openFacebook = () => {
    window.open("", "_blank");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/lass_bil/?utm_source=qr", "_blank");
  };

  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/lassana-bility-966629198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "_blank"
    );
  };

  const openTwitter = () => {
    window.open("https://", "_blank");
  };

  const DownloadResume = () => {
    downloadFile();
  };

  return (
    <div className={styles.AboutContainer}>
      <div className={styles.AboutWrapper}>
        <div className={styles.AboutProfileContain}>
          <div className={styles.AboutProfile}>
            <Image
              className={styles.aboutImage}
              src={AboutImg}
              alt="about image"
              layout="fill"
              quality={100}
              objectFit="cover"
              priority
            />
            <div className={styles.aboutSocialWrapper}>
              <div
                className={`${styles.aboutSocialInner} ${styles.HideMaintainA}`}
              ></div>
              <div
                className={`${styles.aboutSocialInner} ${styles.FacebookImage}`}
                onClick={openFacebook}
              >
                <Image
                  src={FacebookIcon}
                  alt="Facebook icon"
                  height={20}
                  priority
                />
              </div>
              <div
                className={`${styles.aboutSocialInner} ${styles.TwitterImage}`}
                onClick={openTwitter}
              >
                <Image
                  src={TwitterIcon}
                  alt="Twitter icon"
                  height={20}
                  priority
                />
              </div>
              <div
                className={`${styles.aboutSocialInner} ${styles.InstagramImage}`}
                onClick={openInstagram}
              >
                <Image
                  src={InstagramIcon}
                  alt="Instagram icon"
                  height={20}
                  priority
                />
              </div>
              <div
                className={`${styles.aboutSocialInner} ${styles.LinkedinImage}`}
                onClick={openLinkedin}
              >
                <Image
                  src={LinkedinIcon}
                  alt="Linkedin icon"
                  height={20}
                  priority
                />
              </div>
              <div
                className={`${styles.aboutSocialInner} ${styles.WhatsappImage}`}
                onClick={openWhatsapp}
              >
                <Image
                  src={WhatsappIcon}
                  alt="Whatsapp  icon"
                  height={20}
                  priority
                />
              </div>
              <div
                className={`${styles.aboutSocialInner} ${styles.HideMaintainB}`}
              ></div>
            </div>
          </div>
          <button className={styles.AboutDownload} onClick={DownloadResume}>
            Download Resume
          </button>
        </div>
        <div className={styles.AboutInfo}>
          <h1>Biography</h1>
          <div className={styles.AboutDescription}>
            <p>
              I am currently a senior studying computational and information
              systems, emphasizing cybersecurity. I am expected to be done with
              my bachelor's by December 2020. As a child, I have always loved to
              solve problems using technology. I have been an enthusiast of
              impacting the world through technology
            </p>
            <p>
              I have tested my skills by helping build a system that solves
              problems with loading dockers. I have also tested my engineering
              skills by assembling a robotic car and using Arduino to give it a
              command. I recently started a Tech company with 3 employees and
              one investor which shows my leadership skill.
            </p>
            <p>
              My academic path has led me to specialize on computational and
              information systems because I have a strong desire to use
              technology to have a significant impact on the world. Having seen
              how quickly technology is developing, I am confident that by
              acquiring a broad range of skills in computer programming,
              engineering, and cybersecurity analysis, I will be able to protect
              and strengthen these advanced systems.
            </p>
          </div>
          <div className={styles.AboutList}>
            <div className={styles.AboutListHalf}>
              <div className={styles.AboutListHalfInfo}>
                <h2>Name:</h2>
                <p>Lassana Bility</p>
              </div>
              <div className={styles.AboutListHalfInfo}>
                <h2>Address:</h2>
                <p>California</p>
              </div>
              <div className={styles.AboutListHalfInfo}>
                <h2>Status:</h2>
                <p>Available</p>
              </div>
            </div>
            <div className={styles.AboutListHalf}>
              <div className={styles.AboutListHalfInfo}>
                <h2>Phone:</h2>
                <p>{phoneNumber} </p>
              </div>
              <div className={styles.AboutListHalfInfo}>
                <h2>Email:</h2>
                <p> lassanability6@gmail.com </p>
              </div>
              <div className={styles.AboutListHalfInfo}>
                <h2>Education:</h2>
                <p>Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.AboutSkills}>
        <h1>My skills</h1>
        <div className={styles.SkillsContainer}>
          <div className={styles.SkillsWrapper}>
            <Image
              src={WhatsappIcon}
              alt="Whatsapp  icon"
              height={20}
              priority
            />
            <h4></h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="education padd-15">
          <h3 className="title">Education</h3>
          <div className="row">
            <div className="timeline-box padd-15">
              <div className="timeline shadow-dark">
                {/* Start*/}
                <div className="timeline-item">
                  <div className="circle-dot" />
                  <h6 className="timeline-date">
                    <i className="fa fa-calendar" /> 2020 to Present
                  </h6>
                  <h4 className="timeline-title">Cyber security</h4>
                  <p className="timeline-text">Graduating this month</p>
                </div>
                {/* end */}
              </div>
            </div>
          </div>
        </div>
        <div className="experience padd-15">
          <h3 className="title">Experience</h3>
          <div className="row">
            <div className="timeline-box padd-15">
              <div className="timeline shadow-dark">
                {/*  start */}
                <div className="timeline-item">
                  <div className="circle-dot" />
                  <h6 className="timeline-date">
                    <i className="fa fa-calendar" /> 2019 to Present
                  </h6>
                  <h4 className="timeline-title">Hacking</h4>
                  <p className="timeline-text">still hacking</p>
                </div>
                {/* end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
