import express, { Router } from 'express'

import {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  elminarTarea,
  cambiarEstado
} from '../controllers/TareaController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

router.post('/',checkAuth, agregarTarea)

router.route('/:id')
      .get( checkAuth, obtenerTarea)
      .put(checkAuth, actualizarTarea)
      .delete(checkAuth, elminarTarea)

router.post('/estado/:id',checkAuth, cambiarEstado)

export default router