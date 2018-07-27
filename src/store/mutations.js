/*
* @Author: Star
* @Date:   2018-07-27 23:46:37
* @Last Modified by:   Star
* @Last Modified time: 2018-07-27 23:47:39
*/
export default {
	changeCity (state, city) {
		state.city = city
		try {
			localStorage.city = city
		} catch (e) {}
	}
}