import { createStore } from 'vuex';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
const store = createStore({
  state: {
    user:null,
    authIsReady: false
  },
  mutations: {
    setUser(state,payload) {
        state.user = payload
        console.log(payload)
    },
    setAuthIsReady(state,payload) {
        state.authIsReady = payload
    }
  },
  actions:{
    async signup({commit},payload) {
        console.log('signup action',payload);
      const res =  await createUserWithEmailAndPassword(auth,payload.email,payload.password)
      if (res) {
        commit('setUser',res.user)
      } else {
        throw new Error('could not complete signup')
      }
    },
    async login({commit},payload) {
       const res = await signInWithEmailAndPassword(auth,payload.email,payload.password)
       if (res) {
         commit('setUser',res.user)
       } else {
        throw new Error('could not complete login')
       }
    },
    async logout({commit}) {
       await signOut(auth)
       commit('setUser',null)
    }
  }
})

const unsub = onAuthStateChanged(auth, (user) => {
   store.commit('setAuthIsReady',true)
   store.commit('setUser',user)
   unsub()
})
export default store;