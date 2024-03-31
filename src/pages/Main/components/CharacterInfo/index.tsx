import { observer } from "mobx-react-lite";

import styles from "./styles/index.module.scss";

interface IProps {
  hp?: number;
  name?: string;
  experience?: number;
  valor?: number;
  balance?: number;
  assetPath?: string;
}

export const CharacterInfo = observer(
  ({
    hp = 0,
    valor = 0,
    balance = 0,
    experience = 0,
    assetPath = "",
    name = "Unknown",
  }: IProps) => {
    return (
      <div className={styles.characterInfo}>
        <div className={styles.characterInfo__left}>
          <img
            src={assetPath}
            alt={name}
            className={styles.characterInfo__img}
          />
          <span className={styles.characterInfo__value}>{balance} G</span>
        </div>
        <div className={styles.characterInfo__right}>
          <span className={styles.characterInfo__value}>{hp} HP</span>
          <span className={styles.characterInfo__value}>{experience} EN</span>
          <span className={styles.characterInfo__value}>{valor} D</span>
        </div>
      </div>
    );
  },
);
