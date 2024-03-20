import { observer } from "mobx-react-lite";
import { useState } from "react";

import { useLocationStore } from "../../stores/domains/Location";
import { useUserStore } from "../../stores/domains/User";

import { Menu } from "./components/Menu";
import { GameMenu } from "./components/GameMenu";
import { Header } from "../../components/Header";
import { Location } from "./components/Location";
import { Button } from "../../components/Button";
import { CharacterInfo } from "./components/CharacterInfo";

import styles from "./styles/index.module.scss";

interface IMainTitle {
  title?: string;
}

export const Main = observer(() => {
  const { img, name, hp, honor, energy, gold } = useUserStore();
  const { title, visual } = useLocationStore();
  const [isOpen, setIsOpen] = useState(false);

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
            hp={hp}
            img={img}
            name={name}
            gold={gold}
            honor={honor}
            energy={energy}
          />
        }
        childrenCenter={<MainTitle title={title} />}
        childrenRight={<Button onClick={onClickMenu}>Меню</Button>}
      />
      <main className={styles.main}>
        <section>
          <Location visual={visual} />
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
