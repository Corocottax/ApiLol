const Calle = require("./calles.model");
const { setError } = require("../../utils/error/error");

const getAllCalles = async (req, res, next) => {

    try {

        const CallesDB = await Calle.find();
        
        res.status(200).json(CallesDB)

    } catch (error) {

        return next(setError(500, "No puedo intentar en getAllCalles"));
    
    }
}

module.exports = {

    getAllCalles,

}
