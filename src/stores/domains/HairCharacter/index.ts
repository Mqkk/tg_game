/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { getHairColorList, getHairTypeList } from "../../../api/Hair";

import {
  IHairTypeListResponse,
  IHairColorListResponse,
} from "../../../interfaces/Hair";
import { TResponseApi } from "../../../helpers/apiManager/types";
import { IHairCharacterStore, THairColorList, THairTypeList } from "./types";

class HairCharacterStore implements IHairCharacterStore {
  colorList: THairColorList = [];
  typeList: THairTypeList = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *getHairType() {
    try {
      const response: TResponseApi<IHairTypeListResponse> =
        yield getHairTypeList();
      if (response.data !== null) {
        this.setTypeList(response.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  *getHairColor() {
    try {
      const response: TResponseApi<IHairColorListResponse> =
        yield getHairColorList();
      if (response.data !== null) {
        this.setColorList(response.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  *init() {
    yield this.getHairType();
    yield this.getHairColor();
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
