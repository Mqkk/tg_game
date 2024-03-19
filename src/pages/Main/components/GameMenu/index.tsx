import { observer } from "mobx-react-lite";

import { useGameMenuStore } from "../../../../stores/domains/GameMenu";
import { Button } from "../../../../components/Button";

import styles from "./styles/index.module.scss";

export const GameMenu = observer(() => {
  const { list } = useGameMenuStore();

  return (
    <div className={styles.gameMenu}>
      <ul className={styles.gameMenu__list}>
        {list.map((menuItem) => (
          <li className={styles.gameMenu__item} key={menuItem.id}>
            <Button className={styles.gameMenu__button}>
              <img
                className={styles.gameMenu__img}
                src={menuItem.image}
                alt={menuItem.name}
              />
              <span className={styles.gameMenu__name}>{menuItem.name}</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
});
