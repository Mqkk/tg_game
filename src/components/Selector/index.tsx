import { observer } from "mobx-react-lite";
import { useState } from "react";
import clsx from "clsx";

import { Button } from "../Button";

import { BACK, FORWARD } from "../../constants";
import { ISelectorItem, TSelectorList } from "./types";

import styles from "./styles/index.module.scss";

interface IProps {
  className?: string;
  options: TSelectorList;
  setOption(value: ISelectorItem): void;
}

export const Selector = observer(
  ({ options, className = "", setOption }: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectOption = () => {
      setOption(options[selectedIndex]);
    };

    const handleNext = () => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % options.length);

      selectOption();
    };

    const handlePrev = () => {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? options.length - 1 : prevIndex - 1,
      );

      selectOption();
    };

    return (
      <div className={clsx(styles.selector, className)}>
        <Button className={styles.selector__button} onClick={handlePrev}>
          {BACK}
        </Button>
        <span className={styles.selector__value}>
          {options[selectedIndex].value}
        </span>
        <Button className={styles.selector__button} onClick={handleNext}>
          {FORWARD}
        </Button>
      </div>
    );
  },
);
