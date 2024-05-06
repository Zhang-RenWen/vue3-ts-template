export interface Props {
  headers?: Array<T>;
  items?: Array<T>;
  itemValue?: string;
  defaultExpanded?: string[];
}

export const propsBase = {
  headers: [],
  items: [],
  itemValue: '',
  defaultExpanded: [],
};
