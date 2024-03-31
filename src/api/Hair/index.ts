import { ApiManager } from "../../helpers/apiMaganger";

import { HAIR_COLOR_LIST, HAIR_TYPE_LIST } from "../../constants/api";

import {
  THairColorListResponse,
  THairTypeListResponse,
} from "../../interfaces/Hair";
import { TResponseApi } from "../../helpers/apiMaganger/types";

export async function getHairTypeList(): Promise<
  TResponseApi<THairTypeListResponse>
> {
  return await ApiManager.request<THairTypeListResponse>(
    { url: HAIR_TYPE_LIST, method: "GET" },
    true,
  );
}

export async function getHairColorList(): Promise<
  TResponseApi<THairColorListResponse>
> {
  return await ApiManager.request<THairColorListResponse>(
    { url: HAIR_COLOR_LIST, method: "GET" },
    true,
  );
}
