const CallesRoutes = require('express').Router();
const { getAllCalles } = require('./calles.controller')

CallesRoutes.get('/', getAllCalles);

module.exports = CallesRoutes;