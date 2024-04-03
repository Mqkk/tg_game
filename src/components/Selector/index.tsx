import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { Button } from "../Button";

import { BACK, FORWARD } from "../../constants";
import { TSelectorList } from "./types";

import styles from "./styles/index.module.scss";

interface IProps {
  valueId: number;
  className?: string;
  options: TSelectorList;
  setOption(id: number): void;
}

export const Selector = observer(
  ({ options, className = "", setOption, valueId }: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
      setSelectedIndex(1);
    }, []);

    const selectOption = () => {
      setOption(options[selectedIndex]?.id);
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
          {options.find((item) => item.id === valueId)?.name}
        </span>
        <Button className={styles.selector__button} onClick={handleNext}>
          {FORWARD}
        </Button>
      </div>
    );
  },
);
