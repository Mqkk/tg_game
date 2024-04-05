import { observer } from "mobx-react-lite";
import { LocationObject } from "./components/Object";
import { ILocationObjectModel } from "../../../../stores/models/LocationObject/types";

import styles from "./styles/index.module.scss";

interface IProps {
  assetPath?: string;
  objectList?: ILocationObjectModel[];
}

export const Location = observer(
  ({ assetPath = "", objectList = [] }: IProps) => {
    return (
      <div
        className={styles.location}
        style={{ backgroundImage: `url('${assetPath}` }}
      >
        <div className={styles.location__objects}>
          <LocationObject img={objectList[0]?.assetPath} />
        </div>
      </div>
    );
  },
);
