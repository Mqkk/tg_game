import { TUniqueId } from "../../../types";
import { IFractionModel } from "../../models/Fraction/types";

export type THairType = "fisrt" | "second";
export type THairColor = "blue" | "green" | "black";

export interface IUserStore {
  id: TUniqueId;
  name: string;
  fraction: IFractionModel;
  hair: { type: THairType; color: THairColor };
}
