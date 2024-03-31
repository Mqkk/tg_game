import { ApiManager } from "../../helpers/apiManager";

import {
  AVAILABLE_LOCATION_LIST,
  LOCATION_BY_ID,
  LOCATION_OBJECT_LIST_BY_ID,
} from "../../constants/api";

import { TResponseApi } from "../../helpers/apiManager/types";
import {
  ILocationResponse,
  IAvailableLocationListResponse,
  ILocationObjectListResponse,
} from "../../interfaces/Location";

export async function getAvailableLocationList(): Promise<
  TResponseApi<IAvailableLocationListResponse>
> {
  return await ApiManager.request<IAvailableLocationListResponse>(
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

export async function getLocationObjectById(
  locationId: number,
): Promise<TResponseApi<ILocationObjectListResponse>> {
  return await ApiManager.request<ILocationObjectListResponse>(
    { url: LOCATION_OBJECT_LIST_BY_ID(locationId), method: "GET" },
    true,
  );
}
