const express = require('express');
const router = express.Router();
const RouteController = require('../controllers/routeController');

const routeController = new RouteController();
router.post('/', (req, res) => routeController.findRoute(req, res));
router.post("/port", handlePort);

module.exports = router;