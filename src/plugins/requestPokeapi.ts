import HttpRequest from '@/plugins/axios'
import {
  requestInterceptor,
  requestInterceptorCatch,
  responseInterceptor,
  responseInterceptorCatch,
} from '@/plugins/requestSettings'
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
 * 不同資料 domain 資料源 可能會要搭配不同類型的業務邏輯錯誤處理，所以可能會有多個 HttpRequest 實體
 */

const httpRequest = new HttpRequest({
  baseURL: import.meta.env.VITE_APP_POKEAPI_URL || '/',
  timeout: 10 * 1000,
  checkResultCode: true,
  interceptorHooks: {
    requestInterceptor,
    requestInterceptorCatch,
    responseInterceptor,
    responseInterceptorCatch,
  },
})

export default httpRequest
