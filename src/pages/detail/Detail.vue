<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			list: [{
				title: '成人票',
				children: [{
					title: '半价',
					children: [{
						title: '成人票-半价---买一送一'
					}]
				}, {
					title: '三馆联票'
				}]
				
			}, {
				title: '学生票'
			}, {
				title: '儿童票'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>