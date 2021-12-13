import Vue from "vue";
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
export default new Vuetify({ 
                            
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        
      },
      dark: {
        primary: colors.blue.lighten3,
        background:colors.indigo.darken4
      },
    },
  },
icons: {
  iconfont: 'md', // default is 'mdi'
} })
