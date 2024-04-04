/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { useState } from "react";

import { initializeCreateCharacterStore } from "../CreateCharacter";
import { CharacterModel } from "../../models/Character";

import { getCharacter } from "../../../api/Character";
import { getUser } from "../../../api/User";

import { IUserStore } from "./types";
import { IUserResponse } from "../../../interfaces/User";
import { ICharacterModel } from "../../models/Character/types";
import { ICreateCharacterStore } from "../CreateCharacter/types";
import { TResponseApi } from "../../../helpers/apiManager/types";
import { ICharacterResponse } from "../../../interfaces/Character";

class UserStore implements IUserStore {
  tgId: string = "";
  tgLogin: string = "";
  lastLogin: string = "";
  character?: ICharacterModel;
  createCharacterStore: ICreateCharacterStore;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.createCharacterStore = initializeCreateCharacterStore();
  }

  *getUser() {
    try {
      const response: TResponseApi<IUserResponse> = yield getUser();
      if (response.data?.data) {
        this.setTgId(response?.data?.data?.tgId);
        this.setLastLogin(response?.data?.data?.lastLogin);
        this.setTgLogin(response?.data?.data?.tgLogin);
      }
    } catch (e) {
      console.error(e);
    }
  }

  *getCharacter() {
    try {
      const response: TResponseApi<ICharacterResponse> = yield getCharacter();
      if (response.data !== null) {
        this.setCharacter(new CharacterModel(response?.data?.data));
      }
    } catch (e) {
      console.error(e);
    }
  }

  setTgId(value: string) {
    this.tgId = value;
  }

  setTgLogin(value: string) {
    this.tgLogin = value;
  }

  setLastLogin(value: string) {
    this.lastLogin = value;
  }

  setCharacter(value: CharacterModel) {
    this.character = value;
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
