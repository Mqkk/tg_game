import { observer } from "mobx-react-lite";

import { Navigation } from "./navigation";

import styles from "./app.module.scss";

export const App = observer(() => {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Navigation />
      </div>
    </div>
  );
});
