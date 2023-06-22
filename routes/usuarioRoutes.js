import express from 'express'
const router = express.Router();
import { 
    registrar, 
    autenticar, 
    confirmar, 
    olvidePassword,
    comprobarToken,
    nuevoPassword, 
    perfil
} from '../controllers/UsuarioController.js';

import checkAuth from '../middleware/checkAuth.js'

// Autenticacion, registro, y confirmacion de usuarios

router.post('/', registrar); // Crea un nuevo usuario
router.post('/login', autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").post( nuevoPassword).get(comprobarToken);
router.get("/perfil", checkAuth, perfil)



export default router