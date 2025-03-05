const express = require('express');
const router = express.Router();
const RouteController = require('../controllers/routeController');

const routeController = new RouteController();

router.post('/findRoute', (req, res) => routeController.findRoute(req, res));

module.exports = router;