/* eslint-disable @typescript-eslint/await-thenable */
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useCreateCharacterStore } from "../../../../stores/domains/CreateCharacter";
import { useHairCharacterStore } from "../../../../stores/domains/HairCharacter";
import { useGenderStore } from "../../../../stores/domains/Genders";

import { Selector } from "../../../../components/Selector";
import { Button } from "../../../../components/Button";

import { SCREENS } from "../../../../navigation/endpoints";
import { CREATE_CHARACTER } from "../../../../constants";

import styles from "./styles/index.module.scss";
import { useLoadingStore } from "../../../../stores/domains/Loading";
import { Loading } from "../../../../components/Loading";

export const Appearance = observer(() => {
  const {
    getCharacterAppearancePreset,
    createCharacter,
    setHairColorId,
    setHairTypeId,
    setGenderId,
    characterAppearancePreset,
  } = useCreateCharacterStore();
  const { typeList, colorList, init } = useHairCharacterStore();
  const { genderList, getGenderList } = useGenderStore();
  const { isLoading, setIsLoading } = useLoadingStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        await init();
        await getGenderList();
        await getCharacterAppearancePreset();
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [
    init,
    setIsLoading,
    getGenderList,
    getCharacterAppearancePreset,
    characterAppearancePreset?.assetPath,
  ]);

  const _onCreateCharacter = () => {
    createCharacter();
    navigate(SCREENS.MAIN);
  };

  return (
    <div className={styles.appearance}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.appearance__img}>
          <img
            src={characterAppearancePreset?.assetPath}
            className={styles.appearance__fractionImg}
          />
        </div>
      )}
      <div className={styles.appearance__settings}>
        <div className={styles.appearance__selectors}>
          <Selector
            options={genderList}
            setOption={setGenderId}
            valueId={characterAppearancePreset?.genderId || genderList[0]?.id}
          />
          <Selector
            options={colorList}
            setOption={setHairColorId}
            valueId={characterAppearancePreset?.hairColorId || colorList[0]?.id}
          />
          <Selector
            options={typeList}
            setOption={setHairTypeId}
            valueId={characterAppearancePreset?.hairId || typeList[0]?.id}
          />
        </div>
        <div className={styles.appearance__btns}>
          <Button onClick={_onCreateCharacter}>{CREATE_CHARACTER}</Button>
        </div>
      </div>
    </div>
  );
});
