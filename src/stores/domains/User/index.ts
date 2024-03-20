import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { initializeCreateCharacterStore } from "../CreateCharacter";
import { creatorCharacter } from "../../utils/creatorCharacter";

import { IUserStore } from "./types";
import { TUniqueId } from "../../../types";
import { ICharacterModel } from "../../models/Character/types";
import { ICreateCharacterStore } from "../CreateCharacter/types";

class UserStore implements IUserStore {
  id: TUniqueId = "1";
  name: string = "John";
  img: string = "/src/assets/icon.svg";
  character?: ICharacterModel;
  hp: number = 100;
  energy: number = 100;
  honor: number = 100;
  gold: number = 100;

  createCharacterStore: ICreateCharacterStore;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.createCharacterStore = initializeCreateCharacterStore();
    this.character = creatorCharacter(this.createCharacterStore);
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
