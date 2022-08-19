import { history } from 'app';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from 'constaints.ts/constants';
import { IAuthenticateRes, IRefreshTokenRes } from 'interfaces/authent-model';
import { logout, save } from 'lib/storage';

export interface IUseFetch {
  url: string;
  method: 'get' | 'delete' | 'post' | 'put' | 'patch';
  isAuth?: boolean;
  payload?: any;
}

const apiOauthUrl: string = process.env.webdebugUrl as string;
const apiRefreshTokenUrl: string = process.env.webdebugUrl as string;

let refreshTokenPromise: any | null; // this holds any in-progress token refresh requests

export const useFetchApi = async (options: IUseFetch): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        ...(options.isAuth && {
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_KEYS.ACCESS_TOKEN
          )}`,
        }),
      },
      baseURL: process.env.apiOpsBaseUrl,
    };
    const response = await axios[options.method](
      '/'.concat(options.url),
      options.payload || config, // the method get & delete wont have data and receive only 2 params -> payload empty -> get config
      config // third param always be config
    );

    return response.data;
  } catch (error: any) {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
    if (
      refreshToken &&
      error.response.status === 401 &&
      error.response.data.errorCode === '401' &&
      !originalRequest.retry
    ) {
      if (!refreshTokenPromise) {
        // check for an existing in-progress request
        // if nothing is in-progress, start a new refresh token request
        originalRequest.retry = true;
        refreshTokenPromise = getRefreshToken(refreshToken).then(() => {
          refreshTokenPromise = null; // clear state
        });
      }
      return refreshTokenPromise.then((token: any) => {
        // eslint-disable-next-line no-param-reassign
        error.config.headers['X-CSRF-TOKEN'] = token;
        return axios.request(error.config);
      });
    }
    if (
      error.response.status === 401 &&
      error.response.data.errorCode === '401'
    ) {
      // EXPIRED ALL
      history.push('/');
    }
    return Promise.reject(error);
  }
};

export const getAccessToken = async (code: string | undefined) => {
  await axios
    .post(apiOauthUrl, {
      code,
    })
    .then((res: { data: IAuthenticateRes; status: number }) => {
      if (res.status === 201 && res?.data) {
        save(
          LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
          res?.data?.access_token,
          ''
        );
        save(
          LOCAL_STORAGE_KEYS.EXPIRED_TIME,
          res?.data?.expires_in,
          ''
        );
        save(
          LOCAL_STORAGE_KEYS.REFRESH_TOKEN,
          res?.data?.refresh_token,
          ''
        );
        save(
          LOCAL_STORAGE_KEYS.TOKEN_TYPE,
          res?.data?.token_type,
          'Bearer'
        );
      }
    })
    .catch(() => {
      history.push('/');
    });
};

export const getRefreshToken = async (refreshToken: string) => {
  await axios
    .post(apiRefreshTokenUrl, {
      refreshToken,
    })
    .then((res: { data: IRefreshTokenRes; status: number }) => {
      if (res.status === 201 && res?.data) {
        save(
          LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
          res?.data?.access_token,
          ''
        );
        save(
          LOCAL_STORAGE_KEYS.EXPIRED_TIME,
          res?.data?.expires_in,
          ''
        );
        save(
          LOCAL_STORAGE_KEYS.REFRESH_TOKEN,
          res?.data?.refresh_token,
          ''
        );
        save(
          LOCAL_STORAGE_KEYS.TOKEN_TYPE,
          res?.data?.token_type,
          'Bearer'
        );
      }
    })
    .catch(() => {
      logout();
      history.push('/');
    });
};
