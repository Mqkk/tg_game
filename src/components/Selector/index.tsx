import { observer } from "mobx-react-lite";
import { useState } from "react";

import { Button } from "../Button";

import { BACK, FORWARD } from "../../constants";
import { TSelectorList } from "./types";

import styles from "./styles/index.module.scss";

interface IProps {
  className?: string;
  options: TSelectorList;
}

export const Selector = observer(({ options, className = "" }: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % options.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? options.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={(styles.selector, className)}>
      <Button className={styles.selector__button} onClick={handleNext}>
        {BACK}
      </Button>
      <span className={styles.selector__value}>
        {options[selectedIndex].value}
      </span>
      <Button className={styles.selector__button} onClick={handlePrev}>
        {FORWARD}
      </Button>
    </div>
  );
});
