const Admin = require('../api/admins/admins.model')
const { setError } = require('../utils/error/error')
const { verifyJwt } = require('../utils/jwt/jwtUtils')

const isAdmin = (req, res, next) => {

    try {

        const token = req.headers.authorization

        if (!token) {

            return next(setError(404, 'Unauthorized'));

        }

        const parsedToken = token.replace('Bearer ', '')
        const validToken = verifyJwt(parsedToken, process.env.JWT_SECRET)
        const adminLogued = Admin.findById(validToken.id)

        adminLogued.password = null

        req.admin = adminLogued

        next()
        
    } catch (error) {

        return next(error)
        
    }

}

module.exports = { isAdmin }