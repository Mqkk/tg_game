/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { makeAutoObservable } from "mobx";
import { useState } from "react";

import {
  getLocationById,
  getLocationObjectById,
  getAvailableLocationList,
} from "../../../api/Location";
import { LocationModel } from "../../models/Location";
import { LocationObjectModel } from "../../models/LocationObject";

import {
  ILocation,
  ILocationResponse,
  ILocationObjectListResponse,
  IAvailableLocationListResponse,
} from "../../../interfaces/Location";
import { ILocationStore } from "./types";
import { ILocationModel } from "../../models/Location/types";
import { TResponseApi } from "../../../helpers/apiManager/types";
import { ILocationObjectModel } from "../../models/LocationObject/types";

class LocationStore implements ILocationStore {
  objectList: ILocationObjectModel[] = [];
  locationList: ILocationModel[] = [];
  location?: ILocation;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *getObjectList(locationId: number) {
    try {
      const response: TResponseApi<ILocationObjectListResponse> =
        yield getLocationObjectById(locationId);
      if (response.data !== null) {
        this.setObjectList(
          response?.data?.data?.map((item) => new LocationObjectModel(item)),
        );
      }
    } catch (e) {
      console.error(e);
    }
  }

  *getLocationList() {
    try {
      const response: TResponseApi<IAvailableLocationListResponse> =
        yield getAvailableLocationList();
      if (response.data !== null) {
        this.setLocationList(
          response?.data?.data?.map((item) => new LocationModel(item)),
        );
      }
    } catch (e) {
      console.error(e);
    }
  }

  *getLocation(id: number) {
    try {
      const response: TResponseApi<ILocationResponse> =
        yield getLocationById(id);
      if (response.data !== null) {
        this.setLocation(response?.data?.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  *init() {
    yield this.getLocationList();
    yield this.getLocation(this.locationList[0].id);

    if (this.location) {
      yield this.getObjectList(this.location?.id);
    }
  }

  setLocationList(value: ILocationModel[]) {
    this.locationList = value;
  }

  setObjectList(value: ILocationObjectModel[]) {
    this.objectList = value;
  }

  setLocation(value: ILocation) {
    this.location = value;
  }
}

let store: LocationStore;

export function initializeLocationStore() {
  const _store = store ?? new LocationStore();

  if (!store) store = _store;
  return store;
}

export const useLocationStore = (): ILocationStore =>
  useState(() => initializeLocationStore())[0];
export type { LocationStore };
