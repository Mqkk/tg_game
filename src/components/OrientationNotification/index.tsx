import { useState, useEffect } from "react";

import styles from "./styles/index.module.scss";

interface IProps {
  children: JSX.Element;
}

const OrientationNotification = ({ children }: IProps) => {
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation =
        window.innerWidth > window.innerHeight ? "landscape" : "portrait";
      setOrientation(newOrientation);
    };

    handleOrientationChange();

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  if (orientation === "portrait") {
    return (
      <div className={styles.orientation}>
        <h1 className={styles.orientation__title}>
          Пожалуйста, переверните устройство в горизонтальное положение для
          лучшего опыта использования
        </h1>
      </div>
    );
  } else {
    return children;
  }
};

export default OrientationNotification;
