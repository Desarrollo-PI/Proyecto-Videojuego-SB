import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { auth } from '../../firebase-config'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { createUser, getUser } from '../../db/user-collection'

const AuthContext = createContext(null)

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
}

const initialState = {
  user: null,
  loading: true,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
    case actionTypes.REGISTER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (res) => {
      if (res) {
        const user = await getUser(res.email)
        if (user.success) {
          dispatch({ type: actionTypes.LOGIN, payload: user.data[0] })
        } else {
          dispatch({ type: actionTypes.LOGOUT })
        }
      } else {
        dispatch({ type: actionTypes.LOGOUT })
      }
    })

    return () => {
      subscribe()
    }
  }, [])

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: res }
    } catch (error) {
      return { success: false, error }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  const register = async (userData) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userData?.email,
        userData?.password
      )
      if (res.user) {
        const user = {
          uid: res.user.uid,
          email: res.user.email,
          name: userData.name,
          hogwartsHouse: userData.hogwartsHouse,
        }
        const _res = await createUser(user)
        if (_res.success) {
          return { success: true }
        } else {
          return { success: false, error: _res.error }
        }
      } else {
        return { success: false, error: 'Error creating user' }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider value={{ state, dispatch, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
