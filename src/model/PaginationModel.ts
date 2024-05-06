export interface Props {
  totalCount?: number;
  value?: object;
  itemsPerPage?: number;
  itemsPerPageOptions?: string | number[];
}

export const propsBase = {
  totalCount: 0,
  value: {
    page: 1,
  },
  itemsPerPage: 10,
  itemsPerPageOptions: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
};
