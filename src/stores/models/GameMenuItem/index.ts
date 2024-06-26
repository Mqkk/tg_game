import { makeAutoObservable } from "mobx";
import { IGameMenuItemModel } from "./types";
import { IMenuItem } from "../../../interfaces/Menu";

export class GameMenuItemModel implements IGameMenuItemModel {
  id: number = 0;
  name: string = "";
  assetPath: string = "";
  code: string = "";
  link: string = "";

  constructor(data: IMenuItem, link: string = "") {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setData(data);
    this.setLink(link);
  }

  setId(value: number): void {
    this.id = value;
  }

  setName(value: string): void {
    this.name = value;
  }

  setLink(value: string): void {
    this.link = value;
  }

  setCode(value: string): void {
    this.code = value;
  }

  setAssetPath(value: string): void {
    this.assetPath = value;
  }

  setData(data: IMenuItem) {
    this.setId(data.id);
    this.setName(data.name);
    this.setAssetPath(data.assetPath);
    this.setCode(data.code);
  }
}
