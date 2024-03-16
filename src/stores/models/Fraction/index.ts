import { makeAutoObservable } from "mobx";
import { TUniqueId } from "../../../types";
import { IFractionModel } from "./types";

export class FractionModel implements IFractionModel {
  id: TUniqueId = "";
  name: string = "";
  description: string = "";
  image: string = "";

  constructor(data: IFractionModel) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setData(data);
  }

  setId(value: TUniqueId): void {
    this.id = value;
  }

  setName(value: string): void {
    this.name = value;
  }

  setDescription(value: string): void {
    this.description = value;
  }

  setImage(value: string): void {
    this.image = value;
  }

  setData(data: IFractionModel) {
    this.setId(data.id);
    this.setName(data.name);
    this.setDescription(data.description);
    this.setImage(data.image);
  }
}
