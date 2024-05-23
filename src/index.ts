import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';

// Habilita CORS
const app = express();

app.use(cors());

import Alumno from './Routes/Alumno.routes';
import Maestro from './Routes/Maestro.routes';
import Persona from './Routes/Persona.routes';

// Middlewares
app.use(express.json());

app.use('/api_socket/Alumno', Alumno);
app.use('/api_socket/Maestro', Maestro);
app.use('/api_socket/Persona', Persona);

const server = http.createServer(app);

/******** - SOCKET.IO IMPLEMENTACIÓN DE ROOMS -**********/
// const io = new SocketIOServer(server, {
//     cors: {
//         origin: "*",
//     },
// });

// const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

// io.on('connection', (socket) => {
//     const { roomId } = socket.handshake.query as { roomId: string };
//     socket.join(roomId);

//     socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
//         io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
//     });

//     socket.on('disconnect', () => {
//         socket.leave(roomId);
//     });
// });
/**************************************************/

/************** - SHORT POLLING -**************/
let estadoTareas = 'En preparación';

let Tareas: string[] = [
    'Tarea asignada ',
    'para entregar a las 8 ',
    'por entregar'
];

function cambiarTarea(nuevoEstado: string) {
    estadoTareas = nuevoEstado;
    io.emit('estado_Tareas', estadoTareas);
}

// Ruta para obtener el estado de las tareas
app.get('/estado-Tareas', (req: Request, res: Response) => {
    res.json({ estado: estadoTareas });
});

// Ruta para cambiar el estado de las tareas
app.post('/cambiar-estado-Tarea/:nuevoEstado', (req: Request, res: Response) => {
    const nuevoEstado = req.params.nuevoEstado;
    cambiarTarea(nuevoEstado);
    res.send(`Estado de la tarea cambiado a: ${nuevoEstado}`);
});

// Ruta para volver a cambiar el estado de las tareas a En Preparación
app.post('/en-preparacion', (req: Request, res: Response) => {
    const nuevoEstado = 'En preparación';
    cambiarTarea(nuevoEstado);
    res.send(`Estado de la tarea cambiado a: ${nuevoEstado}`);
});
/**************************************************/

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
