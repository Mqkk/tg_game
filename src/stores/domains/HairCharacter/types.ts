import {
  IHairColor,
  IHairType,
} from "../../../interfaces/Hair";

export interface IHairCharacterStore {
  colorList: THairColorList;
  typeList: THairTypeList;
  init(): void;
}

export type THairColorList = IHairColor[];

export type THairTypeList = IHairType[];
