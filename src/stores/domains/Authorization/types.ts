import { TNullable } from "../../../types";

export interface IAuthorizationStore {
  accessToken: TNullable<string>;
  getToken(): void;
  saveToken(): void;
}
