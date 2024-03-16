import { TUniqueId } from "../../types";

export interface ISelectorItem {
  id: TUniqueId;
  value: string;
}

export type TSelectorList = ISelectorItem[];
