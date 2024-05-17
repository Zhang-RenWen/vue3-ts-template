import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { errorHandler } from '@/plugins/request';

/**
 * 定義接口響應包裝類型
 */
export interface BaseResponse {
  errorCode: number;
  errorMsg: string;
  //拓展xxx-API响应体
}

/**
 * 接口實現類型包裝，例如有其他業務可以再次繼承實現 xxxResponse
 */
export interface ApiResponse<T = any> extends BaseResponse {
  data: T | any;
  results: T | any;
  //拓展 xxx-API 響應體
}

/**
 * 封裝後後，不支持傳入攔截器
 * 需要自己定義接口繼承 AxiosRequestConfig 類別
 * 支持傳入攔截器，但攔截器選項應為可選属性
 * 之後請求實體傳入的 options 為繼承了 AxiosRequestConfig 的自定義類別
 */
interface InterceptorHooks {
  requestInterceptor?: (config: HttpRequestConfig) => HttpRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  responseInterceptorCatch?: (error: any) => any;
}

interface HttpRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean; //是否顯示loading
  checkResultCode?: boolean; //是否檢驗結果碼
  checkLoginState?: boolean; //驗證登入狀態
  needJumpToLogin?: boolean; //是否需要跳轉到login page
  interceptorHooks?: InterceptorHooks;
}

class HttpRequest {
  config: HttpRequestConfig;
  interceptorHooks?: InterceptorHooks;
  instance: AxiosInstance;

  constructor(options: HttpRequestConfig) {
    this.config = options;
    console.log(options);

    this.interceptorHooks = options.interceptorHooks;
    this.instance = axios.create(options);
    this.setupInterceptor();
  }

  setupInterceptor(): void {
    this.instance.interceptors.request.use(
      // res => {
      //     return Promise.resolve(res.data)
      // },
      // error => {
      //     return Promise.reject(error)
      // },
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    );
  }

  // 類別參數的作用，T決定 AxiosResponse 實體中 data 的類別
  request<T = any>(config: HttpRequestConfig): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log('request方法>>>>>>>' + err);
          errorHandler(err);
          if (err) {
            reject(err);
          }
        });
    });
  }

  // get<T>(url: string, params?: object): Promise<ApiResponse<T>> {
  //     return this.instance.get(url, {params});
  // }

  get<T = any>(config: HttpRequestConfig): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: HttpRequestConfig): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: 'POST' });
  }

  delete<T = any>(config: HttpRequestConfig): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: 'DELETE' });
  }

  patch<T = any>(config: HttpRequestConfig): Promise<ApiResponse<T>> {
    return this.request({ ...config, method: 'PATCH' });
  }
}

export default HttpRequest;
