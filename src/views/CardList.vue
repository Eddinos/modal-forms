<template>
  <v-container fluid class="CardList ma-12">
    <v-btn color="info" text @click="openCreateForm">Add new card</v-btn>
    <v-row>
      <v-col v-for="(card, index) in cards" 
            :key="index" cols="auto">
        <v-card max-width="300">
          <v-img height="200px"
                  lazy-src="/img/lemon.jpg"
                  :src="card.img"></v-img>

          <v-card-title>{{ card.title }}</v-card-title>

          <v-card-text>{{ card.description }}</v-card-text>

          <v-card-actions>
            <v-btn color="blue"
                   text 
                   @click="() => openUpdateForm(card)" >
              Update
            </v-btn>

            <v-btn color="red" 
                  text 
                  :to="{ name: 'cardDelete', params: {itemToDelete: card} }" >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    
    <v-dialog v-model="openDialog" 
              max-width="560" >
      <router-view></router-view>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CardList',
  computed: {
    ...mapGetters({
      cards: 'cards'
    }),
    openDialog: {
      get () {
        return this.$route.meta.dialog
      },
      set () {
        this.$router.push({name: 'cardList'})
      }
    }
  },
  methods: {
    openUpdateForm (card) {
      this.$router.push({ name: 'cardUpdate', params: {card: Object.assign({}, card)} })
    },
    openCreateForm () {
      this.$router.push({ name: 'cardCreate' })
    }
  }
}
</script>