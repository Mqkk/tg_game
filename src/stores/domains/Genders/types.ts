import { IGender } from "../../../interfaces/Gender";

export interface IGenderStore {
  genderList: TGenderList;
  getGenderList(): void;
}

export type TGenderList = IGender[];
