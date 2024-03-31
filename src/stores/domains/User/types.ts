import { ICharacterModel } from "../../models/Character/types";

export interface IUserStore {
  tgId: string;
  tgLogin: string;
  lastLogin: string;
  character?: ICharacterModel;
  getCharacter(): void;
  getUser(): void;
}
