import { observer } from "mobx-react-lite";
import Lottie from "react-lottie";

import lottieData from "../../assets/loader.json";
import styles from "./styles/index.module.scss";
import clsx from "clsx";

interface IProps {
  className?: string;
}

export const Loading = observer(({ className = "" }: IProps) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={clsx(styles.loading, className)}>
      <h3 className={styles.loading__title}></h3>
      <Lottie options={options} height={200} width={200} />
    </div>
  );
});
