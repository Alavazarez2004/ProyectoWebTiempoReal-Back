"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
// Habilita CORS
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const Alumno_routes_1 = __importDefault(require("./Routes/Alumno.routes"));
const Maestro_routes_1 = __importDefault(require("./Routes/Maestro.routes"));
const Persona_routes_1 = __importDefault(require("./Routes/Persona.routes"));
// Middlewares
app.use(express_1.default.json());
app.use('/api_socket/Alumno', Alumno_routes_1.default);
app.use('/api_socket/Maestro', Maestro_routes_1.default);
app.use('/api_socket/Persona', Persona_routes_1.default);
const server = http_1.default.createServer(app);
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
let Tareas = [
    'Tarea asignada ',
    'para entregar a las 8 ',
    'por entregar'
];
function cambiarTarea(nuevoEstado) {
    estadoTareas = nuevoEstado;
    io.emit('estado_Tareas', estadoTareas);
}
// Ruta para obtener el estado de las tareas
app.get('/estado-Tareas', (req, res) => {
    res.json({ estado: estadoTareas });
});
// Ruta para cambiar el estado de las tareas
app.post('/cambiar-estado-Tarea/:nuevoEstado', (req, res) => {
    const nuevoEstado = req.params.nuevoEstado;
    cambiarTarea(nuevoEstado);
    res.send(`Estado de la tarea cambiado a: ${nuevoEstado}`);
});
// Ruta para volver a cambiar el estado de las tareas a En Preparación
app.post('/en-preparacion', (req, res) => {
    const nuevoEstado = 'En preparación';
    cambiarTarea(nuevoEstado);
    res.send(`Estado de la tarea cambiado a: ${nuevoEstado}`);
});
/**************************************************/
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
