"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Landing from "../components/Landing";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}
