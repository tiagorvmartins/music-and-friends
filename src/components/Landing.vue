<template>    
    <v-app>
        
        <header style="border-bottom:3px solid #FFCA28;">
            <div class="wrapper" style="height:150px;max-width:1240px;margin:0 auto;display:flex;padding:0 1.5rem;">
                <v-row no-gutters align="center" justify="center">
                    <v-col cols="3" sm="4" md="2" lg="2">                                    
                        <v-btn v-if="$vuetify.breakpoint.xsOnly" icon flat class="custom-btn"  to="#"><v-icon x-large>mdi-menu</v-icon></v-btn>
                        <v-btn v-else icon x-large class="custom-btn" to="#"><v-icon>mdi-menu</v-icon>MENU</v-btn>
                                                                        
                    </v-col>
                            
                    <v-col v-if="$vuetify.breakpoint.mdAndUp" md="4" lg="3">
                        <router-link class="menu-header-link" to="#">COURSES</router-link>
                        <router-link class="menu-header-link" to="#">LEARNING PATHS</router-link>                        
                    </v-col>

                    <v-col cols="3" sm="3" md="2" lg="1" align="center">
                        <v-avatar :size="$vuetify.breakpoint.xsOnly ? '56' : '96'">
                            <v-img :src="require('../assets/logo_main.png')"></v-img>                    
                        </v-avatar>
                    </v-col>

                    <v-col cols="6" sm="5" md="4" lg="6" align="flex-end" style="text-align:right;">
                        <router-link v-if="!$vuetify.breakpoint.xsOnly" class="menu-header-link"  to="#">LOGIN</router-link>
                        <v-btn class="custom-btn" tile depressed outlined  to="#">FREE TRIAL</v-btn>
                    </v-col>
                </v-row>
            </div>
        </header>
        <div class="wrapper" style="border-bottom:3px solid #FFCA28;">
            <div class="wrapper" style="max-width:1240px;margin:0 auto;display:flex;">
                <v-row no-gutters align="center" justify="center" class="mt-6 mb-6">
                    <h2>Mais de 10 horas de cursos passo a passo de artistas nacionais.</h2>
                    <p style="color:grey;">Sendo um artista experience, um pro seasonal ou mesmo estando a começar, tu saberás sempre o que melhorar graças à nossa extensa biblioteca de cursos.</p>
                </v-row>
            </div>
            <div class="wrapper" style="max-width:1240px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;">                
                <v-row no-gutters align="center" justify="center" style="border-bottom:3px solid #FFCA28;padding-bottom:5px;margin-bottom:5px;">                    
                    <router-link class="menu-header-link" to="">CURSOS DE INICIANTES</router-link>              
                </v-row>
                <v-row class="mt-0 mb-16">
                    <v-col cols="12" sm="12" md="4" v-for="item in courses" :key="item.title" class="">
                    <v-card>
                    <v-img :src="item.image" height="200px"></v-img>

                    <v-card-title>
                        {{ item.title }}
                    </v-card-title>

                    <v-card-subtitle>
                        {{ item.subtitle }}
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="#1976d2" text> Explorar </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="item.show = !item.show">
                        <v-icon>{{
                            item.show ? "mdi-chevron-up" : "mdi-chevron-down"
                        }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="item.show">
                        <v-divider></v-divider>

                        <v-card-text>
                            {{ item.additional }}
                        </v-card-text>
                        </div>
                    </v-expand-transition>
                    </v-card>
                </v-col>
                </v-row>
            </div>
            
           
        </div>
        <div style="">
            
        </div>
        
    </v-app>    
</template>

<script>
  export default {
    data: () => ({            
      courses: [
        {
          image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "A clássica guitarra",
          subtitle: "Os 101 acordes essenciais",
          additional: "Eu sou um texto adicional muito longo que posso adicionar aqui, só porque sim... Poderia continuar a escrever imensas coisas, e vou continuar, é só para encher e mostrar como iria ser apresentado.",
          show: false
        },
        {
          image: "https://media.istockphoto.com/photos/closeup-photo-of-bass-guitar-player-picture-id651209608?k=20&m=651209608&s=612x612&w=0&h=AiB7XH40Akl40uf8alG9Imq4CQA-4wGAx8mvd4TOAKM=",
          title: "Baixo",
          subtitle: "O bass poderoso",
          additional: "Eu sou um texto adicional muito longo que posso adicionar aqui, só porque sim... Poderia continuar a escrever imensas coisas, e vou continuar, é só para encher e mostrar como iria ser apresentado.",
          show: false
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy3ORLh7h-wTPpWCpuJ8z8cJhrIzvQVAbyg&usqp=CAU",
          title: "Saxofone",
          subtitle: "Aquele sax",
          additional: "Eu sou um texto adicional muito longo que posso adicionar aqui, só porque sim... Poderia continuar a escrever imensas coisas, e vou continuar, é só para encher e mostrar como iria ser apresentado.",
          show: false
        }
      ]
    }),
  }
</script>

<style scoped>
    .custom-btn {
        margin-left: 15px;
        color: white;
    }

    .custom-btn:hover {
        color: #FFCA28;
        font-weight:bold;
    }

    .menu-header-link {
        color:white;
        padding:0.5rem;
        text-decoration: none;
    }

    .menu-header-link:hover {
        color: #FFCA28;
    }

    .v-btn:before {
        opacity: 0 !important;
    }

    .v-ripple__container {
        opacity: 0 !important;
    }
    .wrapper {
        padding: 0 1.5rem;
    }
</style>