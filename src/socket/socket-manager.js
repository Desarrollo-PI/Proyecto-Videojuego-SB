'use strict'

import socketIOClient from 'socket.io-client'

export const socket = socketIOClient(
  process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000'
)

export const disconnectSocket = () => {
  console.log('Disconnecting socket...')
  socket.disconnect()
}
