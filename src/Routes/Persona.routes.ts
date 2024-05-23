import { Router, Request, Response } from 'express';
import { 
  crearPersona, 
  conseguirPersona, 
  obtenerReparNew 
} from '../Controller/Persona.controller';

const router = Router();

router.post('/crearPersona', crearPersona);
router.get('/conseguirPersona', conseguirPersona);
router.get('/ObtenerPersonaNueva', obtenerReparNew);

export default router;
