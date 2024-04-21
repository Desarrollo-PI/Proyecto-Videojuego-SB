import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { auth } from '../../firebase-config'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const _user = {
          uid: user.uid,
          email: user.email,
        }
        dispatch({ type: actionTypes.LOGIN, payload: _user })
      } else {
        dispatch({ type: actionTypes.LOGOUT })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const login = async (email, password) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const _user = {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
          }
          dispatch({ type: actionTypes.LOGIN, payload: _user })
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      dispatch({ type: actionTypes.LOGOUT })
    } catch (error) {
      console.error(error)
    }
  }

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
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
