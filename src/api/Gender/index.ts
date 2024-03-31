import { ApiManager } from "../../helpers/apiMaganger";

import { GENDER_LIST } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiMaganger/types";
import { TGenderListResponse } from "../../interfaces/Gender";

export async function getGenderList(): Promise<
  TResponseApi<TGenderListResponse>
> {
  return await ApiManager.request<TGenderListResponse>(
    {
      url: GENDER_LIST,
      method: "GET",
    },
    true,
  );
}
