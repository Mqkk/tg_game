import { ICreateCharacterStore } from "../domains/CreateCharacter/types";
import { CharacterModel } from "../models/Character";

export function creatorCharacter(item: ICreateCharacterStore) {
  if (item.fraction && item.gender) {
    return new CharacterModel(item.fraction, item.gender, item.hair);
  }
}
