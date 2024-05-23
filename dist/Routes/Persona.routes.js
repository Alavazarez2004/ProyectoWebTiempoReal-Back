"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Persona_controller_1 = require("../Controller/Persona.controller");
const router = (0, express_1.Router)();
router.post('/crearPersona', Persona_controller_1.crearPersona);
router.get('/conseguirPersona', Persona_controller_1.conseguirPersona);
router.get('/ObtenerPersonaNueva', Persona_controller_1.obtenerReparNew);
exports.default = router;
