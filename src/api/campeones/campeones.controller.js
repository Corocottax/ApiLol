const Campeon = require("./campeones.model");
const { setError } = require("../../utils/error/error");
const { deleteFile } = require("../../middlewares/delete-file");

const postNewCampeon = async (req, res, next) => {

    try {
        
        const newCampeon = new Campeon();
        newCampeon.name = req.body.name;

        if (req.file) {

            newCampeon.url = req.file.path

        }

        newCampeon.calles = req.body.calles;
        newCampeon.runas = req.body.runas;

        const campeonDB = await newCampeon.save();

        return res.status(201).json(campeonDB);

    } catch (error) {
        
        return next(setError(500, "Campeon no publicado"));

    }

};

const getAllCampeones = async (req, res, next) => {

    try {

        const CampeonsDB = await Campeon.find().populate("calles");
        
        res.status(200).json(CampeonsDB)

    } catch (error) {

        return next(setError(500, "No puedo buscar campeones"));
    
    }
}

const getCampeon = async (req, res, next) => {

    try {

        const { name } = req.params;
        const CampeonDB = await Campeon.find({ name: name.charAt(0).toUpperCase() + name.slice(1) }).populate("calles");

        if (!CampeonDB) {

            return next(setError(404, "no se encuentra el campeon"));

        }

        return res.status(200).json(CampeonDB);

    } catch (error) {

        return next(setError(500, "no hay campeones"));

    }
    
}

const patchCampeon = async (req, res, next) => {
    
    try {

        const { id } = req.params
        const patchCampeon = new Campeon(req.body)

        console.log("1");

        patchCampeon._id = id;

        if (req.file) {

            patchCampeon.url = req.file.path

        }

        const CampeonDB = await Campeon.findByIdAndUpdate(id, patchCampeon)

        if (!CampeonDB) {

            return next(setError(404, "no se encuentra el campeon"))

        }

        if (CampeonDB.img) {

            deleteFile(CampeonDB.img);

        } 

        return res.status(200).json({ new: patchCampeon, old: CampeonDB })

    } catch (error) {

        return next(setError(500, "he fallado en actualizar un campeon"))

    }

}

const deleteCampeon = async (req, res, next) => {

    try {

        const { name } = req.params;
        const CampeonDB = await Campeon.findOneAndDelete({ name: name }).populate("calles");

        if (!CampeonDB) {

            return next(setError(404, "No he encontrado el campeon"))

        }

        if (CampeonDB.img) {

            deleteFile(CampeonDB.img)

        } 

        return res.status(200).json(CampeonDB)

    } catch (error) {

        return next(setError(500, "Campeon cant be removed"))

    }

}

module.exports = {
    
    postNewCampeon,
    getAllCampeones,
    getCampeon,
    patchCampeon,
    deleteCampeon,

}
