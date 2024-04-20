import React from 'react'

import { Navigate } from 'react-router-dom'
import { useAuth } from '../providers/auth/AuthProvider'

const ProtectedRouter = ({ children }) => {
  const { state } = useAuth()

  return state.user ? children : <Navigate replace to="/login" />
}

export default ProtectedRouter
