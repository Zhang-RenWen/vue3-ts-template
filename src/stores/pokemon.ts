import { defineStore } from 'pinia';
import httpRequest from '@/plugins/request';
import { Pokemon } from '@/model/Pokemon';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [] as Pokemon[],
    text: '',
  }),
  getters: {
    pokemonsNames: (state) => state.pokemons,
  },
  actions: {
    async getPokemons() {
      return await httpRequest
        .get({
          url: '/v2/pokemon/?offset=100&limit=100',
          // url: '/v2/pokemon',
          //   checkLoginState: true,
          //   needJumpToLogin: true,
          showLoading: true,
        })
        .then((pokemons) => {
          return (this.pokemons = pokemons.results);
        });
    },
    addItem(item: Pokemon) {
      this.pokemons.push(item);
    },
    deleteItem(item: Pokemon) {
      this.pokemons.splice(
        this.pokemons.findIndex((o: Pokemon) => o.name === item.name),
        1
      );
    },
  },
});
