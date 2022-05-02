import { createStore } from 'vuex'

export default createStore({
  state: {
    numofCardstoDisplay: 25,
    cards: [],
    openInstances: []

  },
  getters: {
    getIndex: (state) => (id) => {
      return state.openInstances.findIndex(function(instance) {return instance.id == id } )
    }
  },
  mutations: {
    addCardData (state,data){
      state.cards.push(data)
    },
    //addFullData(state,id){},

    deleteCards(state){
      state.cards = []
    },

    //DUMMY loaders
    addDummyCardData (state, data){
      state.cards.push(data)
    },

    addDummyFullData(state, id){
      let idx = state.openInstances.findIndex(function(instance) {return instance.id == id } )
      if(-1 === idx){
        state.openInstances.push({
          id: id,
          title: "Title " + (parseInt(id) + 1),
          abst: "Abstract",
          date: "2020.02.01",
          source: "https://example.com",
          author: "Scientist"
          //Other data
        })
      }
    }
  },
  actions: {
    loadByID (){
      //TODO: write code that asynchronously loads data of one instance by id
    },

    startupLoad (){
      //TODO: Load numofCardstoDisplay random data instance

    },

    dummySearchArticleByTitle(context, str){
      //TODO: load max numofCardstoDisplay cards with titles matching str
      context.commit("deleteCards")

        for (var i = 0; i < context.state.numofCardstoDisplay; i++) {
          context.commit("addDummyCardData",{
            id: (i + 100),
            title: '*' + str + '*' + (i+101),
            abst: "Abstract number " + (i + 101) + " Lorem ipsumm",
            date: "2020.02." + (i + 101),
            source: "https://example" + (i + 101) + ".com",
            author: "Scientist " + (i+101)
          })
        }
    },

    searchBiomarkerByName(context, str){
      //TODO: load max numofCardstoDisplay cards with biomarker names matching  str
      context.commit("deleteCards")
      for (var i = 0; i < context.state.numofCardstoDisplay; i++) {
        context.commit("addDummyCardData",{
          id: (i + 100),
          title: '*' + str + '*' + (i+101),
          abst: "Abstract number " + (i + 101) + " Lorem ipsumm",
          date: "2020.02." + (i + 101),
          source: "https://example" + (i + 101) + ".com",
          author: "Scientist " + (i+101)
        })
      }
    },


    //DUMMY loaders

    //Loads a single instance's in-depth data
    dummyLoadByID (context, id){
      return new Promise((resolve,reject) => {
        //async data load call, but now I only have a sync dummy loader
        context.commit("addDummyFullData",id)
        let idx = context.getters.getIndex(id)

        if(0 <= idx){
          resolve(idx)
        } else {
          reject("Couldn't determine index for this item.")
        }
      })
    },

    //Loads set of Dummy card data
    dummyStartupLoad (context) {
      context.commit("deleteCards")
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
