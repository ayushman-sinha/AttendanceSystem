import jwt from 'jsonwebtoken'

const generateToken = (id) => {  
  return jwt.sign({ id }, 'ayus6969', {
    expiresIn: '9999999',
  })
}

export default generateToken
