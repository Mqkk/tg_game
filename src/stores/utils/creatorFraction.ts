import { FractionModel } from "../models/Fraction";

interface IFraction {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const creatorFraction = (item: IFraction) => new FractionModel(item);
