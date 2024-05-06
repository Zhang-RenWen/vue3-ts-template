export interface Props {
  headers?: Array<T>;
  items?: Array<T>;
  itemValue?: string;
  defaultExpanded?: string[];
  showExpand?: boolean;
}

export const propsBase = {
  headers: [],
  items: [],
  itemValue: '',
  defaultExpanded: [],
  showExpand: false,
};
