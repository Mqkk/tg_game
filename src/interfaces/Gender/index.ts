export interface IGenderListResponse {
  data: IGender[];
}

export interface IGender {
  id: number;
  name: string;
  code: string;
}
