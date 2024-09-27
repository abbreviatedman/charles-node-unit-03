const express = require('express');
const router = express.Router();

const { getAllVehicles } = require('../../controller/client/vehiclesController');//fix this path to the right one 

router.get('/', function (req, res) {
    res.render('vehicles');
})

router.get('/all-vehicles', getAllVehicles); 



module.exports = router;
