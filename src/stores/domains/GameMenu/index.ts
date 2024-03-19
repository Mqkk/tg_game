import { makeAutoObservable } from "mobx";
import { IGameMenuStore, TGameMenuList } from "./types";
import { useState } from "react";

class GameMenuStore implements IGameMenuStore {
  list: TGameMenuList = [
    {
      id: "1",
      name: "Рюкзак",
      image: "/src/assets/icon.svg",
      link: "",
    },
    {
      id: "2",
      name: "Локация",
      image: "/src/assets/icon.svg",
      link: "",
    },
    {
      id: "3",
      name: "Персонаж",
      image: "/src/assets/icon.svg",
      link: "",
    },
    {
      id: "4",
      name: "Поле битв",
      image: "/src/assets/icon.svg",
      link: "",
    },
    {
      id: "6",
      name: "Карта",
      image: "/src/assets/icon.svg",
      link: "",
    },
    {
      id: "7",
      name: "События",
      image: "/src/assets/icon.svg",
      link: "",
    },
    {
      id: "8",
      name: "Аукцион",
      image: "/src/assets/icon.svg",
      link: "",
    },
  ];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setList(value: TGameMenuList) {
    this.list = value;
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
