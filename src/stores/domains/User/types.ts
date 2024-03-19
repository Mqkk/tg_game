import { TUniqueId } from "../../../types";
import { IFractionModel } from "../../models/Fraction/types";

export type THairType = "fisrt" | "second";
export type THairColor = "blue" | "green" | "black";

export interface IUserStore {
  id: TUniqueId;
  name: string;
  img: string;
  fraction: IFractionModel;
  hair: IHair;
  hp: number;
  energy: number;
  honor: number;
  gold: number;
}

export interface IHair {
  type: THairType;
  color: THairColor;
}
