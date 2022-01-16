const Admin = require('./admins.model')
const bcrypt = require('bcrypt')
const { setError } = require('../../utils/error/error')
const { generateSign } = require('../../utils/jwt/jwtUtils')

const register = async (req, res, next) => {

    try {

        const newAdmin = new Admin(req.body)
        const adminDuplicate = await Admin.findOne({ email: newAdmin.email })

        if (adminDuplicate) {

            return next(setError(404, 'Email existente'))

        }

        const adminDB = await newAdmin.save();
        return res.status(201).json({ name: adminDB.name, email: adminDB.email })

    } catch (error) {

        return next(error)

    }
}

const loginAdmin = async (req, res, next) => {

    try {

        const adminDB = await Admin.findOne({ email: req.body.email })

        if (!adminDB) {

            return next(setError(404, 'Admin not found'))

        }

        if (bcrypt.compareSync(req.body.password, adminDB.password)) {

            const token = generateSign(adminDB._id, adminDB.email)
            return res.status(200).json(token)

        }

    } catch (error) {

        error.message = 'error Login'
        return next(error)

    }
}

const logoutAdmin = (req, res, next) => {

    try {
        
        const token = null;
        return res.status(200).json(token);

    } catch (error) {

        return next(error)

    }
}

const getAllAdmins = async (req, res, next) => {

    try {
        
        const adminDB = await Admin.find();

        if (!adminDB) {

            return next(setError(404, "There aren't admin's yet"));

        }

        res.status(200).json(adminDB);

        return res.status(200).json({ name: adminDB.name, email: adminDB.email })

    } catch (error) {

        return next(setError(404, 'Admin server fail'))

    }
}

const patchAdmin = async (req, res, next) => {
    
    try {

        const {id } = req.params
        const patchAdmin = new Admin(req.body)

        patchAdmin._id = id;

        const AdminDB = await Admin.findByIdAndUpdate(id, patchAdmin);

        if (!AdminDB) {

            return next(setError(404, "Admin not found"))

        }

        return res.status(200).json({ new: patchAdmin, old: AdminDB });

    } catch (error) {

        return next(setError(500, "Admin cant be modified"))

    }

}

module.exports = {

    register,
    loginAdmin, 
    logoutAdmin, 
    getAllAdmins,
    patchAdmin,

}