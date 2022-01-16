const AdminRoutes = require('express').Router();
const { isAdmin } = require('../../middlewares/auth');
const { register, loginAdmin, logoutAdmin, getAllAdmins, patchAdmin } = require('./admins.controller');

AdminRoutes.post('/', register);
AdminRoutes.post('/login', loginAdmin);
AdminRoutes.post('/logout', [isAdmin], logoutAdmin);
AdminRoutes.get("/", [isAdmin], getAllAdmins);
AdminRoutes.patch("/:id", [isAdmin], patchAdmin);

module.exports = AdminRoutes;