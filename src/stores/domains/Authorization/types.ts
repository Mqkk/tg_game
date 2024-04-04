export interface IAuthorizationStore {
  accessToken: string;
  tokenType: string;
  getToken(): void;
}
