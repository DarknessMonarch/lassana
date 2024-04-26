"use client";
import Image from "next/image";
import AboutImg from "@/public/assets/about.jpg";
import styles from "@/app/style/about.module.css";
import HackingIcon from "@/public/assets/Hacking.png";
import TwitterIcon from "@/public/icons/TwitterIcon.svg";
import FacebookIcon from "@/public/icons/FacebookIcon.svg";
import LinkedinIcon from "@/public/icons/LinkedinIcon.svg";
import WhatsappIcon from "@/public/icons/WhatsappIcon.svg";
import SolidworkIcon from "@/public/assets/Solidwork.png";
import LeadershipIcon from "@/public/assets/Leadership.png";
import InstagramIcon from "@/public/icons/InstagramIcon.svg";
import EngineeringIcon from "@/public/assets/engineering.png";
import CommunicationIcon from "@/public/assets/Communication.png";

import { CalendarDaysIcon } from "@heroicons/react/24/outline";

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

          <div className={styles.AboutDownload}>
            <a class="portfolio-btn" href="/file/Resume.pdf" download id="btn">
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.AboutInfo}>
          <h1>Biography</h1>
          <div className={styles.AboutDescription}>
            <p>
              I am currently a senior studying computational and information
              systems, emphasizing cybersecurity. I am expected to be done with
              my bachelors by December 4040. As a child, I have always loved to
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
                <p>Detroit, Michigan 48221</p>
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
        <h1>Languages and Skills</h1>
        <div className={styles.SkillsContainer}>
          <div className={styles.SkillsWrapper}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              className={styles.SkillsImage}
              alt="C++  icon"
              height={40}
              width={40}
              priority
            />
            <h4>C++</h4>
          </div>

          <div className={styles.SkillsWrapper}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
              className={styles.SkillsImage}
              alt="golang icon"
              height={40}
              width={40}
              priority
            />
            <h4>Go</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              className={styles.SkillsImage}
              alt="python icon"
              height={40}
              width={40}
              priority
            />
            <h4>Python</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              className={styles.SkillsImage}
              alt="css icon"
              height={40}
              width={40}
              priority
            />
            <h4>Css</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              className={styles.SkillsImage}
              alt="html icon"
              height={40}
              width={40}
              priority
            />
            <h4>Html5</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src={EngineeringIcon}
              className={styles.SkillsImage}
              alt="Engineering icon"
              height={40}
              priority
            />
            <h4>Engineering</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src={SolidworkIcon}
              className={styles.SkillsImage}
              alt="Solidwork icon"
              height={40}
              priority
            />
            <h4>Solidwork</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src={HackingIcon}
              className={styles.SkillsImage}
              alt="Ethical icon"
              height={40}
              priority
            />
            <h4>Ethical Hacking</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src={LeadershipIcon}
              className={styles.SkillsImage}
              alt="Leadership icon"
              height={40}
              priority
            />
            <h4>Leadership and Teamwork</h4>
          </div>
          <div className={styles.SkillsWrapper}>
            <Image
              src={CommunicationIcon}
              className={styles.SkillsImage}
              alt="Communication icon"
              height={40}
              priority
            />
            <h4>Communication and Presentation</h4>
          </div>
        </div>
      </div>
      <div className={styles.aboutRow}>
     
        {/* Start*/}
        <div className={styles.abouteducation}>
          <h3>Exprience</h3>
          <div className={styles.aboutTimeline}>
            {/* Start*/}
            <div className={styles.aboutTimelineInner}>
              <div className={styles.TimelineCircle} />
              <div className={styles.aboutTimelineItem}>
                <div className={styles.aboutTimelineInfoH}>
                  <CalendarDaysIcon
                    className={styles.timelineIcon}
                    height={20}
                    alt="Calendar icon"
                  />{" "}
                  <h6>October 2023 - December 2023</h6>
                </div>
                <h4>SOFTWARE DEVELOPER</h4>
                <span>Delaware County Community College, Media, PA</span>
                <ul>
                  <li>
                    Headed a group of developers in developing a database for
                    loading docker
                  </li>
                  <li>
                    Was responsible for selling the idea to the loading dock
                  </li>
                </ul>
              </div>
              {/* end */}
            </div>
            {/* end */}
            {/* Start*/}
            <div className={styles.aboutTimelineInner}>
              <div className={styles.TimelineCircle} />
              <div className={styles.aboutTimelineItem}>
                <div className={styles.aboutTimelineInfoH}>
                  <CalendarDaysIcon
                    className={styles.timelineIcon}
                    height={20}
                    alt="Calendar icon"
                  />{" "}
                  <h6>December 2020 - December 2021</h6>
                </div>
                <h4>MACHINE LAB ASSISTANCE</h4>
                <span>
                  Delaware county community college Media, PENNSYLVANIA{" "}
                </span>
                <ul>
                  <li>
                    Performed routine maintenance on machinery equipment to
                    maintain optimal performance.
                  </li>
                  <li>
                    Demonstrated excellent attention to detail throughout all
                    stages of the welding process
                  </li>
                  <li>
                    Maintained detailed records of daily production activities
                    for review by management personnel.
                  </li>
                </ul>
              </div>
              {/* end */}
            </div>
            {/* end */}
            {/* Start*/}
            <div className={styles.aboutTimelineInner}>
              <div className={styles.TimelineCircle} />
              <div className={styles.aboutTimelineItem}>
                <div className={styles.aboutTimelineInfoH}>
                  <CalendarDaysIcon
                    className={styles.timelineIcon}
                    height={20}
                    alt="Calendar icon"
                  />{" "}
                  <h6>January 2019 - April 2019</h6>
                </div>
                <h4>IT INTERN</h4>
                <span>Tamma Cooporation Monrovia, MONTSERRADO</span>
                <ul>
                  <li>
                    Work as an IT support staff for every newly developed
                    software.
                  </li>
                  <li>
                    Keep every new software effective by reporting a fault to
                    the senior IT team.
                  </li>
                </ul>
              </div>
              {/* end */}
            </div>
            {/* end */}
            {/* Start*/}
            <div className={styles.aboutTimelineInner}>
              <div className={styles.TimelineCircle} />
              <div className={styles.aboutTimelineItem}>
                <div className={styles.aboutTimelineInfoH}>
                  <CalendarDaysIcon
                    className={styles.timelineIcon}
                    height={20}
                    alt="Calendar icon"
                  />{" "}
                  <h6>June 2016 - January 2017</h6>
                </div>
                <h4>INTERN</h4>
                <span>SCRIMEX OIL & GAS
