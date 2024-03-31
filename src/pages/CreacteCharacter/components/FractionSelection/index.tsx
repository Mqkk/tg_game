import { observer } from "mobx-react-lite";

import { Fraction } from "./components/Fraction";
import { IFractionModel } from "../../../../stores/models/Fraction/types";

import styles from "./styles/index.module.scss";

interface IProps {
  fractions: IFractionModel[];
  onChooseFraction: (id: number) => void;
}

export const FractionSelection = observer(
  ({ fractions, onChooseFraction }: IProps) => {
    return (
      <ul className={styles.fractionSelection__list}>
        {fractions.map((item) => (
          <li className={styles.fractionSelection__item} key={item.id}>
            <Fraction
              id={item.id}
              name={item.name}
              imgScr={item.assetPath}
              description={item.description}
              onChooseFraction={onChooseFraction}
            />
          </li>
        ))}
      </ul>
    );
  },
);
