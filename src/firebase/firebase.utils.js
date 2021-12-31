import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { GoogleAuthProvider } from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBnTLhw51zjW6Pl2imVVRl2OaHfzbA3278',
  authDomain: 'clothing-shop-db-7f750.firebaseapp.com',
  projectId: 'clothing-shop-db-7f750',
  storageBucket: 'clothing-shop-db-7f750.appspot.com',
  messagingSenderId: '847899020184',
  appId: '1:847899020184:web:a0242fc619c757198379ed',
  measurementId: 'G-G79C2KH045',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error Creatting User : ', error.message)
    }
  }

  return userRef
}

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = async () => {
  try {
    const { user } = await auth.signInWithPopup(provider)
    if (user) return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export default firebase
