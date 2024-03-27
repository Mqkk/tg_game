import { TUniqueId } from "../../../types";

export interface ILocationStore {
  id: TUniqueId;
  title: string;
  visual: string;
  objects: TObjectLocationList;
}

export type TObjectLocationList = IObjectLocation[];

export interface IObjectLocation {
  id: TUniqueId;
  img: string;
}
