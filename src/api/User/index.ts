import { ApiManager } from "../../helpers/apiMaganger";

import { USER } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiMaganger/types";
import { IUserResponse } from "../../interfaces/User";

export async function getUser(): Promise<TResponseApi<IUserResponse>> {
  return await ApiManager.request<IUserResponse>(
    { url: USER, method: "GET" },
    true,
  );
}
