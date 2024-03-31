import { ApiManager } from "../../helpers/apiManager";

import { GENDER_LIST } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiManager/types";
import { IGenderListResponse } from "../../interfaces/Gender";

export async function getGenderList(): Promise<
  TResponseApi<IGenderListResponse>
> {
  return await ApiManager.request<IGenderListResponse>(
    {
      url: GENDER_LIST,
      method: "GET",
    },
    true,
  );
}
