import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./styles/index.module.scss";

interface IProps {
  href?: string;
  isLink?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?(event: React.MouseEvent): void;
}

export const Button = observer(
  ({
    children,
    isLink = false,
    className = "",
    href = "",
    onClick = () => {},
  }: IProps) =>
    isLink ? (
      <Link
        to={href}
        onClick={onClick}
        className={clsx(styles.button, className)}
      >
        {children}
      </Link>
    ) : (
      <button
        type="button"
        onClick={onClick}
        className={clsx(styles.button, className)}
      >
        {children}
      </button>
    ),
);
