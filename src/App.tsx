import { observer } from "mobx-react-lite";

import { Navigation } from "./navigation";
import OrientationNotification from "./components/OrientationNotification";

import styles from "./app.module.scss";

export const App = observer(() => {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <OrientationNotification>
          <Navigation />
        </OrientationNotification>
      </div>
    </div>
  );
});
