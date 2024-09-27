const getAllVehicles= (req, res) => {
    res.render('vehicles'); 
};



//is the same as module.exports.getIndexPage = getIndexPage;
module.exports = { getAllVehicles };
