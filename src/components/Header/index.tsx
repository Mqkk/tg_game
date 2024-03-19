import { observer } from "mobx-react-lite";
import clsx from "clsx";

import styles from "./styles/index.module.scss";

interface IProps {
  className?: string;
  classLeft?: string;
  classCenter?: string;
  classRight?: string;
  childrenLeft?: React.ReactNode;
  childrenCenter?: React.ReactNode;
  childrenRight?: React.ReactNode;
}

export const Header = observer(
  ({
    childrenLeft,
    childrenCenter,
    childrenRight,
    className = "",
    classLeft = "",
    classCenter = "",
    classRight = "",
  }: IProps) => {
    return (
      <header className={clsx(styles.header, className)}>
        <div className={clsx(styles.header__left, classLeft)}>
          {childrenLeft}
        </div>
        <div className={clsx(styles.header__center, classCenter)}>
          {childrenCenter}
        </div>
        <div className={clsx(styles.header__right, classRight)}>
          {childrenRight}
        </div>
      </header>
    );
  },
);
