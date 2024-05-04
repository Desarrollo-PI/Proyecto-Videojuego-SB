import React, { createContext, useReducer, useContext } from 'react'

const DialogContext = createContext(null)

const initialState = {
  isOpenDialog: false,
  dialogType: null,
  message: '',
}

const dialogReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return {
        ...state,
        isOpenDialog: true,
        message: action.payload.message,
      }
    case 'CLOSE_DIALOG':
      return {
        ...state,
        isOpenDialog: false,
        message: '',
      }
    default:
      return state
  }
}

export const DialogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dialogReducer, initialState)

  const openDialog = (message) => {
    dispatch({ type: 'OPEN_DIALOG', payload: { message } })
  }

  const closeDialog = () => {
    dispatch({ type: 'CLOSE_DIALOG' })
  }

  const values = {
    isOpenDialog: state.isOpenDialog,
    dialogType: state.dialogType,
    message: state.message,
  }

  const functions = {
    openDialog,
    closeDialog,
  }

  return (
    <DialogContext.Provider
      value={{ state, dispatch, ...values, ...functions }}
    >
      {children}
    </DialogContext.Provider>
  )
}

export const useDialog = () => {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}
