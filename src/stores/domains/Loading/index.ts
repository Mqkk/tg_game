import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { ILoadingStore } from "./types";

class LoadingStore implements ILoadingStore {
  isLoading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }
}

let store: LoadingStore;

export function initializeLoadingStore() {
  const _store = store ?? new LoadingStore();

  if (!store) store = _store;
  return store;
}

export const useLoadingStore = (): ILoadingStore =>
  useState(() => initializeLoadingStore())[0];
export type { LoadingStore };
