import { ApiManager } from "../../helpers/apiManager";

import { USER } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiManager/types";
import { IUserResponse } from "../../interfaces/User";

export async function getUser(): Promise<TResponseApi<IUserResponse>> {
  return await ApiManager.request<IUserResponse>(
    { url: USER, method: "GET" },
    true,
  );
}
