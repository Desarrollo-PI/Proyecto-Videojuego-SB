const handleErrosRegister = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Correo electrónico ya está en uso'
    case 'Correo electrónico inválido':
      return 'Invalid email'
    case 'auth/weak-password':
      return 'Contraseña débil'
    default:
      return 'Error al registrar usuario'
  }
}

const handleErrosLogin = (error) => {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'Usuario no encontrado'
    case 'auth/wrong-password':
      return 'Contraseña incorrecta'
    case 'auth/invalid-credential':
      return 'Credenciales inválidas'
    default:
      return 'Error al iniciar sesión'
  }
}

export { handleErrosRegister, handleErrosLogin }
