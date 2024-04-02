import { observer } from "mobx-react-lite";

import {
  IconCoin,
  IconHeart,
  IconShield,
  IconLightning,
} from "../../../../helpers/icons";

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
        </div>
        <div className={styles.characterInfo__right}>
          <span className={styles.characterInfo__value}>
            {hp} <IconHeart className={styles.characterInfo__icon} />
          </span>
          <span className={styles.characterInfo__value}>
            {experience}{" "}
            <IconLightning className={styles.characterInfo__icon} />
          </span>
          <span className={styles.characterInfo__value}>
            {valor} <IconShield className={styles.characterInfo__icon} />
          </span>
          <span className={styles.characterInfo__value}>
            {balance} <IconCoin className={styles.characterInfo__icon} />
          </span>
        </div>
      </div>
    );
  },
);
