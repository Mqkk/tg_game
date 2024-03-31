import { ApiManager } from "../../helpers/apiManager";

import { HAIR_COLOR_LIST, HAIR_TYPE_LIST } from "../../constants/api";

import {
  IHairTypeListResponse,
  IHairColorListResponse,
} from "../../interfaces/Hair";
import { TResponseApi } from "../../helpers/apiManager/types";

export async function getHairTypeList(): Promise<
  TResponseApi<IHairTypeListResponse>
> {
  return await ApiManager.request<IHairTypeListResponse>(
    { url: HAIR_TYPE_LIST, method: "GET" },
    true,
  );
}

export async function getHairColorList(): Promise<
  TResponseApi<IHairColorListResponse>
> {
  return await ApiManager.request<IHairColorListResponse>(
    { url: HAIR_COLOR_LIST, method: "GET" },
    true,
  );
}
