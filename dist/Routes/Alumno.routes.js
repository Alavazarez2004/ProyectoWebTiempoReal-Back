"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Alumno_controller_1 = require("../Controller/Alumno.controller");
const alumnoRouter = (0, express_1.Router)();
alumnoRouter.get('/visualizarAlumnos', Alumno_controller_1.visualizarAlumnos);
alumnoRouter.get('/buscar', Alumno_controller_1.buscar); // Nombre y Contraseña como parámetros
alumnoRouter.post('/crearAlumno', Alumno_controller_1.crearAlumno);
alumnoRouter.put('/modificarAlumno', Alumno_controller_1.modificarAlumno); // ID como cuerpo
alumnoRouter.delete('/eliminarAlumno/:id', Alumno_controller_1.eliminarAlumno); // Id como parámetro
exports.default = alumnoRouter;
