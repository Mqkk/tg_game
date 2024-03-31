import { ApiManager } from "../../helpers/apiMaganger";

import { AVAILABLE_LOCATION_LIST, LOCATION_BY_ID } from "../../constants/api";

import { TResponseApi } from "../../helpers/apiMaganger/types";
import {
  ILocationResponse,
  TAvailableLocationListResponse,
} from "../../interfaces/Location";

export async function getAvailableLocationList(): Promise<
  TResponseApi<TAvailableLocationListResponse>
> {
  return await ApiManager.request<TAvailableLocationListResponse>(
    {
      url: AVAILABLE_LOCATION_LIST,
      method: "GET",
    },
    true,
  );
}

export async function getLocationById(
  locationId: number,
): Promise<TResponseApi<ILocationResponse>> {
  return await ApiManager.request<ILocationResponse>(
    {
      url: LOCATION_BY_ID(locationId),
      method: "GET",
    },
    true,
  );
}
