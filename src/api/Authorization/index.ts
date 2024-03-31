import { ApiManager } from "../../helpers/apiManager";

import { AUTHORIZATION } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiManager/types";
import { ITokenResponse } from "../../interfaces/Authorization";
import { TNullable } from "../../types";

export async function getToken(
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
