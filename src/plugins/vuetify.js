// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const opts = {theme: {
    themes: {
      light: {
        mywhite: '#FFFFFF',
        mygrey: '#E8E8E8',
        primary: '#1376B8',
        secondary: '#202325',
        third: '#F09F25',
        accent: '#3AE3D6',
        error: '#f44336',
        info: '#F09F25',
        success: '#7a904a',
        warning: '#f78012',
      }
    },
  },};

export default new Vuetify(opts)
