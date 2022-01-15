<template>
  <v-container>
    <v-row no-gutters style="border-bottom: 5px solid #1976d2">
      <h1>Selecione o plano de estudo</h1>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="12" md="4" v-for="item in classes" :key="item.title">
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
  </v-container>
</template>

<script>
  export default {
    data: () => ({            
      classes: [
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