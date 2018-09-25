import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import app from './modules/app.js'
import user from './modules/user.js'
import permission from './modules/permission'
Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		app,
		user,
		permission
	},
	getters,
	state: {
		dialogVisible: false
	},
	mutations: {
		OPENLOGINDIALOG(state){
			state.dialogVisible = true
		},
		CLOSELOGINDIALOG(state){
			state.dialogVisible = false
		}
	},
	actions: {
		openLoginDialog({commit}){
			commit("OPENLOGINDIALOG")
		},
		closeLoginDialog({commit}){
			commit("CLOSELOGINDIALOG");
		}
	}

})

export default store