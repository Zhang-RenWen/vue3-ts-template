export interface Props {
  totalCount?: number // 總筆數
  value?: object // 綁定資料
  itemsPerPageOptions?: string | number[] // 一頁幾筆選項
  totalVisible?: number // 最少顯示多少頁碼
}

export const propsBase = {
  totalCount: 0,
  value: {
    itemsPerPage: 10, // 一頁幾筆
    page: 1, // 當前頁數
  },
  itemsPerPageOptions: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  totalVisible: 5,
}
