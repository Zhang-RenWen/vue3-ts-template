import Vue from 'vue'

// 共用元件
// formGrid
import FormPair from '@/components/formGrid/form/FormPair'

// Dialog
import Dialog from '@/components/dialog/Dialog'

// Table
import Table from '@/components/table'
import TableToolbar from '@/components/table/TableToolbar'
import TableFooter from '@/components/tabie/Tablefooter'
// Btn
import BasicBtn from '@/components/btn/BasicBtn'

Vue.component('FormPair', FormPair)
Vue.component('Dialog', Dialog)
Vue.component('Table', Table)
Vue.component('TableToolbar', TableToolbar)
Vue.component('BasicBtn', BasicBtn)
Vue.component('TableFooter', TableFooter)
