import HttpRequest from '@/plugins/axios';
import router from '@/router';
import { AxiosError } from 'axios';
import pinia from '@/stores/index';
import { useAlertsStore } from '@/stores/useAlertsStore';
const alert = useAlertsStore(pinia);
/**
 *  為什麽我們要對axios進行封裝？
 * 1.外部依賴庫，有停止維護的風險，將項目中使用的方法邏輯封裝到一個文件/文件夾中同意導出，方便更換庫，有利於維護
 * 2.封裝起來符合高內聚低耦合的思想
 */

/**
 * 這里值得特別注意的一點：如何做到支持傳入請求/響應攔截器
 * 思路：要想在創建實例的時候能傳入（請求/響應）攔截器，需要修改傳入配置對象options: AxiosRequestConfig的類型，讀源碼可知AxiosRequestConfig類型定義中並不包括攔截器選項，因此如果要傳入攔截器配置，需要擴展AxiosRequestConfig類型，這里我定義了一個 HRequestConfig接口來繼承AxiosRequestConfig接口，實現對AxiosRequestConfig的擴展。
 *  當然要傳入攔截器配置，首先要定義攔截器的類型，我們可以定義一個InterceptorHooks接口，包含了4個攔截器方法，都為可選項（不是每次請求都要傳入攔截器，如果不設置為可選，則必須要傳）
 * ，原有的需要在 HRequest類中聲明一個承載interceptor的屬性
 */

/**
 * 一般情況下，只需創建一個實例
 * 什麽時候需要創建多個實例？
 * 比如baseURL不同，且在這個baseURL下請求多次，這個時候創建一個公用的請求實例能夠提升代碼的可維護性
 */

const httpRequest = new HttpRequest({
  baseURL: '/',
  timeout: 10 * 1000,
  checkResultCode: true,
  interceptorHooks: {
    requestInterceptor: (config) => {
      // const token = localCache.getCache('token');
      // console.log('config', config);
      //
      // if (config !== undefined && token) {
      //     config!.headers!.Authorization = `Bearer ${token}`;
      //     config!.headers!.post['Content-Type'] = 'application/json;charset=UTF-8'
      // }

      if (config.checkLoginState) {
        if (localStorage.getItem('user')) {
          return config;
        } else if (config.needJumpToLogin) {
          router.push({
            path: '/loginPage',
          });
          alert.showMessage({ content: '請登入' });
          throw new AxiosError('請登入');
        }
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log('RequestError', err.toString());
      alert.hideMessage();
      return err;
    },
    responseInterceptor: (response) => {
      //優先執行自己的請求響應攔截器，在執行通用請求 request 的
      alert.hideMessage();
      if (response.status === 200) {
        // @ts-ignore
        const checkResultCode = response.config.checkResultCode;
        if (checkResultCode && response.data.errorCode && response.data.errorCode != 0) {
          alert.showMessage({ content: response.data.errorMsg });
          return Promise.reject(response);
        }
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response);
      }
    },
    responseInterceptorCatch: (error) => {
      alert.hideMessage();
      console.log('ResponseError', error.toString());
      errorHandler(error);
      return Promise.reject(error);
    },
  },
});

export function errorHandler(error: any) {
  if (error instanceof AxiosError) {
    alert.showMessage({ content: error.message });
  } else if (error != undefined && error.response != undefined && error.response.status) {
    switch (error.response.status) {
      // 401: 未登入
      // 未登錄則跳轉登錄頁面，並攜帶當前頁面的路徑
      // 在登錄成功後返回當前頁面，這一步需要在登錄頁操作。
      case 401:
        break;
      // 403 token過期
      // 登錄過期對用戶進行提示
      // 清除本地token和清空vuex中token對象
      // 跳轉登錄頁面
      case 403:
        alert.showMessage({ content: '登入過期，請重新登入' });

        // 清除token
        localStorage.removeItem('token');

        break;
      // 404請求不存在
      case 404:
        alert.showMessage({ content: '網路請求不存在' });
        break;

      // 其他錯誤，直接抛出錯提示
      default:
        alert.showMessage({ content: error.response.data.message });
    }
  }
}

export default httpRequest;
