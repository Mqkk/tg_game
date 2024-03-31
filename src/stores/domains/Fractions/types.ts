import { IFractionModel } from "../../models/Fraction/types";

export interface IFractionsStore {
  fractionList: IFractionModel[];
  getFractionList(): void;
}
