import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useCreateCharacterStore } from "../../../../stores/domains/CreateCharacter";
import { useHairCharacterStore } from "../../../../stores/domains/HairCharacter";
import { useGenderStore } from "../../../../stores/domains/Genders";

import { Selector } from "../../../../components/Selector";
import { Button } from "../../../../components/Button";

import { SCREENS } from "../../../../navigation/endpoints";
import { CREATE_CHARACTER } from "../../../../constants";

import styles from "./styles/index.module.scss";

export const Appearance = observer(() => {
  const { setHairColor, setHairType, setGender, hair, fraction } =
    useCreateCharacterStore();
  const { typeList, colorList } = useHairCharacterStore();
  const { genderList } = useGenderStore();
  const navigate = useNavigate();

  return (
    <div className={styles.appearance}>
      <div className={styles.appearance__img}>
        <img
          src={hair.type?.image}
          alt={hair.type?.value}
          className={styles.appearance__hair}
        />
        <img
          src={fraction?.image}
          alt={fraction?.name}
          className={styles.appearance__fractionImg}
        />
      </div>
      <div className={styles.appearance__settings}>
        <div className={styles.appearance__selectors}>
          <Selector options={genderList} setOption={setGender} />
          <Selector options={colorList} setOption={setHairColor} />
          <Selector options={typeList} setOption={setHairType} />
        </div>
        <div className={styles.appearance__btns}>
          <Button onClick={() => navigate(SCREENS.MAIN)}>
            {CREATE_CHARACTER}
          </Button>
        </div>
      </div>
    </div>
  );
});
