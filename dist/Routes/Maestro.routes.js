"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Maestro_controller_1 = require("../Controller/Maestro.controller");
const maestroRouter = (0, express_1.Router)();
maestroRouter.get('/visualizarMaestros', Maestro_controller_1.visualizarMaestros);
maestroRouter.get('/buscar', Maestro_controller_1.buscar); // Nombre y Contraseña como parámetros
maestroRouter.post('/crearMaestro', Maestro_controller_1.crearMaestro);
maestroRouter.put('/modificarMaestro', Maestro_controller_1.modificarMaestro); // ID como cuerpo
maestroRouter.delete('/eliminarMaestro/:id', Maestro_controller_1.eliminarMaestro); // Id como parámetro
exports.default = maestroRouter;
