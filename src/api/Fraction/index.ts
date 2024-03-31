import { ApiManager } from "../../helpers/apiManager";

import { FRACTION_LIST } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiManager/types";
import { TFactionListResponse } from "../../interfaces/Fraction";

export async function getFractionList(): Promise<
  TResponseApi<TFactionListResponse>
> {
  return await ApiManager.request<TFactionListResponse>(
    {
      url: FRACTION_LIST,
      method: "GET",
    },
    true,
  );
}
