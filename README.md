# El Rescate de Hogwarts: La Misión del Auror

Videojuego de aventura 3D que corre en el navegador, con modo un jugador y multijugador
en tiempo real. Construido con React Three Fiber sobre Three.js, con físicas, cuatro
niveles jugables, sistema de hechizos y persistencia de progreso.

**▶ Jugar: https://proyecto-videojuego-sb.vercel.app**

---

## Sobre el proyecto

Un hechicero oscuro ha tomado el castillo de Hogwarts. El jugador encarna a un Auror que
debe recorrer cuatro escenarios —la estación de King's Cross, Hogsmeade, el Bosque
Prohibido y Hogwarts— recogiendo objetos, esquivando obstáculos y enfrentando enemigos
hasta llegar al enfrentamiento final.

Desarrollado como proyecto integrador del programa de Ingeniería de Sistemas de la
Universidad del Valle. El alcance no fue solo técnico: el proyecto incluyó un ciclo
completo de investigación de usuario, modelado 3D propio y gestión ágil documentada.

## Características

**Jugabilidad**

- Cuatro niveles con mundos, iluminación y previsualización independientes
- Movimiento con motor de físicas (correr, agacharse, saltar), cámara en tercera persona
- Sistema de hechizos: Expelliarmus, Incendio, Glacius y Leviosa
- Ocho tipos de enemigos: dementor, troll, araña, duende, esqueleto, mago esqueleto,
  bruja y el hechicero oscuro como jefe final
- 22 objetos coleccionables modelados individualmente
- Barra de vida y de maná, checkpoints, portales y obstáculos interactivos
- Banda sonora original por nivel y 19 efectos de sonido

**Cuenta y progreso**

- Registro e inicio de sesión con Firebase Authentication
- Selección de casa de Hogwarts en el registro
- Progreso persistido en Firestore: nivel alcanzado y objetos recogidos
- Rutas protegidas: no se accede al juego sin sesión iniciada

**Multijugador**

- Sincronización en tiempo real con Socket.IO
- Segundo jugador y variantes de obstáculos sincronizadas por servidor

## Stack

| Área | Tecnologías |
|---|---|
| 3D y renderizado | Three.js, @react-three/fiber, @react-three/drei |
| Físicas | @react-three/rapier |
| Frontend | React 18, React Router, React Bootstrap |
| Backend y datos | Firebase Authentication, Cloud Firestore |
| Tiempo real | Socket.IO |
| Modelado 3D | Blender (fuentes `.blend` incluidas), formato glTF/GLB |
| Despliegue | Vercel |

## Estructura

```
src/
├── game/
│   ├── globals/          jugador, hechizos, enemigos, obstáculos, checkpoints
│   ├── pages/
│   │   ├── levelOne..levelFour/   mundo, luces, coleccionables, enemigos por nivel
│   │   ├── levelRouter/           carrusel de niveles y bloqueo por progreso
│   │   ├── login, register/       autenticación y selección de casa
│   │   └── layout/                HUD, menús, diálogos, game over, victoria
├── providers/            contextos: auth, jugador, avatar, jefes, música, menú, diálogo
├── routes/               enrutado y rutas protegidas
├── socket/               cliente de Socket.IO
├── db/                   acceso a Firestore
└── utils/                movimiento, rotación de coleccionables, utilidades de enemigos

public/assets/
├── blender/              archivos fuente .blend de personajes y niveles
├── models/               modelos exportados en .glb
├── music/, sounds/       audio
├── fonts/, img/, hdr/    tipografías, imágenes y mapa de entorno HDR
```

## Ejecución local

Requiere Node.js 18 o superior.

```bash
git clone https://github.com/Desarrollo-PI/Proyecto-Videojuego-SB.git
cd Proyecto-Videojuego-SB
npm install
npm start
```

La aplicación queda en `http://localhost:3000`.

Para el modo multijugador hace falta levantar además el servidor de sockets
([Proyecto-Videojuego-SB-Sockets](https://github.com/Desarrollo-PI/Proyecto-Videojuego-SB-Sockets))
y apuntar el cliente a él:

```
REACT_APP_SOCKET_URL=http://localhost:5000
```

Sin esa variable, el cliente usa `http://localhost:5000` por defecto.

## Proceso de diseño y documentación

El juego partió de investigación con usuarios reales y se validó con pruebas por nivel.

| Documento | |
|---|---|
| Game Design Document | [Ver](https://docs.google.com/document/u/0/d/1Vzq0T5ZupWVzu9A_PGy6gbOtxoSCY6BezZQ_h8T6eeU/edit) |
| Guion de entrevista | [Ver](https://docs.google.com/document/u/0/d/1ANP0lcKGlyd9bkUVy3j90jFMlhP6Dq1caH4G6ESi2CY/edit) |
| Mapa de afinidad | [Ver](https://drive.google.com/file/d/1qlV1pLiFFqRRNkW5IlnyGFGcgJ0QlzMf/view?usp=sharing) |
| Protopersonas | [Ver en Miro](https://miro.com/app/board/uXjVKWLysp0=/?share_link_id=451338976277) |
| Gestión del proyecto | [Taiga](https://tree.taiga.io/project/herreran903-desarrollo-pi/timeline) |
| Modelos de Blender | [Carpeta](https://drive.google.com/drive/folders/14DyMLkbRrujd2NG-KWA9gZV9JNNmoSZN?usp=sharing) |
| Video de experiencia de usuario y Web3D | [Ver](https://drive.google.com/file/d/1YFoIKDf59BZWBlwfaoBgaz8PxHHIf49i/view?usp=drive_link) |

<!-- ENLACES PENDIENTES DE REVISIÓN DE PRIVACIDAD
     Estas carpetas pueden contener grabaciones, nombres o rostros de participantes.
     Revisar antes de publicarlas en un README público y borrar este bloque al decidir.

| Entrevistas | https://drive.google.com/drive/folders/1bxVizbZ6APFyM5U8n3kzt1y9vt0ySnTd |
| Test de usuario nivel 1 | https://drive.google.com/drive/folders/11mbgpisJcj47_e3ueg3JBQZL9NZt5FLL |
| Test de usuario nivel 2 | https://drive.google.com/drive/folders/1VnqmmQ6tc2USWV2qPBBStPmgTz1FnZyZ |
| Test de usuario nivel 3 | https://drive.google.com/drive/folders/1XppwRniRpeC44SRa3iWZGrDwHjDCHdO5 |
-->

## Equipo

Nicolás Herrera Marulanda · Samuel Galindo · Christian Vargas · John Belalcázar

## Nota

Proyecto académico sin ánimo de lucro. El universo de Harry Potter y sus nombres son
propiedad de sus respectivos titulares; se usan aquí únicamente con fines educativos.
Los modelos 3D, texturas, animaciones y código son originales del equipo.
