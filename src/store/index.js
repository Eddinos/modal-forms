import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{
      id: 1,
      name: 'Lemon',
      img: '/img/lemon.jpg',
      description: 'acid yellow fruit'
    }, {
      id: 2,
      name: 'Watermelon',
      img: '/img/watermelon.jpg',
      description: 'Red inside, green outside'
    }, {
      id: 3,
      name: 'Grapes',
      img: '/img/grapes.jpg',
      description: 'Small but tasty'
    }, {
      id: 4,
      name: 'Coconut',
      img: '/img/coconut.jpg',
      description: 'Hides under a hard shell'
    }]
  },
  getters: {
    cards: state => state.cards
  },
  mutations: {
    addCard (state, card) {
      state.cards.push({id: state.cards.length + 1, ...card});
    },
    updateCard (state, updated) {
      state.cards = state.cards.map(card => {
        return card.id === updated.id ? updated : card
      })
    },
    deleteCard (state, card) {
      state.cards = state.cards.filter(item => item.id !== card.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
