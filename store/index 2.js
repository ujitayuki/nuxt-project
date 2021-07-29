import firebase from '~/plugins/firebase'

export const state = () => ({
})

export const getters = {
}

export const actions = {
 login(context, payload) {
   firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
     .then(user => {
         console.log('成功！')
       }).catch((error) => {
         alert(error)
       })
 },
}

export const mutations = {
}