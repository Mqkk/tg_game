/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { initializeFractionsStore } from "../Fractions";

import {
  ICharacterRequest,
  ICharacterAppearancePresetResponse,
} from "../../../interfaces/Character";
import {
  postCharacter,
  getCharacterAppearancePreset,
} from "../../../api/Character";
import { TNullable } from "../../../types";
import { IFractionsStore } from "../Fractions/types";
import { TResponseApi } from "../../../helpers/apiManager/types";
import { ICreateCharacterStore, TCharacterAppearancePreset } from "./types";

class CreateCharacterStore implements ICreateCharacterStore {
  fractionId: TNullable<number> = null;
  hairColorId: TNullable<number> = 1;
  hairTypeId: TNullable<number> = 1;
  genderId: TNullable<number> = 1;

  characterAppearancePreset: TNullable<TCharacterAppearancePreset> = null;

  fractionsStore: IFractionsStore;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.fractionsStore = initializeFractionsStore();
    this.fractionsStore.getFractionList();
  }

  *getCharacterAppearancePreset() {
    try {
      const response: TResponseApi<ICharacterAppearancePresetResponse> =
        yield getCharacterAppearancePreset(
          this.fractionId ?? 0,
          this.genderId ?? 0,
          this.hairColorId ?? 0,
          this.hairTypeId ?? 0,
        );
      if (response.data !== null) {
        this.setCharacterAppearancePreset(response?.data?.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  *createCharacter() {
    try {
      const response: TResponseApi<ICharacterRequest> = yield postCharacter({
        factionId: this.fractionId ?? 0,
        hairColorId: this.hairColorId ?? 0,
        hairId: this.hairTypeId ?? 0,
        genderId: this.genderId ?? 0,
      });

      if (response) {
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }

  onChooseFraction(fractionId: TNullable<number>): void {
    const selectedFraction = this.fractionsStore.fractionList.find(
      (fraction) => fraction.id === fractionId,
    );

    selectedFraction && this.setFractionId(selectedFraction.id);
  }

  setCharacterAppearancePreset(value: TNullable<TCharacterAppearancePreset>) {
    this.characterAppearancePreset = value;
  }

  setFractionId(value: TNullable<number>) {
    this.fractionId = value;
  }

  setHairTypeId(value: TNullable<number>) {
    this.hairTypeId = value;
    this.getCharacterAppearancePreset();
  }

  setHairColorId(value: TNullable<number>) {
    this.hairColorId = value;
    this.getCharacterAppearancePreset();
  }

  setGenderId(value: TNullable<number>) {
    this.genderId = value;
    this.getCharacterAppearancePreset();
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
