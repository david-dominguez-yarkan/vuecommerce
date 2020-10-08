<template>
  <v-app id="inspire">


<v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="mygrey"
      height="40px"
      class="mt-6 mb-2 primary--text text-h4 caption"
      
    >
        <span
          class ="pl-2"
        >
        <v-btn icon color="info">
          <v-icon>mdi-calendar</v-icon>
        </v-btn>
          Mon - Fri:9:00am - 07:00pm 
        </span>
        <span
          class ="pl-2"
        >
        <v-btn icon color="info"><v-icon>mdi-email</v-icon></v-btn>
            info@example.com
        </span>
        <v-spacer />
        <v-card-actions>
            <v-icon color="primary" small @click="loader = 'loading'">mdi-facebook</v-icon>
            <v-icon color="primary" small @click="loader = 'loading'" >mdi-instagram</v-icon>
            <v-icon color="primary" small @click="loader = 'loading'">mdi-twitter</v-icon>
            <v-icon color="primary" small @click="loader = 'loading'">mdi-whatsapp</v-icon>
        </v-card-actions>

</v-app-bar>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white pl-4 pr-4"
    >
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
      <v-toolbar-title
        style="width: 350px; margin: 100px"
      >      
        <a href="/" class="white--text" style="text-decoration: none">
        <!--Logo -->
          <v-img
            lazy-src="https://i.ibb.co/L55VkK0/bisnes.png"
            max-height="150"
            max-width="250"
            src="https://i.ibb.co/L55VkK0/bisnes.png"
          ></v-img>
        </a>
      </v-toolbar-title>
      <v-text-field
        color ="info"
        outlined
        solo
        dense
        clearable
        hide-details
        filled
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn v-on="on" href="/cart" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" icon>
          <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-content >
      <v-bottom-navigation
        :value="activeBtn"
        background-color="primary"
        horizontal
        dark
        class="pa-md-4 mx-lg-auto pt-6 mb-4 "
      >
        <a href="/" class="v-btn">
          <span class="subheading white--text mr-2">About us</span>
          <v-icon>mdi-domain</v-icon>
        </a>
        <v-menu open-on-hover offset-y class='headline'>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <v-icon>mdi-headset</v-icon>
              <span class="subheading white--text mr-2">Categories</span>
            </v-btn>
          </template>
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >

            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click=""
              href="/shop"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

          </v-card>
        </v-menu>
        <a href="/blog" class="v-btn">
          <span class="subheading white--text mr-2">Blog</span>
          <v-icon>mdi-file</v-icon>
        </a>
        <v-btn href="/blog">
        <v-icon>mdi-email</v-icon>
          <span class="subheading white--text mr-2">Contact Us </span>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
      <router-view/>
    <v-footer
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >
        <v-card-text>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
           <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>

        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>ShipIT</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
    export default {
        data () {
            return {
                items: [
                    { title: 'T-Shirts' },
                    { title: 'Jackets' },
                    { title: 'Shirts' },
                    { title: 'Jeans' },
                    { title: 'Shoes' },
                ],
                activeBtn: 1,
            }
        },
    }
</script>
