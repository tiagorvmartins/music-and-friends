<template>
  <div class="NotFound">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card height="400" color="transparent" flat>
            <div class="display-4 mt-5">404</div>
            <hr width="64" color="#1976d2">
            <div class="grey--text lighten-5 mt-5">
              A página que estás a tentar aceder não existe na realidade, ou foi migrada para um universo paralelo.
            </div>
            <v-btn class="mt-16" to="/" color="primary">HOME</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  .paragraph-text {
    font-size: 18px;
  }
</style>