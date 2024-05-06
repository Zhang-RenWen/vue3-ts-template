import { defineStore } from 'pinia';
import httpRequest from '@/plugins/request';
import { Test } from '@/model/TestModel';

export const useTestStore = defineStore('test', {
  state: () => ({
    test: [] as Test[],
    text: '',
  }),
  getters: {
    testNames: (state) => state.test,
  },
  actions: {
    async getApiData() {
      return await httpRequest
        .get({
          url: '/v2/pokemon/?offset=100&limit=100',
          // url: '/v2/pokemon',
          //   checkLoginState: true,
          //   needJumpToLogin: true,
          showLoading: true,
        })
        .then((test) => {
          this.test = test.results;
          this.text = 'got API!!!!!!!';
          return this.test;
        });
    },
    setText(value: string) {
      this.text = value;
    },
    addItem(item: Test) {
      this.test.push(item);
    },
    deleteItem(item: Test) {
      this.test.splice(
        this.test.findIndex((o: Test) => o.name === item.name),
        1
      );
    },
  },
});
