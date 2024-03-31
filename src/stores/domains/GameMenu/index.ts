/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { getMenu } from "../../../api/Menu";
import { GameMenuItemModel } from "../../models/GameMenuItem";

import { IGameMenuStore, TGameMenuList } from "./types";
import { TResponseApi } from "../../../helpers/apiManager/types";
import { IMenuItemListResponse } from "../../../interfaces/Menu";

class GameMenuStore implements IGameMenuStore {
  menuList: TGameMenuList = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setMenuList(value: TGameMenuList) {
    this.menuList = value;
  }

  *getMenuList() {
    try {
      const response: TResponseApi<IMenuItemListResponse> = yield getMenu();
      if (response.data !== null) {
        this.setMenuList(
          response.data.data.map((item) => new GameMenuItemModel(item, "/")),
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}

let store: GameMenuStore;

export function initializeGameMenuStore() {
  const _store = store ?? new GameMenuStore();

  if (!store) store = _store;
  return store;
}

export const useGameMenuStore = (): IGameMenuStore =>
  useState(() => initializeGameMenuStore())[0];
export type { GameMenuStore };
