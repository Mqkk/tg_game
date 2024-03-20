import { TNullable } from "../../../types";
import { IGender } from "../../domains/Genders/types";
import { IHair } from "../../domains/HairCharacter/types";
import { IFractionModel } from "../Fraction/types";

export interface ICharacterModel {
  fraction: IFractionModel;
  gender: TNullable<IGender>;
  hair: TNullable<IHair>;
}
