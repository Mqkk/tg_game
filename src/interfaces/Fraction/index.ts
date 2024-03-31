export type TFactionListResponse = {
  data: IFaction[];
};

export interface IFaction {
  id: number;
  name: string;
  code: string;
  description: string;
  assetPath: string;
}
