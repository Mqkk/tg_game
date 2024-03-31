import { ApiManager } from "../../helpers/apiMaganger";

import { CHARACTER, CHARACTER_APPEARANCE_PRESET } from "../../constants/api";

import {
  ICharacterRequest,
  ICharacterResponse,
  ICharacterAppearancePresetResponse,
} from "../../interfaces/Character";
import { TResponseApi } from "../../helpers/apiMaganger/types";

export async function getCharacter(): Promise<
  TResponseApi<ICharacterResponse>
> {
  return await ApiManager.request<ICharacterResponse>(
    { url: CHARACTER, method: "GET" },
    true,
  );
}

export async function postCharacter(
  params: ICharacterRequest,
): Promise<TResponseApi<ICharacterRequest>> {
  return await ApiManager.request<ICharacterRequest>(
    {
      url: CHARACTER,
      method: "POST",
      data: params,
    },
    true,
  );
}

export async function getCharacterAppearancePreset(
  factionId: number,
  genderId: number,
  hairColorId: number,
  hairId: number,
): Promise<TResponseApi<ICharacterAppearancePresetResponse>> {
  return await ApiManager.request<ICharacterAppearancePresetResponse>(
    {
      url: CHARACTER_APPEARANCE_PRESET,
      method: "GET",
      data: { factionId, genderId, hairColorId, hairId },
    },
    true,
  );
}
