<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" />
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe67e;</span>
					{{this.gallaryImgs.lenght}}
				</div>
			</div>
		</div>
		<common-gallary 
			:imgs="gallaryImgs" 
			v-show="showGallary"
			@close="handleGallaryClose"
		>			
		</common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: 'DetailBanner',
	props: {
		sightName: String,
		bannerImg: String,
		gallaryImgs: Array,
	},
	data () {
		return {
			showGallary: false,
			// imgs: [
			// 	'http://img1.qunarzz.com/sight/p0/1804/7d/7de840704389b060a3.water.jpg_r_800x800_332e3188.jpg',
			// 				'http://img1.qunarzz.com/sight/p0/1506/54/a6e8b455010369751f47c74caf0fafe5.water.jpg_r_800x800_c9be8bf1.jpg'
			// ]
		}
	},
	methods: {
		handleBannerClick () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	},
	components: {
		CommonGallary
	}
}
</script>

<style lang="stylus" scoped>
	.banner 
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				flex: 1
				font-szie: .32rem
				padding: 0 .2rem
			.banner-number
				height: .32rem
				line-height: .32rem
				margin-top: .14rem
				padding: 0 .4rem
				border-radius: .2rem
				background: rgba(0, 0, 0, .8)
				font-szie: .24rem
				.banner-icon
					font-size: .24rem
</style>