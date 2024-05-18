import { Color } from 'three'

export function eulerToQuaternion(alpha, beta, gamma) {
  const halfAlpha = alpha / 2
  const halfBeta = beta / 2
  const halfGamma = gamma / 2

  const sinHalfAlpha = Math.sin(halfAlpha)
  const cosHalfAlpha = Math.cos(halfAlpha)
  const sinHalfBeta = Math.sin(halfBeta)
  const cosHalfBeta = Math.cos(halfBeta)
  const sinHalfGamma = Math.sin(halfGamma)
  const cosHalfGamma = Math.cos(halfGamma)

  const qx =
    sinHalfAlpha * cosHalfBeta * cosHalfGamma -
    cosHalfAlpha * sinHalfBeta * sinHalfGamma
  const qy =
    cosHalfAlpha * sinHalfBeta * cosHalfGamma +
    sinHalfAlpha * cosHalfBeta * sinHalfGamma
  const qz =
    cosHalfAlpha * cosHalfBeta * sinHalfGamma -
    sinHalfAlpha * sinHalfBeta * cosHalfGamma
  const qw =
    cosHalfAlpha * cosHalfBeta * cosHalfGamma +
    sinHalfAlpha * sinHalfBeta * sinHalfGamma

  return { x: qx, y: qy, z: qz, w: qw }
}

export function normalize(vector) {
  const magnitud = Math.sqrt(vector.x ** 2 + vector.z ** 2)
  if (magnitud == 0) {
    return vector
  }
  const normalizedVector = {
    x: vector.x / magnitud,
    y: vector.y,
    z: vector.z / magnitud,
  }
  return normalizedVector
}

export const calculateDistance = (enemyPosition, playerPosition) => {
  const dx = enemyPosition.x - playerPosition.x
  const dy = enemyPosition.y - playerPosition.y
  const dz = enemyPosition.z - playerPosition.z

  const distanceSquared = dx ** 2 + dy ** 2 + dz ** 2

  const invertedDistance = 1 / Math.sqrt(distanceSquared)

  return invertedDistance
}

export function calculateAndSetDistance(playerBody, trollBody, setDistance) {
  if (playerBody && trollBody.current) {
    const position = trollBody?.current?.translation()
    const playerPosition = playerBody?.position
    const distance = calculateDistance(position, playerPosition)
    setDistance(distance)
  }
}

export const getPlayerDirection = (enemyPosition, playerPosition) => {
  return {
    x: playerPosition.x - enemyPosition.x,
    y: 0,
    z: playerPosition.z - enemyPosition.z,
  }
}

export const getVelocity = (body) => {
  const _velocity = body?.current?.linvel()
  ;['x', 'y', 'z'].forEach((component) => {
    if (isNaN(_velocity[component])) {
      _velocity[component] = 0
    }
  })
  return _velocity
}

export function setEnemyRotation(velocity, enemyBody) {
  let theta = 0
  if (velocity.z >= 0) {
    theta = Math.atan(velocity.x / velocity.z)
  } else {
    theta = Math.atan(velocity.x / velocity.z) + Math.PI
  }
  enemyBody.current.setRotation(eulerToQuaternion(0, theta, 0))
}

export const watchPlayer = (
  e,
  setPlayerBody,
  setActualAction,
  changeAnimation,
  setIsSoundPlaying,
  props
) => {
  if (e.rigidBodyObject.name === 'playerBody' && !props.isPlayerDeath) {
    setPlayerBody(e.rigidBodyObject)
    setActualAction('Chase')
    changeAnimation('Chase')
    setIsSoundPlaying(true)
  }
}

export const stopWatchPlayer = (
  e,
  setActualAction,
  changeAnimation,
  setPlayerBody,
  setIsSoundPlaying,
  props
) => {
  if (e.rigidBodyObject.name === 'playerBody') {
    setActualAction(props.action)
    changeAnimation(props.action)
    setPlayerBody(null)
    setIsSoundPlaying(false)
  }
}

export const touchPlayer = (
  e,
  setRepeatAttack,
  setActualAction,
  changeAnimation,
  props
) => {
  if (e.rigidBodyObject.name === 'playerBody' && !props.isPlayerDeath) {
    setRepeatAttack(true)
    setActualAction('Attack')
    changeAnimation('Attack')
  }
}

export const touchSpell = (
  e,
  life,
  idEnemy,
  setLife,
  deathEnemy,
  handleSound,
  frozen,
  setFrozen,
  setChangeColor
) => {
  if (e.rigidBodyObject.name === 'expelliarmusBody') {
    handleSound(['hit'])
    const newLife = life - 50
    setLife(newLife)
    if (newLife <= 0) {
      deathEnemy(idEnemy)
    }
  }
  if (e.rigidBodyObject.name === 'glaciusBody') {
    handleSound(['hit'])
    setFrozen(3)
    setChangeColor(true)
  }
}

export const stopTouchPlayer = (e, setRepeatAttack) => {
  if (e.rigidBodyObject.name === 'playerBody') {
    setRepeatAttack(false)
  }
}
