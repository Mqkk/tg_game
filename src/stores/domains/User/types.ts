import { TUniqueId } from "../../../types";
import { ICharacterModel } from "../../models/Character/types";

export interface IUserStore {
  id: TUniqueId;
  name: string;
  img: string;
  character?: ICharacterModel;
  hp: number;
  energy: number;
  honor: number;
  gold: number;
}
