import { IGameMenuItemModel } from "../../models/GameMenuItem/types";

export interface IGameMenuStore {
  list: TGameMenuList;
}

export type TGameMenuList = IGameMenuItemModel[];
