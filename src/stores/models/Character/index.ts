import { makeAutoObservable } from "mobx";

import { ICharacterModel } from "./types";

export class CharacterModel implements ICharacterModel {
  id: number = 0;
  name: string = "";
  balance: number = 0;
  experience: number = 0;
  hp: number = 0;
  valor: number = 0;
  appearance = {
    assetPath: "",
  };

  constructor(data: ICharacterModel) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setData(data);
  }

  setId(value: number) {
    this.id = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setBalance(value: number) {
    this.balance = value;
  }

  setExperience(value: number) {
    this.experience = value;
  }

  setHp(value: number) {
    this.hp = value;
  }

  setValor(value: number) {
    this.valor = value;
  }

  setAppearance(value: string) {
    this.appearance.assetPath = value;
  }

  setData(data: ICharacterModel) {
    this.setId(data.id);
    this.setName(data.name);
    this.setBalance(data.balance);
    this.setExperience(data.experience);
    this.setHp(data.hp);
    this.setValor(data.valor);
    this.setAppearance(data.appearance.assetPath);
  }
}
