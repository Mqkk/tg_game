import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { IAuthorizationStore } from "./types";

class AuthorizationStore implements IAuthorizationStore {
  accessToken: string = "";
  tokenType: string = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getToken() {
    const queryString = window.location.search;
    let name = "token";

    if (!queryString) return null;
    name = name.replace(/[[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(queryString);
    if (!results) return null;
    if (!results[2]) return "";

    this.setAccessToken(decodeURIComponent(results[2].replace(/\+/g, " ")));
    localStorage.setItem("accessToken", this.accessToken);
  }

  setAccessToken(value: string) {
    this.accessToken = value;
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
