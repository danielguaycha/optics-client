import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        dark: false,
        themes: {
            light: {
                primary: '#010D26',
                secondary: '#031740',
                accent: '#45423E',
                error: '#FF1305',
                info: '#42EEFF',
                nodata: '#E8A341',
                success: '#41E84D',
                warning: '#FFF755',
                blue_grey: '#607d8b',
                bg:'#FAF0E8',
                bg_sidebar:'#310154',
                tx_sidebar_items:'#fffff',
                separator:'#8E7C9B',
                titleMenu:'#fff',
                bg_profile:'#161E2Eaa',
                'v-application': '#efefef',
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
