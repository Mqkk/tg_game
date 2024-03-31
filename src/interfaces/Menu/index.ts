export interface IMenuItemListResponse {
  data: IMenuItem[];
}

export interface IMenuItem {
  id: number;
  name: string;
  code: string;
  assetPath: string;
}
