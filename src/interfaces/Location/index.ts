export interface ILocationResponse {
  id: number;
  name: string;
  type: string;
  assetPath: string;
}

export type TAvailableLocationListResponse = IAvailableLocation[];

export interface IAvailableLocation {
  id: number;
  name: string;
  type: string;
}

export type TLocationObjectListResponse = ILocationObject[];

export interface ILocationObject {
  id: number;
  name: string;
  type: string;
  assetPath: string;
}
