import { ApiManager } from "../../helpers/apiMaganger";

import { MENU } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiMaganger/types";
import { TMenuItemListResponse } from "../../interfaces/Menu";

export async function getMenu(): Promise<TResponseApi<TMenuItemListResponse>> {
  return await ApiManager.request<TMenuItemListResponse>(
    { url: MENU, method: "GET" },
    true,
  );
}
