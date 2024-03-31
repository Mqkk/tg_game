import { ApiManager } from "../../helpers/apiMaganger";

import { AUTHORIZATION } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiMaganger/types";
import { ITokenResponse } from "../../interfaces/Authorization";
import { TNullable } from "../../types";

export async function getFractionList(
  tgId: number,
  tgLogin: TNullable<string>,
): Promise<TResponseApi<ITokenResponse>> {
  return await ApiManager.request<ITokenResponse>(
    {
      url: AUTHORIZATION,
      method: "GET",
      data: { tgId, tgLogin },
    },
    true,
  );
}
