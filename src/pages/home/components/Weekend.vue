<template>
  <div>
		<div class="title">周末去哪</div>
		<ul>
			<li 
				class="item border-bottom" 
				v-for="item of recommendList" 
				:key="item.id"
			>
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" class="item-img" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
  </div>
</template>

<script>

export default {
	name: 'HomeWeekend',
	data () {
		return {
			recommendList: 
			[
				{
					id: '0001',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
					title: 'titl;e',
					desc: 'sdhjkasjhjasdfjljkldjld'
				}, {
					id: '0002',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
					title: 'titl;e',
					desc: 'sdhjkasjhjasdfjljkldjld'
				}, {
					id: '0003',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
					title: 'titl;e',
					desc: 'sdhjkasjhjasdfjljkldjld'
				}
			]
		}
	}

}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.9%
		.item-img
			width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()
</style>