import { defineStore } from 'pinia'
import httpRequest from '@/plugins/request'
import { dfs } from '@/utils/dfs'
import { searchParams } from '@/utils/url-util'
import { deepClone } from '@/utils/deepClone'
export const usePermissionStore = defineStore('permission', {
  state: () => ({
    requestId: 0,
    userStyle: {},
    breadscrumbs: {},
  }),
  getters: {},
  actions: {
    async doLogout() {},
    doKeepSessionAlive() {},
  },
})
