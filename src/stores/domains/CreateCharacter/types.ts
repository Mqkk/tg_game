import { TNullable, TUniqueId } from "../../../types";
import { IFractionModel } from "../../models/Fraction/types";
import { IGender } from "../Genders/types";
import { IHairColor, IHairType } from "../HairCharacter/types";

export interface ICreateCharacterStore {
  fraction: TNullable<IFractionModel>;
  hairColor: TNullable<IHairColor>;
  hairType: TNullable<IHairType>;
  setHairType(value: IHairType): void;
  setHairColor(value: IHairColor): void;
  setGender(value: IGender): void;
  onChooseFraction(fractionId: TUniqueId): void;
}
