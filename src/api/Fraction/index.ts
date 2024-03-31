import { ApiManager } from "../../helpers/apiMaganger";

import { FRACTION_LIST } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiMaganger/types";
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
