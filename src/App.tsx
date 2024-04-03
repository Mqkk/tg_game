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
  const { getCharacter, character } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCharacter();
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [getCharacter, setIsLoading]);

  useEffect(() => {
    if (!isLoading && !character?.name) {
      navigate(SCREENS.CREATE_CHARACTER);
    }
  }, [isLoading, character, navigate]);

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
