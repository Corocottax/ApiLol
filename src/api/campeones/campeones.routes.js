const CampeonesRoutes = require("express").Router();
const { isAdmin } = require("../../middlewares/auth");
const { postNewCampeon, deleteCampeon, getAllCampeones, getCampeon, patchCampeon} = require("./campeones.controller");
const upload = require("../../middlewares/file");

CampeonesRoutes.get("/", getAllCampeones);
CampeonesRoutes.get("/:name", getCampeon);
CampeonesRoutes.post("/", [isAdmin], upload.single("url"), postNewCampeon);
CampeonesRoutes.patch("/:id", [isAdmin], upload.single("url"), patchCampeon);
CampeonesRoutes.delete("/:name", [isAdmin],  deleteCampeon);

module.exports = CampeonesRoutes;