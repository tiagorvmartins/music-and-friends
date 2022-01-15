<template>
<div>
  <v-app>
    <v-app-bar height="80" style="background-color:grey;" app clipped-left>
      <v-row align="center" class="pa-3">
        <v-col cols="12" sm="4" md="3" lg="2">
          <div style="display:flex;justify-content:center;">
            <v-img max-width="64" max-height="64" :src="require('../assets/profile_icon.png')"></v-img>
            <v-spacer v-if="!$vuetify.breakpoint.xsOnly"></v-spacer>
            <div :class="$vuetify.breakpoint.xsOnly ? 'ml-6': ''" style="display:flex; flex-direction:column;justify-content:center;">
              <div>OLÁ, ÉRICO!</div>
              <div>NIF XXXXXXXXXX</div>
            </div>
            
            <v-spacer></v-spacer>
            <div style="display:flex; flex-direction:column;justify-content:center;">
            <v-icon  v-if="$vuetify.breakpoint.xsOnly" color="white" x-large @click="drawer = !drawer">
                    mdi-menu
            </v-icon>
            </div>
            
          </div>
         
          
        </v-col>
        <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>        
        <v-col v-if="!$vuetify.breakpoint.xsOnly" cols="12" sm="8" md="8" lg="10">
          <div style="display:flex;align-items:center;justify-content:flex-end;">
          <router-link to="/" class="mx-2" style="text-decoration:none;color:black;font-weight:bold;">ASSISTIR AULAS</router-link>    
          <router-link to="/" class="mx-2" style="text-decoration:none;color:black;font-weight:bold;">MEUS PLANOS</router-link>          
          <router-link to="/" class="mx-2" style="text-decoration:none;color:black;font-weight:bold;">COMO ESTUDAR NA PLATAFORMA</router-link>
          <v-img class="mx-2" max-width="32" max-height="32" :src="require('../assets/profile_icon_small.png')"></v-img>          
          <v-img class="mx-2" max-width="32" max-height="32" :src="require('../assets/logout.png')"></v-img>
          </div>
        </v-col>
      </v-row>
      
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"          
      temporary
      fixed
      right
      v-if="$vuetify.breakpoint.xsOnly"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Cursos
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="green--text text--accent-4"
        >
          <v-list-item to="/add-product">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Assistir Aulas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/manage-products">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Meus planos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/manage-orders">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Como estudar na plataforma</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="mt-16"></v-divider>

          <v-list-item  to="/login">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Perfil do Aluno</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item  to="/login">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    

         
      <v-navigation-drawer 
        :width="$vuetify.breakpoint.mdAndUp ? 256 : 56"
        expand-on-hover
        clipped
        app
        permanent        
        persistent        
      >        
        <v-list
          nav
          dense
        >
        <v-list-item-group
              v-model="selectedItem"
              mandatory
              color="primary"
            >
          <v-list-item link to="/courses">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Plano de Estudos</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/materials">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Materiais</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/videos"> 
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Videoaulas</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/live">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ao vivo</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/rankin">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ranking</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/questions">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tira-dúvidas</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item link to="/profile">
            <v-list-item-icon>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Perfil do Aluno</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
  </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({      
      drawer: false,
      group: null,
      selectedItem: 1,
      items: [
        { text: 'Aulas', icon: 'mdi-clock' },
        { text: 'Vídeos', icon: 'mdi-account' },
        { text: 'Tutoriais', icon: 'mdi-flag' },
      ],      
    }),
  }
</script>

<style>
body {
  margin: 0;
}
.v-navigation-drawer__border {    
    width: 0px !important;
}
</style>