type TError = {
  code: string;
  message: string;
};

export interface IResponseError extends TError {
  errors?: {
    email?: string;
    password?: string;
    confirm_password?: string;
    phone?: string;
  };
  data?: { message?: string };
}

export interface IAxiosInterceptorResponse<T> {
  isSuccess: boolean;
  isNotAuth: boolean;
  isError: boolean;
  isTooManyRequests: boolean;
  isTimeoutEnd: boolean;
  data: T | null;
  error: IResponseError | null;
}

export type TResponseApi<T> = IAxiosInterceptorResponse<T>;
