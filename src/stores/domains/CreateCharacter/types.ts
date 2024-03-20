import { TNullable, TUniqueId } from "../../../types";
import { IFractionModel } from "../../models/Fraction/types";
import { IGender } from "../Genders/types";
import { IHair, IHairColor, IHairType } from "../HairCharacter/types";

export interface ICreateCharacterStore {
  fraction: TNullable<IFractionModel>;
  hair: IHair;
  gender: TNullable<IGender>;
  setHairType(value: TNullable<IHairType>): void;
  setHairColor(value: TNullable<IHairColor>): void;
  setGender(value: IGender): void;
  onChooseFraction(fractionId: TUniqueId): void;
}
