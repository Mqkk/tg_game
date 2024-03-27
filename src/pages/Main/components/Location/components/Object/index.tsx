import { observer } from "mobx-react-lite";

import styles from "./styles/index.module.scss";

interface IProps {
  img: string;
}

export const LocationObject = observer(({ img }: IProps) => {
  return (
    <button className={styles.object}>
      <img className={styles.object__img} src={img} />
    </button>
  );
});
