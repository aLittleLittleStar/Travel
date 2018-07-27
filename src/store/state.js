/*
* @Author: Star
* @Date:   2018-07-27 23:44:50
* @Last Modified by:   Star
* @Last Modified time: 2018-07-27 23:48:32
*/
let defaultCity = "上海"
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
	
} catch (e) {}

export default {
		city: defaultCity
}