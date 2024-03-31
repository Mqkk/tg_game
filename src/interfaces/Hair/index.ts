export interface IHairTypeListResponse {
  data: IHairType[];
}

export interface IHairType {
  id: number;
  name: string;
  code: string;
}

export interface IHairColorListResponse {
  data: IHairColor[];
}

export interface IHairColor {
  id: number;
  name: string;
  code: string;
  hex: string;
}
