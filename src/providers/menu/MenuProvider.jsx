import React, { createContext, useReducer, useContext } from 'react'

const MenuContext = createContext(null)

const initialState = {
  isOpenMenu: false,
  isOpenControls: false,
  isOpenSettings: false,
}

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      }
    case 'TOGGLE_CONTROLS':
      return {
        ...state,
        isOpenControls: !state.isOpenControls,
      }
    case 'TOGGLE_SETTINGS':
      return {
        ...state,
        isOpenSettings: !state.isOpenSettings,
      }
    case 'CLOSE_MENU':
      return {
        ...state,
        isOpenMenu: false,
      }
    case 'CLOSE_CONTROLS':
      return {
        ...state,
        isOpenInstructions: false,
      }
    case 'CLOSE_SETTINGS':
      return {
        ...state,
        isOpenSettings: false,
      }
    default:
      return state
  }
}

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, initialState)

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' })
  }

  const toggleControls = () => {
    dispatch({ type: 'TOGGLE_CONTROLS' })
  }

  const toggleSettings = () => {
    dispatch({ type: 'TOGGLE_SETTINGS' })
  }

  const closeMenu = () => {
    dispatch({ type: 'CLOSE_MENU' })
  }

  const closeControls = () => {
    dispatch({ type: 'CLOSE_CONTROLS' })
  }

  const closeSettings = () => {
    dispatch({ type: 'CLOSE_SETTINGS' })
  }

  const values = {
    isOpenMenu: state.isOpenMenu,
    isOpenControls: state.isOpenControls,
    isOpenSettings: state.isOpenSettings,
  }

  const functions = {
    toggleMenu,
    toggleControls,
    toggleSettings,
    closeMenu,
    closeControls,
    closeSettings,
  }

  return (
    <MenuContext.Provider value={{ state, dispatch, ...values, ...functions }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }

  return context
}
