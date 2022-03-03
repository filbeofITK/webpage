import { createStore } from 'vuex'

export default createStore({
  state: {
    numofCardstoDisplay: 25,
    cards: [{
      id: "",
      title: "",
      abst: "",
      date: "",
      source: ""
    }],
    fullDatas: [{
      id: "",
      title: "",
      abst: "",
      date: "",
      source: "",
      //TODO: determine exactly what data do I want to store
    }]

  },
  getters: {
  },
  mutations: {
  },
  actions: {
    loadByID (){
      //TODO: write code that asynchronously loads data of one instance by id
    },
    startupLoad (){
      //TODO: Load
    }
  },
  modules: {
  }
})
