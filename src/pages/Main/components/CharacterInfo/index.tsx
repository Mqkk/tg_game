import { observer } from "mobx-react-lite";

import styles from "./styles/index.module.scss";

interface IProps {
  hp: number;
  name: string;
  energy: number;
  honor: number;
  gold: number;
  img: string;
}

export const CharacterInfo = observer(
  ({ hp, energy, honor, gold, img, name }: IProps) => {
    return (
      <div className={styles.characterInfo}>
        <div className={styles.characterInfo__left}>
          <img src={img} alt={name} className={styles.characterInfo__img} />
          <span className={styles.characterInfo__value}>{gold} G</span>
        </div>
        <div className={styles.characterInfo__right}>
          <span className={styles.characterInfo__value}>{hp} HP</span>
          <span className={styles.characterInfo__value}>{energy} EN</span>
          <span className={styles.characterInfo__value}>{honor} D</span>
        </div>
      </div>
    );
  },
);
