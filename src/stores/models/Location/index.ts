import { makeAutoObservable } from "mobx";

import { ILocationModel } from "./types";

export class LocationModel implements ILocationModel {
  id: number = 0;
  name: string = "";
  type: string = "";

  constructor(data: ILocationModel) {
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

  setData(data: ILocationModel) {
    this.setId(data.id);
    this.setName(data.name);
    this.setType(data.type);
  }
}
