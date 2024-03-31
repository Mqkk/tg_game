/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { getFractionList } from "../../../api/Fraction";
import { FractionModel } from "../../models/Fraction";

import { IFractionsStore } from "./types";
import { IFractionModel } from "../../models/Fraction/types";
import { TResponseApi } from "../../../helpers/apiManager/types";
import { TFactionListResponse } from "../../../interfaces/Fraction";

class FractionsStore implements IFractionsStore {
  fractionList: IFractionModel[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setFractionList(value: IFractionModel[]) {
    this.fractionList = value;
  }

  *getFractionList() {
    try {
      const response: TResponseApi<TFactionListResponse> =
        yield getFractionList();
      if (response?.data) {
        this.setFractionList(
          response.data.data.map((item) => new FractionModel(item)),
        );
      }
    } catch (e) {
      console.error(e);
    }
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
