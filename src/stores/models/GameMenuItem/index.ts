import { makeAutoObservable } from "mobx";
import { TUniqueId } from "../../../types";
import { IGameMenuItemModel } from "./types";

export class GameMenuItemModel implements IGameMenuItemModel {
  id: TUniqueId = "";
  name: string = "";
  image: string = "";
  link: string = "";

  constructor(data: IGameMenuItemModel) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setData(data);
  }

  setId(value: TUniqueId): void {
    this.id = value;
  }

  setName(value: string): void {
    this.name = value;
  }

  setLink(value: string): void {
    this.link = value;
  }

  setImage(value: string): void {
    this.image = value;
  }

  setData(data: IGameMenuItemModel) {
    this.setId(data.id);
    this.setName(data.name);
    this.setLink(data.link);
    this.setImage(data.image);
  }
}
