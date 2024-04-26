"use client";
import Image from "next/image";
import LogoImg from "@/public/assets/logo.png";
import styles from "@/app/style/navbar.module.css";
import {
  Battery0Icon,
  Battery50Icon,
  Battery100Icon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function NavbarComponent() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [batteryIcon, setBatteryIcon] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const getBatteryLevel = async () => {
      try {
        const battery = await navigator.getBattery();
        const level = battery.level * 100;
        setBatteryLevel(level);

        if (level >= 0 && level <= 49) {
          setBatteryIcon(<Battery0Icon className={styles.batteryIcon} />);
        } else if (level >= 50 && level <= 79) {
          setBatteryIcon(<Battery50Icon className={styles.batteryIcon} />);
        } else if (level >= 80 && level <= 100) {
          setBatteryIcon(<Battery100Icon className={styles.batteryIcon} />);
        }

        battery.addEventListener("levelchange", () => {
          const newLevel = battery.level * 100;
          setBatteryLevel(newLevel);

          if (newLevel >= 0 && newLevel <= 49) {
            setBatteryIcon(<Battery0Icon className={styles.batteryIcon} />);
          } else if (newLevel >= 50 && newLevel <= 79) {
            setBatteryIcon(<Battery50Icon className={styles.batteryIcon} />);
          } else if (newLevel >= 80 && newLevel <= 100) {
            setBatteryIcon(<Battery100Icon className={styles.batteryIcon} />);
          }
        });
      } catch (error) {
        console.error("Error getting battery level:", error);
      }
    };

    const today = new Date();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = daysOfWeek[today.getDay()];
    setCurrentDay(dayName);

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")}`;
    setCurrentTime(formattedTime);

    getBatteryLevel();
  }, []);

  return (
    <div className={styles.navContainer}>
      <Image
        className={styles.logo}
        src={LogoImg}
        alt="logo"
        height={30}
        objectFit="contain"
        priority
      />
      {currentDay && currentTime && (
        <div className={styles.navInner}>
          <div>{currentDay}</div>
          {currentTime}
        </div>
      )}

      {batteryLevel !== null && (
        <div className={styles.navInner}>
          {batteryIcon}
          <div> {batteryLevel}%</div>
        </div>
      )}
    </div>
  );
}
