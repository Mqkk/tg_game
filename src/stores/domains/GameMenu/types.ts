import { IMenuItem } from "../../../interfaces/Menu";

export interface IGameMenuStore {
  menuList: IMenuItem[];
  getMenuList(): void;
}

export type TGameMenuList = IMenuItem[];
