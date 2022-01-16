const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const callesSchema = new Schema(

    {

        calle: { 

            type: String, required: true, trim: true,

        },

        url: { 

            type: String, required: true, trim: true,

        },

    },
    {

        timestamps: true,

    }

);

const Calle = mongoose.model("calles", callesSchema);

module.exports = Calle;