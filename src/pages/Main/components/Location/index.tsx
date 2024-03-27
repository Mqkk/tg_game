import { observer } from "mobx-react-lite";

import { LocationObject } from "./components/Object";
import { TObjectLocationList } from "../../../../stores/domains/Location/types";

import styles from "./styles/index.module.scss";


interface IProps {
  visual: string;
  objects: TObjectLocationList;
}

export const Location = observer(({ visual, objects }: IProps) => {
  return (
    <div className={styles.location}>
      <img className={styles.location__img} src={visual} />
      <div className={styles.location__objects}>
        <LocationObject img={objects[0].img} />
      </div>
    </div>
  );
});
