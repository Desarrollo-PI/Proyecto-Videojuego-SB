'use strict'

import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../firebase-config'

const userCollection = collection(db, 'users')

const defaultUser = {
  level: 1,
  collectibles: 0,
  nameCollectibles: [],
  lives: 3,
  pos_level_one: {
    x: 0,
    y: 0,
    z: 0,
  },
  pos_level_two: {
    x: 0,
    y: 0,
    z: 0,
  },
  pos_level_three: {
    x: 0,
    y: 0,
    z: 0,
  },
  pos_level_four: {
    x: 0,
    y: 0,
    z: 0,
  },
}

export const createUser = async (dataUser) => {
  const user = {
    uid: dataUser.uid,
    name: dataUser.name,
    email: dataUser.email,
    hogwartsHouse: dataUser.hogwartsHouse,
    ...defaultUser,
  }

  try {
    const res = await addDoc(userCollection, user)
    return {
      success: true,
      data: res,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export const getUser = async (email) => {
  try {
    const res = await getDocs(
      query(userCollection, where('email', '==', email))
    )

    if (res.empty) {
      return {
        success: false,
        data: null,
      }
    }
    const data = res.docs.map((doc) => doc.data())
    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export const updateUser = async (email, userData) => {
  try {
    const res = await getDocs(
      query(userCollection, where('email', '==', email))
    )
    if (res.empty) {
      return {
        success: false,
        data: null,
      }
    }
    const user = res.docs[0]
    await updateDoc(userCollection.ref, userData)
    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}
