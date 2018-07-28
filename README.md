[TOC]

# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 项目目录说明
+ bulid 项目打包的webpack生成的文件
    + 
+ config 项目的配置文件
    + dev.env.js 开发的配置信息
    + index.js 基础的配置信息
    + prod.env.js 线上的配置信息
+ node_modules
    + node的资源包
+ src 项目的源代码
    + assets
        + 图片
    + components
    + router
        + index.js 路由
    + App.vue 项目入口文件
    + main.js 
+ static
    + 静态资源
+ .babelrc 语法解析器 转换语法
+ .editorconfig 编辑器的语法
+ .eslintignore 里面的文件不会被语法检查
+ .eslinttrc.js 语法规范 
+ .gitignore 里面所配置的文件不上传到仓库
+ .postcssrc.js  postcss配置项
+ index.html 首页的模板文件
+ LICENSE 开原协议的说明
+ package的锁文件，确定安装第三方插件的版本
+ package.json 开发项目的依赖包
+ README.md 项目说明文件


## 多页应用 VS 单页应用


| 名称       |  方法                 |    优点            |  缺点              |
| :--------:|  --------------------| :--------:         | :--------:        | 
|   多页应用 |  页面跳转 -> 返回HTML |首屏时间快，SEO效果好 | 页面吗切换慢        |
|   单页应用 |  页面跳转 -> JS渲染   | 页面切换快           | 首屏时间稍慢，SEO差 |


## 项目的编写前准备
#### 引入reset.css
> 重置样式
#### 引入border.css
> 解决一像素边框问题
#### npm install fastclick --save
> 在main.js文件里引入 fastclick
> import fastClick from 'fastclick'
> fastClick.attach(doucment.body)
> 解决手机端300ms点击延迟问题
#### 安装stylus
> npm install stylus --save
> npm install stylus-loader --save

## Header的开发


## 首页轮播
+ 安装轮播插件
    + 创建并切换分支 git checkout -b index-swiper
    + Vue-Awesome-Swiper 轮播图插件
    + 安装指定的版本，新版本有bug
    + npm install vue-awesome-swiper@2.6.7 --save
+ 引入文件
    + 在认可文件main.js里面引入文件
    + import VueAwesomeSwiper from 'vue-awesome-swiper'
    + import 'swiper/dist/css/swiper.css'
    + Vue.use(VueAwesomeSwiper)

## 用ajax获取数据
> ###### ajax的使用 ######
> 
> 安装 axios npm install axios --save
> 
> 引入axios import axios from 'axios'
> 
> 使用axios
```
<script>
methods: {
    getHomeInfo () {
        axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
        // console.log(res);
        res = res.data
        // 如果有数据且数据不为空的时候
        if (res.ret && res.data) {
            const data = res.data
            this.city = data.city
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
        }
    }
}
</script>

```

> 编译路径的设置：开发环境的转发 [webpack-dev-server提供的]
> 
> 在开发环境里 Vue的脚手架工具将 api 替换成 '/static/mock' 
> 
> axios.get('/api/index.json').then(this.getHomeInfoSucc)

```
proxyTable: {
    '/api': {
        target: 'http://localhosT:8080 ',
        pathRewrite: {
            '^/api': '/static/mock' 
        }
    }
},
```

> ###### 禁止 Icon.vue 图标自动轮播，设置自动轮播为false ######
> 
> Icon.vue
```
<swiper :options="swiperOption">

<script>
data () {
    return {
        // 禁止iconList自动滚动
        swiperOption: {
            autoplay: false
        }
    }
},
</script>
 
```

> ###### 问题：刷新页面是轮播图无法显示第一页
> 
> 解决方法
```
<swiper :options="swiperOption" v-if="showSwiper">
<!-- 计算属性：计算list数组长度，刚开始没有加载数据所以数组长度为0，v-if为false页面不显示 -->
<script>
    computed: {
        showSwiper () {
            return this.list.length
        }
    }
</script>
```


## 城市选择页面路由配置
> 页面跳转 `<router-link to="/city>`

```
<router-link to="/city">
    <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
    </div>
</router-link>
```

## better-scroll 的使用以及字母表布局
> 
> [better-scroll-npm详解](https://www.npmjs.com/package/better-scroll)
> 
> 安装 better-scroll `npm install better-scroll --save`
> 
> 规范代码为better-scroll规定的结构
```
<div class="wrapper">
  <ul class="content">
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- you can put some other DOMs here, it won't affect the scrolling -->
</div>
```
> 
> 设置dom节点 `<div class="list" ref="wrapper">`
> 
> 
> 引入better-scroll并使用better-scroll
> 
```
<script>
import BsCroll from 'better-scroll'
export default {
    name: 'CityList',
    mounted () {
        this.scroll = new BsCroll(this.$refs.wrapper)
    }
}
</script>

```

## 页面的动态数据渲染[ajax]
> 使用ajax动态获取数据 
> 

> 引入axios `import axios from 'axios'`
> 
> 使用axios
```
data () {
    return {
        cities: {},
        hotCities: []
    }
},
// 调用方法
methods: {
    getCityInfo () {
        // 发送ajax请求
        axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
            const data = res.data
            this.cities = data.cities
            this.hotCities = data.hotCities
        }
    }
},
// 生命周期函数
mounted () {
    // 方法的调用
    this.getCityInfo()
}
```
> 父组件[City.vue]向子组件[List.vue]传递数据 `<city-list :cities="cities" :host="hostCities"></city-list>` 
> 
> 
> 子组件[List.vue]接收数据: 先定义接收数据的类型
```
props: {
    hot: Array,
    cities: Object
}
```
> 
> 循环绑定数据
```
<div class="area">
    <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
            <div 
                class="button-wrapper" 
                v-for="item of hot" 
                :key="item.id"
            >
                <div class="button">
                    {{item.name}}
                </div>
            </div>
    </div>
</div>
```

## 兄弟组件之间的联动
> 
> 
> =============================================
> 
> 
 


## 使用vuex实现数据共享
> 安装vuex `npm install vuex --save`
> 
> 使用Vuex `import Vuex from 'vuex'`
> 
> 新建src/store/index.js
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '北京'
    }
})
```
> main.js引入index.js `import store from './store'`
> 
> 使用Vuex 
> 
> ====================================================

## Vuex的高级使用及localStorage
> index.js文件
> 
```
export default new Vuex.Store({
    state: {
        city: localStorage.city || '南京'
    },
    mutations: {
        changeCity (state, city) {
            state.city = city
            localStorage.city = city
        }
    }
})
```

> ============================================================
> 
> 使用try catch方法来解决一些浏览器上本地存储存在的一些问题
```
let defaultCity = "上海"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
    
} catch (e) {}

export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    // actions: {
    //  changeCity (ctx, city) {
    //      ctx.commit('changeCity', city)
    //  }
    // },
    mutations: {
        changeCity (state, city) {
            state.city = city
            try {
                localStorage.city = city
            } catch (e) {}
        }
    }
})
```

> vuex mapState属性
> 
> header.vue
```
<script>
import { mapState } from 'vuex' 
export default {
    name: 'HomeHeader',
    // 计算属性
    computed: {
        ...mapState(['city'])
    }
}
</script>

```


> mapState方法 使数据绑定更方便简单`{{this.$store.state.city}}` ====> `{{this.city}}`
```
<router-link to="/city">
    <div class="header-right">
        //{{this.$store.state.city}} ======> 
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
    </div>
</router-link>
```

## 第九章 详情页动态路由及banner布局

## Header渐隐渐现的效果