const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campeonesSchema = new Schema(

    {

        name: { 

            type: String, required: true, trim: true,

        },

        url: { 

            type: String, required: true, trim: true,

        },

        calles: [

            { 
                
                type: Schema.Types.ObjectId, ref: "calles", required: true
            
            },

        ],

        runas: { 

            type: String, required: true, trim: true,

        },

    },
    {

        timestamps: true,

    }

);

const Campeon = mongoose.model("campeones", campeonesSchema);

module.exports = Campeon;