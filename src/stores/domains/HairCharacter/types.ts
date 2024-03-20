import { TNullable, TUniqueId } from "../../../types";

export interface IHairCharacterStore {
  colorList: THairColorList;
  typeList: THairTypeList;
}

export interface IHair {
  type: TNullable<IHairType>;
  color: TNullable<IHairColor>;
}

export interface IHairColor {
  id: TUniqueId;
  value: string;
}

export interface IHairType {
  id: TUniqueId;
  value: string;
  image: string;
}

export type THairColorList = IHairColor[];

export type THairTypeList = IHairType[];
