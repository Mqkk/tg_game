import { TUniqueId } from "../../../types";

export interface IHairCharacterStore {}

export interface IHairColor {
  id: TUniqueId;
  value: string;
}

export interface IHairType {
  id: TUniqueId;
  name: string;
  image: string;
}

export type THairColorList = IHairColor[];

export type THairTypeList = IHairType[];
