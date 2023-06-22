import jwt from 'jsonwebtoken'
const generarJWT = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, { 
    expiresIn: '30d', // en cuanto tiempo expira el token
  } )
}

export default generarJWT;