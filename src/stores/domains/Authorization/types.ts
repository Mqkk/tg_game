import { TResponseApi } from "../../../helpers/apiMaganger/types";

export interface IAuthorizationStore {
  accessToken: string;
  tokenType: string;
  logout(): void;
  sendAuthorization(): void;
  saveDataToLocalStorage(response: TResponseApi<never>): void;
}
