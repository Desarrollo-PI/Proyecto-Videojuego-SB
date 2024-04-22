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

  const functions = {
    toggleMenu,
    toggleControls,
    toggleSettings,
    closeMenu,
  }

  return (
    <MenuContext.Provider value={{ state, dispatch, ...functions }}>
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
