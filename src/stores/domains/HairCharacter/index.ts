import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { IHairCharacterStore, THairColorList, THairTypeList } from "./types";

class HairCharacterStore implements IHairCharacterStore {
  colorList: THairColorList = [
    { id: 1, value: "#000" },
    { id: 2, value: "green" },
    { id: 3, value: "blue" },
    { id: 4, value: "yellow" },
  ];
  typeList: THairTypeList = [
    { id: 1, value: "HairName 1", image: "" },
    { id: 2, value: "HairName 2", image: "" },
    { id: 3, value: "HairName 3", image: "" },
    { id: 4, value: "HairName 4", image: "" },
  ];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setColorList(value: THairColorList) {
    this.colorList = value;
  }

  setTypeList(value: THairTypeList) {
    this.typeList = value;
  }
}

let store: HairCharacterStore;

export function initializeHairCharacterStore() {
  const _store = store ?? new HairCharacterStore();

  if (!store) store = _store;
  return store;
}

export const useHairCharacterStore = (): IHairCharacterStore =>
  useState(() => initializeHairCharacterStore())[0];
export type { HairCharacterStore };
