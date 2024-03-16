import { observer } from "mobx-react-lite";

import { Fraction } from "./components/Fraction";
import { IFractionModel } from "../../../../stores/models/Fraction/types";
import { TUniqueId } from "../../../../types";

import styles from "./styles/index.module.scss";

interface IProps {
  fractions: IFractionModel[];
  onChooseFraction: (id: TUniqueId) => void;
}

export const FractionSelection = observer(
  ({ fractions, onChooseFraction }: IProps) => {
    return (
      <ul className={styles.fractionSelection__list}>
        {fractions.map((fraction) => (
          <li className={styles.fractionSelection__item} key={fraction.id}>
            <Fraction
              id={fraction.id}
              name={fraction.name}
              imgScr={fraction.image}
              description={fraction.description}
              onChooseFraction={onChooseFraction}
            />
          </li>
        ))}
      </ul>
    );
  },
);
