import { ICharacterAppearancePresetResponse } from "../../../interfaces/Character";
import { TNullable } from "../../../types";
export interface ICreateCharacterStore {
  characterAppearancePreset: TNullable<TCharacterAppearancePreset>;
  genderId: TNullable<number>;
  fractionId: TNullable<number>;
  hairTypeId: TNullable<number>;
  hairColorId: TNullable<number>;
  setGenderId(value: TNullable<number>): void;
  setHairTypeId(value: TNullable<number>): void;
  setHairColorId(value: TNullable<number>): void;
  onChooseFraction(fractionId: TNullable<number>): void;
  createCharacter(): void;
  getCharacterAppearancePreset(): void;
}

export type TCharacterAppearancePreset =
  ICharacterAppearancePresetResponse["data"];
