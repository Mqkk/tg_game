import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateCharacterStore } from "../../stores/domains/CreateCharacter";
import { useAuthorizationStore } from "../../stores/domains/Authorization";
import { useFractionsStore } from "../../stores/domains/Fractions";
import { useUserStore } from "../../stores/domains/User";

import { FractionSelection } from "./components/FractionSelection";
import { Appearance } from "./components/Appearance";

import { SCREENS } from "../../navigation/endpoints";

import styles from "./styles/index.module.scss";

export const CreateCharacter = observer(() => {
  const { fractionId, onChooseFraction } = useCreateCharacterStore();
  const { fractionList, getFractionList } = useFractionsStore();
  const { accessToken } = useAuthorizationStore();
  const { character } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    getFractionList();

    if (accessToken && character?.name) {
      navigate(SCREENS.MAIN);
    }
  }, [getFractionList, character?.name]);

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
