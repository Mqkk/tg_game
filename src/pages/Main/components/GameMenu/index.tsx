import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useGameMenuStore } from "../../../../stores/domains/GameMenu";
import { Button } from "../../../../components/Button";

import styles from "./styles/index.module.scss";

export const GameMenu = observer(() => {
  const { menuList, getMenuList } = useGameMenuStore();

  useEffect(() => {
    getMenuList();
  }, [getMenuList]);

  return (
    <div className={styles.gameMenu}>
      <ul className={styles.gameMenu__list}>
        {menuList.map((item) => (
          <li className={styles.gameMenu__item} key={item.id}>
            <Button className={styles.gameMenu__button}>
              <img
                className={styles.gameMenu__img}
                src={item.assetPath}
                alt={item.name}
              />
              <span className={styles.gameMenu__name}>{item.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
});
