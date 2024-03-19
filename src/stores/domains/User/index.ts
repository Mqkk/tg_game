import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { FractionModel } from "../../models/Fraction";

import { IFractionModel } from "../../models/Fraction/types";
import { IHair, IUserStore } from "./types";
import { TUniqueId } from "../../../types";

class UserStore implements IUserStore {
  id: TUniqueId = "1";
  name: string = "John";
  img: string = "/src/assets/icon.svg";
  fraction: IFractionModel;
  hair: IHair = { type: "fisrt", color: "black" };
  hp: number = 100;
  energy: number = 100;
  honor: number = 100;
  gold: number = 100;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.fraction = new FractionModel();
  }

  setId(value: TUniqueId) {
    this.id = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setImg(value: string) {
    this.img = value;
  }

  setHair(value: IHair) {
    this.hair = value;
  }

  setHp(value: number) {
    this.hp = value;
  }

  setEnergy(value: number) {
    this.energy = value;
  }

  setHonor(value: number) {
    this.honor = value;
  }

  setGold(value: number) {
    this.gold = value;
  }
}

let store: UserStore;

export function initializeUserStore() {
  const _store = store ?? new UserStore();

  if (!store) store = _store;
  return store;
}

export const useUserStore = (): IUserStore =>
  useState(() => initializeUserStore())[0];
export type { UserStore };
