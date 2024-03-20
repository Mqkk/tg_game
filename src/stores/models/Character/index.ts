import { makeAutoObservable } from "mobx";

import { FractionModel } from "../Fraction";

import { IHair } from "../../domains/HairCharacter/types";
import { IGender } from "../../domains/Genders/types";
import { IFractionModel } from "../Fraction/types";
import { TNullable } from "../../../types";
import { ICharacterModel } from "./types";

export class CharacterModel implements ICharacterModel {
  fraction: IFractionModel;
  gender: TNullable<IGender> = null;
  hair: TNullable<IHair> = null;

  constructor(data: IFractionModel, gender: IGender, hair: IHair) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setData(hair, gender);
    this.fraction = new FractionModel(data);
  }

  setGender(value: TNullable<IGender>) {
    this.gender = value;
  }

  setHair(value: TNullable<IHair>) {
    this.hair = value;
  }

  setData(hair: IHair, gender: IGender) {
    this.setGender(gender);
    this.setHair(hair);
  }
}
