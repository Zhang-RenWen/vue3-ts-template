import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {}
  },

  computed: {
    ...mapGetters('ui', ['sideMenuOpen', 'linearLoading', 'circularLoading', 'overlayLoading'])
  },

  mounted() {},
  methods: {
    ...mapActions('ui', [
      'toggleSideMenuOpen',
      'toggleLinearLoading',
      'toggleCircularLoading',
      'toggleLoading'
    ])
  }
}
