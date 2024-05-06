export interface Props {
  headers?: Array<T>;
  items?: Array<T>;
  itemValue?: string;
  defaultExpanded?: string[];
  showExpand?: boolean;
  itemsLength?: number;
  itemsPerPage?: number;
}

export const propsBase = {
  headers: [],
  items: [],
  itemValue: '',
  defaultExpanded: [],
  showExpand: false,
  itemsLength: 0,
  itemsPerPage: 10,
};
