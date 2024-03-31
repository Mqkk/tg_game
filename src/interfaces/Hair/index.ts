export type THairTypeListResponse = IHairType[];

export interface IHairType {
  id: number;
  name: string;
  code: string;
}

export type THairColorListResponse = IHairColor[];

export interface IHairColor {
  id: number;
  name: string;
  code: string;
  hex: string;
}
