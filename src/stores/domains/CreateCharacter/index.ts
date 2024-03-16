import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { initializeFractionsStore } from "../Fractions";

import { IFractionModel } from "../../models/Fraction/types";
import { TNullable, TUniqueId } from "../../../types";
import { IFractionsStore } from "../Fractions/types";
import { ICreateCharacterStore } from "./types";

class CreateCharacterStore implements ICreateCharacterStore {
  fraction: TNullable<IFractionModel> = null;
  fractionsStore: IFractionsStore;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.fractionsStore = initializeFractionsStore();
  }

  onChooseFraction(fractionId: TUniqueId): void {
    const selectedFraction = this.fractionsStore.fractionsList.find(
      (fraction) => fraction.id === fractionId,
    );

    selectedFraction && this.setFraction(selectedFraction);
  }

  setFraction(value: IFractionModel) {
    this.fraction = value;
  }
}

let store: CreateCharacterStore;

export function initializeCreateCharacterStore() {
  const _store = store ?? new CreateCharacterStore();

  if (!store) store = _store;
  return store;
}

export const useCreateCharacterStore = (): ICreateCharacterStore =>
  useState(() => initializeCreateCharacterStore())[0];
export type { CreateCharacterStore };
