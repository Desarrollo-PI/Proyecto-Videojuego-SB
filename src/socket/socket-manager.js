"use strict"

import socketIOClient from "socket.io-client"

// export const socket = socketIOClient("http://localhost:5000")
export const socket = socketIOClient("https://proyecto-videojuego-sb-sockets.onrender.com")

export const disconnectSocket = () => {
	console.log('Disconnecting socket...')
	socket.disconnect()
}