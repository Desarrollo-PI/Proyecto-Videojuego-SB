import React from 'react'

import { Navigate } from 'react-router-dom'
import { useAuth } from '../providers/auth/AuthProvider'

const ProtectedRouter = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  return user ? children : <Navigate replace to="/login" />
}

export default ProtectedRouter
