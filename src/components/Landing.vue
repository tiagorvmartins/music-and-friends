<template>
  <v-app>
    <header style="border-bottom: 3px solid #ffca28">
      <div
        class="wrapper"
        style="
          height: 150px;
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          padding: 0 1.5rem;
        "
      >
        <v-row no-gutters align="center" justify="center">
          <v-col cols="3" sm="4" md="2" lg="2">
            <v-btn
              v-if="$vuetify.breakpoint.xsOnly"
              icon
              
              class="custom-btn"
              to="#"
              ><v-icon x-large>mdi-menu</v-icon></v-btn
            >
            <v-btn v-else icon x-large class="custom-btn" to="#"
              ><v-icon>mdi-menu</v-icon>MENU</v-btn
            >
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" md="4" lg="3">
            <router-link class="menu-header-link" to="#">COURSES</router-link>
            <router-link class="menu-header-link" to="#"
              >LEARNING PATHS</router-link
            >
          </v-col>

          <v-col cols="3" sm="3" md="2" lg="1" align="center">
            <v-avatar :size="$vuetify.breakpoint.xsOnly ? '56' : '96'">
              <v-img :src="require('../assets/logo_main.png')"></v-img>
            </v-avatar>
          </v-col>

          <v-col
            cols="6"
            sm="5"
            md="4"
            lg="6"
            align="flex-end"
            style="text-align: right"
          >
            <router-link
              v-if="!$vuetify.breakpoint.xsOnly"
              class="menu-header-link"
              to="#"
              >LOGIN</router-link
            >
            <v-btn class="custom-btn" tile depressed outlined to="#"
              >FREE TRIAL</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </header>
    <div class="wrapper" style="border-bottom: 3px solid #ffca28">
      <div
        class="wrapper"
        style="max-width: 1240px; margin: 0 auto; display: flex"
      >
        <v-row no-gutters align="center" justify="center" class="mt-6 mb-6">
          <h2>
            Mais de 10 horas de cursos passo a passo de artistas nacionais.
          </h2>
          <p style="color: grey">
            Sendo um artista experience, um pro seasonal ou mesmo estando a
            começar, tu saberás sempre o que melhorar graças à nossa extensa
            biblioteca de cursos.
          </p>
        </v-row>
      </div>
      <div
        class="wrapper"
        style="
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <v-row
          no-gutters
          align="center"
          justify="center"
          style="
            border-bottom: 3px solid #ffca28;
            padding-bottom: 5px;
            margin-bottom: 5px;
          "
        >
          <router-link class="menu-header-link" to=""
            >CURSOS DE INICIANTES</router-link
          >
        </v-row>
        <v-row class="mt-0 mb-16">
          <v-col
            cols="12"
            sm="12"
            md="4"
            v-for="item in courses"
            :key="item.title"
            class=""
          >
            <v-card>
              <v-img :src="item.image" height="200px"></v-img>

              <v-card-title>
                {{ item.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ item.subtitle }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="#FFCA28" text> Explorar </v-btn>

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

    <div class="wrapper" style="border-bottom: 3px solid #ffca28">
      <div
        class="wrapper"
        style="max-width: 1240px; margin: 0 auto; display: flex"
      >
        <v-row no-gutters align="center" justify="center" class="mt-6 mb-6">
          <h2>
            Aprende connosco, não te arrependerás e mesmo que aconteça temos
            política de reembolso.
          </h2>
          <p style="color: grey">
            Somos apenas alguns dos incríveis talentos nacionais que terás
            acesso quanto te juntares.
          </p>
        </v-row>
      </div>
      <div
        class="wrapper"
        style="
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        "
      >
        <v-row no-gutters class="mt-0 mb-16">
          <v-dialog v-if="tutor" v-model="dialog">
            <v-card
            dark
            :height="!$vuetify.breakpoint.xsOnly ? '50vh':''"
            style="position:relative"
            >
            <v-btn class="custom-btn" @click="dialog = false" icon style="position:absolute;right:0;top:0;"><v-icon large>mdi-close</v-icon></v-btn>
            <v-row no-gutters :style="!$vuetify.breakpoint.xsOnly ? 'height:50vh;padding-top:50px;padding-bottom:50px;':''">
              
              <v-col cols="12" sm="7" style="height:100%;max-height:100%;">
                <v-card-title
                  class="text-h5"
                  v-text="tutor.name"
                ></v-card-title>

                <v-card-subtitle class="mt-6 mb-6" v-html="tutor.description"></v-card-subtitle>

                
              </v-col>
                <v-col cols="12" sm="5" style="height:100%;max-height:100%;">
              
                <v-img :src="tutor.image" style="height:100%;max-height:100%;"></v-img>
              </v-col>
            </v-row>
          </v-card>
          </v-dialog>
          <v-col
            cols="12"
            sm="12"
            md="3"
            v-for="tutor in tutors"
            :key="tutor.name"
            class=""
          >
            <v-hover v-slot="{ hover }">
              <v-card
                style="position: relative"
                :elevation="hover ? 24 : 0"
                class="tutor-card"
              >
                <v-img
                  @click="dialog = true; tutorSelected = tutor.name"
                  class="tutor-image"
                  :class="{ 'on-hover': hover }"
                  :src="tutor.image"
                  aspect-ratio="1"
                >
                  <div style="z-index: 20" class="fill-height gradient" />
                </v-img>
                <span class="tutor-name">
                  {{ tutor.name }}
                </span>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  computed: {
    tutor() {
      return this.tutors.find((p) => p.name === this.tutorSelected);
    },
  },
  data: () => ({
    dialog: false,
    tutorSelected: null,
    courses: [
      {
        image:
          "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "A clássica guitarra",
        subtitle: "Os 101 acordes essenciais",
        additional:
          "Eu sou um texto adicional muito longo que posso adicionar aqui, só porque sim... Poderia continuar a escrever imensas coisas, e vou continuar, é só para encher e mostrar como iria ser apresentado.",
        show: false,
      },
      {
        image:
          "https://media.istockphoto.com/photos/closeup-photo-of-bass-guitar-player-picture-id651209608?k=20&m=651209608&s=612x612&w=0&h=AiB7XH40Akl40uf8alG9Imq4CQA-4wGAx8mvd4TOAKM=",
        title: "Baixo",
        subtitle: "O bass poderoso",
        additional:
          "Eu sou um texto adicional muito longo que posso adicionar aqui, só porque sim... Poderia continuar a escrever imensas coisas, e vou continuar, é só para encher e mostrar como iria ser apresentado.",
        show: false,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy3ORLh7h-wTPpWCpuJ8z8cJhrIzvQVAbyg&usqp=CAU",
        title: "Saxofone",
        subtitle: "Aquele sax",
        additional:
          "Eu sou um texto adicional muito longo que posso adicionar aqui, só porque sim... Poderia continuar a escrever imensas coisas, e vou continuar, é só para encher e mostrar como iria ser apresentado.",
        show: false,
      },
    ],
    tutors: [
      {
        name: "Érico Reis",
        description:
          "Combining a unique three-finger picking style with his effortlessly light touch, Gary brings a supreme level of both groove and musicality to all that he plays. Perhaps best known as co-founder of jazz fusion outfit Tribal Tech, Gary Willis has arguably done more to refine and advance the language and technique of modern bass playing than any other bassist playing today. <br/><br/>His involvement in the educational side of music has also been a long-standing one, having written several books including Fingerboard Harmony For Bass, Ultimate Ear Training For Guitar And Bass and 101 Bass Tips – he also teaches at the prestigious Escola Superior de Música de Catalunya music conservatory near his home in Spain, where he’s been resident since 2004.",
        image:
          "https://static8.depositphotos.com/1035121/1054/i/950/depositphotos_10547147-stock-photo-guitar-player-playing-his-guitar.jpg",
      },
      {
        name: "Pedro Mocho",
        description:
          "Combining a unique three-finger picking style with his effortlessly light touch, Gary brings a supreme level of both groove and musicality to all that he plays. Perhaps best known as co-founder of jazz fusion outfit Tribal Tech, Gary Willis has arguably done more to refine and advance the language and technique of modern bass playing than any other bassist playing today. <br/><br/> His involvement in the educational side of music has also been a long-standing one, having written several books including Fingerboard Harmony For Bass, Ultimate Ear Training For Guitar And Bass and 101 Bass Tips – he also teaches at the prestigious Escola Superior de Música de Catalunya music conservatory near his home in Spain, where he’s been resident since 2004.",
        image:
          "https://st.depositphotos.com/1770836/1476/i/950/depositphotos_14761957-stock-photo-guitar-player.jpg",
      },
      {
        name: "Joaquim Inácio",
        description:
          "Combining a unique three-finger picking style with his effortlessly light touch, Gary brings a supreme level of both groove and musicality to all that he plays. Perhaps best known as co-founder of jazz fusion outfit Tribal Tech, Gary Willis has arguably done more to refine and advance the language and technique of modern bass playing than any other bassist playing today. <br/><br/> His involvement in the educational side of music has also been a long-standing one, having written several books including Fingerboard Harmony For Bass, Ultimate Ear Training For Guitar And Bass and 101 Bass Tips – he also teaches at the prestigious Escola Superior de Música de Catalunya music conservatory near his home in Spain, where he’s been resident since 2004.",
        image:
          "https://static8.depositphotos.com/1035121/1054/i/950/depositphotos_10547147-stock-photo-guitar-player-playing-his-guitar.jpg",
      },
      {
        name: "Maurício Flores",
        description:
          "Combining a unique three-finger picking style with his effortlessly light touch, Gary brings a supreme level of both groove and musicality to all that he plays. Perhaps best known as co-founder of jazz fusion outfit Tribal Tech, Gary Willis has arguably done more to refine and advance the language and technique of modern bass playing than any other bassist playing today. <br/><br/> His involvement in the educational side of music has also been a long-standing one, having written several books including Fingerboard Harmony For Bass, Ultimate Ear Training For Guitar And Bass and 101 Bass Tips – he also teaches at the prestigious Escola Superior de Música de Catalunya music conservatory near his home in Spain, where he’s been resident since 2004.",
        image:
          "https://st.depositphotos.com/1770836/1476/i/950/depositphotos_14761957-stock-photo-guitar-player.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
.custom-btn {
  margin-left: 15px;
  color: white;
}

.custom-btn:hover {
  color: #ffca28;
  font-weight: bold;
}

.menu-header-link {
  color: white;
  padding: 0.5rem;
  text-decoration: none;
}

.menu-header-link:hover {
  color: #ffca28;
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

.tutor-image {
  filter: grayscale(100%) brightness(0.7);
  background: linear-gradient(
    45deg,
    rgba(252, 82, 68, 0.7) 0,
    rgba(252, 82, 68, 0) 100%
  );
}

.tutor-name {
  color: #ffca28;
  display: block;
  position: absolute;
  z-index: 4;
  bottom: 2rem;
  left: 2rem;
  line-height: 1;
  overflow: hidden;
  padding-right: 5rem;
}

.tutor-card:hover .tutor-name {
  transform: scale(1.5);
  left: 4rem;
  z-index: 12;
  font-size: 1.5rem;
  -webkit-text-stroke: 1px black; /* width and color */
}

.tutor-image {
  transition: opacity 0.4s ease-in-out;
}

.tutor-image:not(.on-hover) {
  opacity: 0.5;
}

.tutor-image:hover {
  transform: scale(1.1);
  z-index: 12;
  filter: grayscale(0) brightness(1);
}

.tutor-card:hover {
  z-index: 10;
}

.gradient {
  background: linear-gradient(
    45deg,
    rgb(255, 202, 40, 0.7) 0,
    rgba(252, 82, 68, 0) 100%
  );
  z-index: 23;
}


</style>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #000000; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(85, 84, 84); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(56, 56, 56); 
}
</style>