/*
* @Author: Star
* @Date:   2018-07-27 22:46:16
* @Last Modified by:   Star
* @Last Modified time: 2018-07-27 23:48:21
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
	state, 
	// actions: {
	// 	changeCity (ctx, city) {
	// 		ctx.commit('changeCity', city)
	// 	}
	// },
	mutations
})