Monrovia, MONTSERRADO</span>
                <ul>
                  <li>
                  Enter data on trucks that carry out company
consignment.
                  </li>
                  <li>
                  Maintain documents and sort data of consignment

                  </li>
                  <li>
                    WPerform routine check on consignment delivery
                  </li>
                </ul>
              </div>
              {/* end */}
            </div>
            {/* end */}
          </div>
        </div>
        {/* end */}
           {/* Start*/}
           <div className={styles.abouteducation}>
          <h3>Education</h3>
          <div className={styles.aboutTimeline}>
            {/* Start*/}
            <div className={styles.aboutTimelineInner}>
              <div className={styles.TimelineCircle} />
              <div className={styles.aboutTimelineItem}>
                <div className={styles.aboutTimelineInfoH}>
                  <CalendarDaysIcon
                    className={styles.timelineIcon}
                    height={20}
                    alt="Calendar icon"
                  />{" "}
                  <h6>Completed</h6>
                </div>
                <h4>ASSOCIATE OF SCIENCE IN COMPUTER SCIENCE</h4>
                <span>Delaware County Community College, Media, PA</span>
              </div>
              {/* end */}
            </div>
            {/* Start*/}
            <div className={styles.aboutTimelineInner}>
              <div className={styles.TimelineCircle} />
              <div className={styles.aboutTimelineItem}>
                <div className={styles.aboutTimelineInfoH}>
                  <CalendarDaysIcon
                    className={styles.timelineIcon}
                    height={20}
                    alt="Calendar icon"
                  />{" "}
                  <h6>Completed</h6>
                </div>
                <h4>CERTIFICATIONS</h4>
                <span>Introduction to Python for Cybersecurity </span>
              </div>
              {/* end */}
            </div>
            {/* Start*/}
            <div className={styles.aboutTimelineInner}>
              <div className={styles.TimelineCircle} />
              <div className={styles.aboutTimelineItem}>
                <div className={styles.aboutTimelineInfoH}>
                  <CalendarDaysIcon
                    className={styles.timelineIcon}
                    height={20}
                    alt="Calendar icon"
                  />{" "}
                  <h6>Completed</h6>
                </div>
                <h4>BACHELOR IN COMPUTER & INFO SYSTEM IN CYBER SECURITY</h4>
                <span>University of Detroit Mercy, Detroit, MI </span>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}
