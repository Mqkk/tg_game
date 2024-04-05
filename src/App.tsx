/* eslint-disable @typescript-eslint/await-thenable */
import { observer } from "mobx-react-lite";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "./stores/domains/User";
import { useAuthorizationStore } from "./stores/domains/Authorization";

import { Navigation } from "./navigation";
import { Loading } from "./components/Loading";
import OrientationNotification from "./components/OrientationNotification";

import { SCREENS } from "./navigation/endpoints";

import styles from "./app.module.scss";

export const App = observer(() => {
  const { getToken, accessToken, saveToken } = useAuthorizationStore();
  const { getCharacter, character } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!accessToken) {
      getToken();
      saveToken();
    }
  }, [accessToken]);

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
  }, []);

  useEffect(() => {
    if (!isLoading && !character?.name && accessToken) {
      navigate(SCREENS.CREATE_CHARACTER);
    }
  }, [character]);

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <OrientationNotification>
          {!accessToken ? <Loading /> : <Navigation />}
        </OrientationNotification>
      </div>
    </div>
  );
});
