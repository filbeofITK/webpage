import { createStore } from 'vuex'

export default createStore({
  state: {
    numofCardstoDisplay: 25,
    cards: [],
    openInstances: []

  },
  getters: {
  },
  mutations: {
    addDummyCardData (state, data){
      state.cards.push(data)
    },
    addDummyFullData(state, id){
      state.openInstances.push({
        id: id,
        title: "Title",
        abst: "Abstract",
        date: "2020.02.01",
        source: "https://example.com",
        author: "Scientist"
        //Other data

      })
    }
  },
  actions: {
    loadByID (){
      //TODO: write code that asynchronously loads data of one instance by id
    },
    startupLoad (){
      //TODO: Load numofCardstoDisplay random data instance

    },
    dummyLoadByID (context, id){
      //TODO return a dummy data
      context.commit("addDummyFullData",id)
    },
    dummyLoad (context) {
      for (var i = 0; i < context.state.numofCardstoDisplay; i++) {
        context.commit("addDummyCardData",
        {
           id: i,
          title: "Title " + (i+1),
          abst: "Abstract number " + (i + 1) + " Lorem ipsumm",
          date: "2020.02." + (i + 1),
          source: "https://example" + (i + 1) + ".com",
          author: "Scientist " + (i+1)
        })
      }
    }
  },
  modules: {
  }
})
