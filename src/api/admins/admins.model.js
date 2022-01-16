const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { setError } = require("../../utils/error/error.js");

require('dotenv').config();

const adminPassword = process.env.ADMIN_PASSWORD;

const adminSchema = new Schema({

    name: {

        type: String, 
        trim: true,
        required: true

    },
    email: {

        type: String, 
        trim: true,
        required: true,
        unique: true,

    },
    password: {

        type: String,
        trim: true,
        required: true,

    }

}, 
{

    timestamps: true,

});

adminSchema.pre("save", function (next) {

    if (adminPassword === this.password) {

        this.password = bcrypt.hashSync(this.password, 10);

        next();

    } else {

        return next (setError(400, "Esta no es la contraseña de los admins, si quiere disponer de este roll manda un correo electrónico a santicorocottax@gmail.com y se investigará su caso a detalle para ver si puede disponer de este roll."));

    }

});

const Admin = mongoose.model("admins", adminSchema);

module.exports = Admin;