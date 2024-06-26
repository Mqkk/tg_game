import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import { Button } from "../../../../../../components/Button";
import { BACK, CHOOSE } from "../../../../../../constants";

import styles from "./styles/index.module.scss";

interface IProps {
  id: number;
  name: string;
  imgScr: string;
  description: string;
  onChooseFraction: (id: number) => void;
}

export const Fraction = observer(
  ({ imgScr, description, name, id, onChooseFraction }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openFraction = () => {
      !isOpen && setIsOpen(true);
    };

    const closeFraction = () => {
      setIsOpen(false);
    };

    return (
      <div className={styles.fraction}>
        <div onClick={openFraction} className={clsx(styles.fraction__img)}>
          <img src={imgScr} className={styles.fraction__img} />
        </div>
        <div
          className={clsx(styles.fraction__info, {
            [id === 1
              ? styles.fraction__infoOpenRight
              : styles.fraction__infoOpenLeft]: isOpen,
          })}
        >
          <div className={styles.fraction__infoTop}>
            <h2 className={styles.fraction__title}>{name}</h2>
            <p className={styles.fraction__descr}>{description}</p>
          </div>
          <div className={styles.fraction__btns}>
            <Button className={styles.fraction__btn} onClick={closeFraction}>
              {BACK}
            </Button>
            <Button
              className={styles.fraction__btn}
              onClick={() => onChooseFraction(id)}
            >
              {CHOOSE}
            </Button>
          </div>
        </div>
      </div>
    );
  },
);
