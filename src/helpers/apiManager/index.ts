/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { API, TOKEN } from "../../constants/api";

import { IAxiosInterceptorResponse, TResponseApi } from "./types";
import { TNullable } from "../../types";

const KEYS_STORAGE = {
  accessToken: "accessToken",
};

type NullableString = TNullable<string>;
type TTokens = {
  readonly accessToken: string;
  readonly tokenType: string;
};

interface IApiManager {
  writeToken(tokens: TTokens): void;
  request<T, D = any>(
    params: AxiosRequestConfig<D>,
    withToken: boolean,
  ): Promise<Awaited<TResponseApi<T>>>;
}

class Api implements IApiManager {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = Api._createInstance();
  }

  private static _createInstance(): AxiosInstance {
    return axios.create({
      baseURL: API,
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      validateStatus: (status) => status < 500,
    });
  }

  private _setAccessToken() {
    const token = Api._readAccessToken();
    if (token) {
      this._instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      this._instance.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
    }
  }

  private _deleteToken() {
    delete this._instance.defaults.headers.common.Authorization;
  }

  private static _readAccessToken(): NullableString {
    return localStorage.getItem(KEYS_STORAGE.accessToken);
  }

  private static _writeAccessToken(token: string) {
    localStorage.setItem(KEYS_STORAGE.accessToken, token);
  }

  private static _deleteAccessToken() {
    localStorage.removeItem(KEYS_STORAGE.accessToken);
  }

  writeToken(tokens: TTokens): void {
    Api._writeAccessToken(tokens.accessToken);
  }

  deleteToken(): void {
    Api._deleteAccessToken();
  }

  async request<T, D = any>(
    params: AxiosRequestConfig<D>,
    withToken: boolean = false,
  ): Promise<Awaited<TResponseApi<T>>> {
    let result: TResponseApi<T> = {
      isSuccess: false,
      isNotAuth: false,
      isError: true,
      isTooManyRequests: false,
      isTimeoutEnd: false,
      data: null,
      error: null,
    };

    try {
      if (withToken) {
        this._setAccessToken();
      } else {
        this._deleteToken();
      }

      result = await this._instance.request<T, IAxiosInterceptorResponse<T>, D>(
        params,
      );
    } catch (e) {
      return result;
    }

    return result;
  }
}

export const ApiManager = new Api();
