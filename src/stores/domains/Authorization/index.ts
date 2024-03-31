import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { IAuthorizationStore } from "./types";
import { TResponseApi } from "../../../helpers/apiManager/types";

class AuthorizationStore implements IAuthorizationStore {
  accessToken: string = "";
  tokenType: string = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  logout(): void {}

  sendAuthorization(): void {}

  saveDataToLocalStorage(response: TResponseApi<never>): void {
    response;
  }
}

let store: AuthorizationStore;

export function initializeAuthorizationStore() {
  const _store = store ?? new AuthorizationStore();

  if (!store) store = _store;
  return store;
}

export const useAuthorizationStore = (): IAuthorizationStore =>
  useState(() => initializeAuthorizationStore())[0];
export type { AuthorizationStore };
