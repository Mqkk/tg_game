import { observer } from "mobx-react-lite";

import styles from "./styles/index.module.scss";

interface IProps {
  visual: string;
}

export const Location = observer(({ visual }: IProps) => {
  return (
    <div className={styles.location}>
      <img className={styles.location__img} src={visual} />
    </div>
  );
});
