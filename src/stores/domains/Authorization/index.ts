import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { IAuthorizationStore } from "./types";
import { TNullable } from "../../../types";

class AuthorizationStore implements IAuthorizationStore {
  accessToken: TNullable<string> = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getToken() {
    const queryString = window.location.search;
    const tokenParam = "token=";

    if (!queryString) return null;

    const tokenIndex = queryString.indexOf(tokenParam);

    if (tokenIndex === -1) return null;

    const tokenStart = tokenIndex + tokenParam.length;
    const token = queryString.substring(tokenStart);

    localStorage.setItem("accessToken", decodeURIComponent(token));
  }

  saveToken() {
    this.setAccessToken(localStorage.getItem("accessToken"));
  }

  setAccessToken(value: TNullable<string>) {
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
