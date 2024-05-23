import { Router, Request, Response } from 'express';
import { 
  crearAlumno, 
  visualizarAlumnos, 
  buscar, 
  modificarAlumno, 
  eliminarAlumno 
} from '../Controller/Alumno.controller';

const alumnoRouter = Router();

alumnoRouter.get('/visualizarAlumnos', visualizarAlumnos);
alumnoRouter.get('/buscar', buscar);  // Nombre y Contraseña como parámetros
alumnoRouter.post('/crearAlumno', crearAlumno);
alumnoRouter.put('/modificarAlumno', modificarAlumno);  // ID como cuerpo
alumnoRouter.delete('/eliminarAlumno/:id', eliminarAlumno);  // Id como parámetro

export default alumnoRouter;