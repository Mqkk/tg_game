import { TUniqueId } from "../../../types";

export interface IGenderStore {
  genderList: IGender[];
}

export interface IGender {
  id: TUniqueId;
  value: string;
}
