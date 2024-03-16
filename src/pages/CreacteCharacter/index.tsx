import { observer } from "mobx-react-lite";
import { useMemo } from "react";

import { useCreateCharacterStore } from "../../stores/domains/CreateCharacter";
import { useFractionsStore } from "../../stores/domains/Fractions";

import { FractionSelection } from "./components/FractionSelection";
import { Appearance } from "./components/Appearance";

import styles from "./styles/index.module.scss";

export const CreateCharacter = observer(() => {
  const { fraction, onChooseFraction } = useCreateCharacterStore();
  const { fractionsList } = useFractionsStore();

  const isFractionSelect = useMemo(() => Boolean(fraction), [fraction]);

  return (
    <main className={styles.createCharacter}>
      <section className={styles.createCharacter__section}>
        {isFractionSelect ? (
          <Appearance />
        ) : (
          <FractionSelection
            fractions={fractionsList}
            onChooseFraction={onChooseFraction}
          />
        )}
      </section>
    </main>
  );
});
