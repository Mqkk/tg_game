import { makeAutoObservable } from "mobx";
import { useState } from "react";
import { IGender, IGenderStore } from "./types";

class GenderStore implements IGenderStore {
  genderList: IGender[] = [
    { id: 1, value: "Мужчина" },
    { id: 2, value: "Женщина" },
  ];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

let store: GenderStore;

export function initializeGenderStore() {
  const _store = store ?? new GenderStore();

  if (!store) store = _store;
  return store;
}

export const useGenderStore = (): IGenderStore =>
  useState(() => initializeGenderStore())[0];
export { GenderStore };
