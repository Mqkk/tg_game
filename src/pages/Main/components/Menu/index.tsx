import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { SCREENS } from "../../../../navigation/endpoints";

import styles from "./styles/index.module.scss";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = observer(({ isOpen, onClose }: IProps) => {
  return (
    <div className={clsx(styles.menu, { [styles.active]: isOpen })}>
      <button className={styles.menu__close} onClick={onClose} />
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <Link
            className={styles.menu__link}
            to={SCREENS.CREATE_CHARACTER}
            onClick={onClose}
          >
            На главную
          </Link>
        </li>
      </ul>
    </div>
  );
});
