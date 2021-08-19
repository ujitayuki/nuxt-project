import firebase from '~/plugins/firebase'
import 'firebase/auth'
import 'firebase/firestore'
import createPersistedState from "vuex-persistedstate"

export const state = () => ({
 user: {
  uid: '',
  email: '',
  login: false,
 },
})

export const getters = {
 user: state => {
  return state.user
 }
}

export const actions = {
  login({ dispatch }, payload) {
   firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
     .then(user => {
         console.log('成功！')
         dispatch('checkLogin')
         setTimeout(() => {
           let url = '/welcome?id=' + user.user.uid
           window.location.href = url
         }, 1000)
       }).catch((error) => {
         alert(error)
       })
 },
 checkLogin ({ commit }) {
   firebase.auth().onAuthStateChanged(function (user) {
     if (user) {
       commit('getData', { uid: user.uid, email: user.email })
       commit('switchLogin')
       //console.log('done')
     }
   })
 },
//  login({ dispatch }, payload) {
//   firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
//     .then(user => {
//         console.log('成功！')
//         dispatch('checkLogin')
//       }).catch((error) => {
//         alert(error)
//       })
//  },
//  checkLogin ({ commit }) {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       commit('getData', { uid: user.uid, email: user.email })
//       commit('switchLogin')
//     }
//   })
//  },
 register ({ dispatch, commit }, payload) {
   firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
   .then(user => {
     console.log(user)
     dispatch('checkLogin')
   }).catch(function (error) {
     console.log({'code':error.code, 'message':error.message})
   })
  },
}

export const mutations = {
 getData (state, payload) {
  state.user.uid = payload.uid
  state.user.email = payload.email
 },
 switchLogin (state) {
  state.user.login = true
 },
}