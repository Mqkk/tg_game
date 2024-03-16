import { TNullable, TUniqueId } from "../../../types";
import { IFractionModel } from "../../models/Fraction/types";

export interface ICreateCharacterStore {
  fraction: TNullable<IFractionModel>;
  onChooseFraction(fractionId: TUniqueId): void;
}
