/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/await-thenable */
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "./stores/domains/User";

import { Navigation } from "./navigation";
import OrientationNotification from "./components/OrientationNotification";

import { SCREENS } from "./navigation/endpoints";

import styles from "./app.module.scss";

export const App = observer(() => {
  const [loading, setLoading] = useState(true);
  const { getUser, tgId } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
      setLoading(false);
    };

    fetchData();
  }, [getUser]);

  useEffect(() => {
    if (!loading && !tgId) {
      navigate(SCREENS.CREATE_CHARACTER);
    }
  }, [loading, tgId, navigate]);

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
