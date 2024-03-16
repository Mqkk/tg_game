import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { IFractionsStore } from "./types";
import { IFractionModel } from "../../models/Fraction/types";

class FractionsStore implements IFractionsStore {
  fractionsList: IFractionModel[] = [
    { id: "1", name: "Фракция 1", description: "Описание фракции", image: "" },
    { id: "2", name: "Фракция 2", description: "Описание фракции", image: "" },
  ];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setFractionsList(value: IFractionModel[]) {
    this.fractionsList = value;
  }
}

let store: FractionsStore;

export function initializeFractionsStore() {
  const _store = store ?? new FractionsStore();

  if (!store) store = _store;
  return store;
}

export const useFractionsStore = (): IFractionsStore =>
  useState(() => initializeFractionsStore())[0];
export type { FractionsStore };
