import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { ILocationStore } from "./types";
import { TUniqueId } from "../../../types";

class LocationStore implements ILocationStore {
  id: TUniqueId = "1";
  title: string = "Стартовая локация";
  visual: string = "/src/assets/location.jpg";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setId(value: TUniqueId) {
    this.id = value;
  }

  setTitle(value: string) {
    this.title = value;
  }

  setVisual(value: string) {
    this.visual = value;
  }
}

let store: LocationStore;

export function initializeLocationStore() {
  const _store = store ?? new LocationStore();

  if (!store) store = _store;
  return store;
}

export const useLocationStore = (): ILocationStore =>
  useState(() => initializeLocationStore())[0];
export type { LocationStore };
