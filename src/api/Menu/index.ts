import { ApiManager } from "../../helpers/apiManager";

import { MENU } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiManager/types";
import { IMenuItemListResponse } from "../../interfaces/Menu";

export async function getMenu(): Promise<TResponseApi<IMenuItemListResponse>> {
  return await ApiManager.request<IMenuItemListResponse>(
    { url: MENU, method: "GET" },
    true,
  );
}
