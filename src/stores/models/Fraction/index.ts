import { makeAutoObservable } from "mobx";

import { IFractionModel } from "./types";

export class FractionModel implements IFractionModel {
  id: number = 0;
  name: string = "";
  description: string = "";
  code: string = "";
  assetPath: string = "";

  constructor(data: IFractionModel) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setData(data);
  }

  setId(value: number): void {
    this.id = value;
  }

  setName(value: string): void {
    this.name = value;
  }

  setDescription(value: string): void {
    this.description = value;
  }

  setAssetPath(value: string): void {
    this.assetPath = value;
  }

  setData(data: IFractionModel) {
    this.setId(data.id);
    this.setName(data.name);
    this.setDescription(data.description);
    this.setAssetPath(data.assetPath);
  }
}
