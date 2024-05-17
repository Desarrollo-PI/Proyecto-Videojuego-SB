import React, { createContext, useReducer, useContext } from 'react'

const AlertContext = createContext(null)

const initialState = {
  show: false,
  variant: 'success',
  message: '',
}

const alertReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_ALERT':
      return {
        ...state,
        show: true,
        variant: action.payload.variant,
        message: action.payload.message,
      }
    case 'CLOSE_ALERT':
      return {
        ...state,
        show: false,
      }
    default:
      return state
  }
}

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const openAlert = (message, variant) => {
    dispatch({ type: 'OPEN_ALERT', payload: { variant, message } })
  }

  const closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }

  const values = {
    show: state.show,
    variant: state.variant,
    message: state.message,
  }

  const functions = {
    openAlert,
    closeAlert,
  }

  return (
    <AlertContext.Provider value={{ state, dispatch, ...values, ...functions }}>
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider')
  }

  return context
}
