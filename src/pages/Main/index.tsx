import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import { useLocationStore } from "../../stores/domains/Location";
import { useUserStore } from "../../stores/domains/User";

import { Menu } from "./components/Menu";
import { GameMenu } from "./components/GameMenu";
import { Header } from "../../components/Header";
import { Location } from "./components/Location";
import { Button } from "../../components/Button";
import { CharacterInfo } from "./components/CharacterInfo";

import styles from "./styles/index.module.scss";
import { IconThreePoint } from "../../helpers/icons";

interface IMainTitle {
  title?: string;
}

export const Main = observer(() => {
  const { location, objectList, init } = useLocationStore();
  const { character, getCharacter } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    init();
    getCharacter();
  }, [init, getCharacter]);

  const onClickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header
        className={styles.main__header}
        classCenter={styles.main__headerCenter}
        classRight={styles.main__headerRight}
        childrenLeft={
          <CharacterInfo
            hp={character?.hp}
            name={character?.name}
            valor={character?.valor}
            balance={character?.balance}
            experience={character?.experience}
            assetPath={character?.appearance.assetPath}
          />
        }
        childrenCenter={<MainTitle title={location?.name} />}
        childrenRight={
          <Button className={styles.buttonMenu} onClick={onClickMenu}>
            <IconThreePoint className={styles.buttonMenu__icon} />
          </Button>
        }
      />
      <main className={styles.main}>
        <section className={styles.main__section}>
          <Location assetPath={location?.assetPath} objectList={objectList} />
          <GameMenu />
        </section>
      </main>
      {isOpen && <Menu isOpen={isOpen} onClose={onClickMenu} />}
    </>
  );
});

const MainTitle = observer(({ title = "" }: IMainTitle) => {
  return <h1 className={styles.main__title}>{title}</h1>;
});
