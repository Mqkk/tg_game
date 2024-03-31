import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";

import { useCreateCharacterStore } from "../../stores/domains/CreateCharacter";
import { useFractionsStore } from "../../stores/domains/Fractions";

import { FractionSelection } from "./components/FractionSelection";
import { Appearance } from "./components/Appearance";

import styles from "./styles/index.module.scss";

export const CreateCharacter = observer(() => {
  const { fractionId, onChooseFraction } = useCreateCharacterStore();
  const { fractionList, getFractionList } = useFractionsStore();

  useEffect(() => {
    getFractionList();
  }, [getFractionList]);

  const isFractionSelect = useMemo(() => Boolean(fractionId), [fractionId]);

  return (
    <main className={styles.createCharacter}>
      <section className={styles.createCharacter__section}>
        {isFractionSelect ? (
          <Appearance />
        ) : (
          <FractionSelection
            fractions={fractionList}
            onChooseFraction={onChooseFraction}
          />
        )}
      </section>
    </main>
  );
});
