export interface ILocationResponse {
  data: ILocation;
}

export interface IAvailableLocationListResponse {
  data: IAvailableLocation[];
}

export interface IAvailableLocation {
  id: number;
  name: string;
  type: string;
}

export interface ILocationObjectListResponse {
  data: ILocationObject[];
}

export interface ILocationObject {
  id: number;
  name: string;
  type: string;
  assetPath: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  assetPath: string;
}
