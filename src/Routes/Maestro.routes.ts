import { Router, Request, Response } from 'express';
import {
  crearMaestro,
  visualizarMaestros,
  buscar,
  modificarMaestro,
  eliminarMaestro
} from '../Controller/Maestro.controller';

const maestroRouter = Router();

maestroRouter.get('/visualizarMaestros', visualizarMaestros);
maestroRouter.get('/buscar', buscar);  // Nombre y Contraseña como parámetros
maestroRouter.post('/crearMaestro', crearMaestro);
maestroRouter.put('/modificarMaestro', modificarMaestro);  // ID como cuerpo
maestroRouter.delete('/eliminarMaestro/:id', eliminarMaestro);  // Id como parámetro

export default maestroRouter;
