import { makeAutoObservable } from "mobx";

import { ILocationObjectModel } from "./types";

export class LocationObjectModel implements ILocationObjectModel {
  id: number = 0;
  name: string = "";
  type: string = "";
  assetPath: string = "";

  constructor(data: ILocationObjectModel) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setData(data);
  }

  setId(value: number): void {
    this.id = value;
  }

  setName(value: string): void {
    this.name = value;
  }

  setType(value: string): void {
    this.type = value;
  }

  setAssetPath(value: string): void {
    this.assetPath = value;
  }

  setData(data: ILocationObjectModel) {
    this.setId(data.id);
    this.setName(data.name);
    this.setType(data.type);
    this.setAssetPath(data.assetPath);
  }
}
