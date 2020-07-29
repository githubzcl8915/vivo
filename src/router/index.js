import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/home.vue'
import Classify from '../views/classify.vue'
import News from '../views/news.vue'
import Own from '../views/own.vue'
import Ownorder from '../views/ownorder.vue'
import Collection from '../views/collection.vue'
import ProDetail from '../views/pro-detail.vue'
import ProDetails from '../views/pro-details.vue'
import ProImforma from '../views/pro-imforma.vue'
import Address from '../views/address.vue'
import AddAddress from '../views/add-address.vue'
import Carts from '../views/carts.vue'
import Account from '../views/account.vue'
import NewsDetail from '../views/news-detail.vue'
import BuySuccess from '../views/buysuccess.vue'
import ViewDetail from '../views/viewdetail.vue'
import AboutOwn from '../views/aboutown.vue'
import Member from '../views/member.vue'

export default new VueRouter({
    routes: [
        { path: '', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/classify', component: Classify },
        { path: '/news', component: News },
        { path: '/own', component: Own },
        { path: '/ownorder', component: Ownorder },
        { path: '/collection', component: Collection },
        { path: '/pro-detail', component: ProDetail },
        { path: '/pro-details', component: ProDetails },
        { path: '/pro-imforma/:id', component: ProImforma },
        { path: '/address', component: Address },
        { path: '/add-address', component: AddAddress },
        { path: '/carts', component: Carts },
        { path: '/account/:ids/:nums', component: Account },
        { path: '/news-detail', component: NewsDetail },
        { path: '/buysuccess', component: BuySuccess },
        { path: '/viewdetail/:ides', component: ViewDetail },
        { path: '/aboutown', component: AboutOwn },
        { path: '/member', component: Member },
    ]
})