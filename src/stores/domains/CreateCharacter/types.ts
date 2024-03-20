import { TNullable, TUniqueId } from "../../../types";
import { IFractionModel } from "../../models/Fraction/types";
import { IGender } from "../Genders/types";
import { IHair, IHairColor, IHairType } from "../HairCharacter/types";

export interface ICreateCharacterStore {
  fraction: TNullable<IFractionModel>;
  gender: TNullable<IGender>;
  hair: IHair;
  setGender(value: IGender): void;
  setHairType(value: TNullable<IHairType>): void;
  setHairColor(value: TNullable<IHairColor>): void;
  onChooseFraction(fractionId: TUniqueId): void;
}
