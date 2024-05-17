import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { auth } from '../../firebase-config'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { createUser, getUser, updateUser } from '../../db/user-collection'

const AuthContext = createContext(null)

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
  SET_USER: 'SET_USER',
  SET_COLLECTIBLES: 'SET_COLLECTIBLES',
  SET_LOADING: 'SET_LOADING',
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
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
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
      dispatch({ type: actionTypes.SET_LOADING, payload: true })
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

  const upgrateHearts = (user, collectibles) => {
    switch (collectibles) {
      case 10:
        return user.lives + 1
      case 20:
        return user.lives + 1
      default:
        return user.lives
    }
  }

  const editUser = async (user) => {
    try {
      const res = await updateUser(user.email, user)
      if (res.success) {
        dispatch({ type: actionTypes.SET_USER, payload: user })
        return { success: true }
      }
      return { success: false, error: res.error }
    } catch (error) {
      console.error(error)
      return { success: false, error }
    }
  }

  const onCollect = (level, collectible) => {
    const _user = { ...state.user }
    _user[level][collectible] = true
    _user.collectibles = _user.collectibles + 1
    _user.lives = upgrateHearts(_user, _user.collectibles)
    dispatch({ type: actionTypes.SET_USER, payload: _user })
  }

  const onTakeCheckpoint = (level, checkpoint, position) => {
    const _user = { ...state.user }
    _user[`checkpoint_${level}`][checkpoint] = true
    _user[`pos_${level}`] = position
    editUser(_user)
  }

  const onPassLevel = (level) => {
    const _user = { ...state.user }
    _user.level = level
    editUser(_user)
  }

  useEffect(() => {
    const collectibles = state?.user?.collectibles_level_one

    for (const key in collectibles) {
      if (collectibles[key]) {
        editUser(state.user)
      }
    }
  }, [
    state?.user?.collectibles_level_one?.sword,
    state?.user?.collectibles_level_one?.greenPotion,
    state?.user?.collectibles_level_one?.glasses,
    state?.user?.collectibles_level_one?.thunderLight,
    state?.user?.collectibles_level_one?.witchHat,
  ])

  useEffect(() => {
    const collectibles = state?.user?.collectibles_level_two

    for (const key in collectibles) {
      if (collectibles[key]) {
        editUser(state.user)
      }
    }
  }, [
    state?.user?.collectibles_level_two?.wand,
    state?.user?.collectibles_level_two?.broom,
    state?.user?.collectibles_level_two?.cup,
    state?.user?.collectibles_level_two?.diary,
    state?.user?.collectibles_level_two?.map,
  ])

  const values = {
    user: state.user,
    loading: state.loading,
    maxHearts: state?.user?.lives,
    collectiblesLevelOne: state?.user?.collectibles_level_one,
    collectiblesLevelTwo: state?.user?.collectibles_level_two,
    collectiblesLevelThree: state?.user?.collectibles_level_three,
    collectiblesLevelFour: state?.user?.collectibles_level_four,
    checkpointLevelOne: state?.user?.checkpoint_level_one,
    checkpointLevelTwo: state?.user?.checkpoint_level_two,
    checkpointLevelThree: state?.user?.checkpoint_level_three,
    checkpointLevelFour: state?.user?.checkpoint_level_four,
    posLevelOne: state?.user?.pos_level_one,
    posLevelTwo: state?.user?.pos_level_two,
    posLevelThree: state?.user?.pos_level_three,
    posLevelFour: state?.user?.pos_level_four,
  }

  const functions = {
    login,
    register,
    logout,
    onCollect,
    onTakeCheckpoint,
    onPassLevel,
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        ...values,
        ...functions,
      }}
    >
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
