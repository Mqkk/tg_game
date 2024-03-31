import { ILocation } from "../../../interfaces/Location";
import { ILocationModel } from "../../models/Location/types";
import { ILocationObjectModel } from "../../models/LocationObject/types";

export interface ILocationStore {
  locationList: ILocationModel[];
  objectList: ILocationObjectModel[];
  location?: ILocation;
  init(): void;
}
