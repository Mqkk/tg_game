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
  const navigate = useNavigate();

  useEffect(() => {
    init();
    getGenderList();
    getCharacterAppearancePreset();
  }, [init, getGenderList, getCharacterAppearancePreset]);

  const _onCreateCharacter = () => {
    createCharacter();
    navigate(SCREENS.MAIN);
  };

  return (
    <div className={styles.appearance}>
      <div className={styles.appearance__img}>
        <img
          src={characterAppearancePreset?.assetPath}
          className={styles.appearance__fractionImg}
        />
      </div>
      <div className={styles.appearance__settings}>
        <div className={styles.appearance__selectors}>
          <Selector options={genderList} setOption={setGenderId} />
          <Selector options={colorList} setOption={setHairColorId} />
          <Selector options={typeList} setOption={setHairTypeId} />
        </div>
        <div className={styles.appearance__btns}>
          <Button onClick={_onCreateCharacter}>{CREATE_CHARACTER}</Button>
        </div>
      </div>
    </div>
  );
});
