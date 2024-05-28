import router from '@/router'
import { AxiosError } from 'axios'
import pinia from '@/stores/index'
import { useAlertsStore } from '@/stores/useAlertsStore'
const alert = useAlertsStore(pinia)

export function requestInterceptor(config: any) {
  // const token = localCache.getCache('token');
  // console.log('config', config);
  //
  // if (config !== undefined && token) {
  //     config!.headers!.Authorization = `Bearer ${token}`;
  //     config!.headers!.post['Content-Type'] = 'application/json;charset=UTF-8'
  // }

  if (config.checkLoginState) {
    if (localStorage.getItem('user')) {
      return config
    } else if (config.needJumpToLogin) {
      router.push({
        path: '/loginPage',
      })
      alert.showMessage({ content: '請登入' })
      throw new AxiosError('請登入')
    }
  }
  return config
}

export function requestInterceptorCatch(err: any) {
  console.log('RequestError', err.toString())
  alert.hideMessage()
  return err
}

export function responseInterceptor(response: any) {
  //優先執行自己的請求響應攔截器，在執行通用請求 request 的
  alert.hideMessage()
  if (response.status === 200) {
    // @ts-ignore
    const checkResultCode = response.config.checkResultCode
    if (checkResultCode && response.data.errorCode && response.data.errorCode != 0) {
      alert.showMessage({ content: response.data.errorMsg })
      return Promise.reject(response)
    }
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}

export function responseInterceptorCatch(error: any) {
  alert.hideMessage()
  console.log('ResponseError', error.toString())
  errorHandler(error)
  return Promise.reject(error)
}

export function errorHandler(error: any) {
  if (error instanceof AxiosError) {
    alert.showMessage({ content: error.message })
  } else if (error != undefined && error.response != undefined && error.response.status) {
    switch (error.response.status) {
      // 401: 未登入
      // 未登錄則跳轉登錄頁面，並攜帶當前頁面的路徑
      // 在登錄成功後返回當前頁面，這一步需要在登錄頁操作。
      case 401:
        break
      // 403 token過期
      // 登錄過期對用戶進行提示
      // 清除本地token和清空vuex中token對象
      // 跳轉登錄頁面
      case 403:
        alert.showMessage({ content: '登入過期，請重新登入' })

        // 清除token
        localStorage.removeItem('token')

        break
      // 404請求不存在
      case 404:
        alert.showMessage({ content: '網路請求不存在' })
        break

      // 其他錯誤，直接抛出錯提示
      default:
        alert.showMessage({ content: error.response.data.message })
    }
  }
}
