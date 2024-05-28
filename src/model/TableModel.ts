export interface SortByOptions {
  key: string
  order?: string
}

export interface Props {
  headers?: Array<T>
  items?: Array<T>
  itemValue?: string
  defaultExpanded?: string[]
  showExpand?: boolean
  itemsLength?: number
  itemsPerPage?: number
  sortBy?: Array<SortByOptions>
}

export const propsBase = {
  headers: [],
  items: [],
  itemValue: '',
  defaultExpanded: [],
  showExpand: false,
  itemsLength: 0,
  itemsPerPage: 10,
}
