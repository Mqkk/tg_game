/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { getGenderList } from "../../../api/Gender";

import { IGenderStore, TGenderList } from "./types";
import { TResponseApi } from "../../../helpers/apiManager/types";
import { IGenderListResponse } from "../../../interfaces/Gender";

class GenderStore implements IGenderStore {
  genderList: TGenderList = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setGenderList(value: TGenderList) {
    this.genderList = value;
  }

  *getGenderList() {
    try {
      const response: TResponseApi<IGenderListResponse> = yield getGenderList();
      if (response.data !== null) {
        this.setGenderList(response?.data?.data);
      }
    } catch (e) {
      console.error(e);
    }
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
