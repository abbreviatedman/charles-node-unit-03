// 3a. Import express, router, and controller functionality
const express = require('express');

const {
    createAlbum
} = require('./albumsController')

const {} = require('../albumsController');
const { makeSuccessObject, makeFailureObject  


} = require('../router-utilities');

const router = express.Router();


// 3b. Deal with a request for a POST to /api/albums
//   We deal with the network code here, and leave the database code to the
//   controller.
router. post('/', async function (req, res) {
    try{
        const album = await createAlbum (req,body)
        res.status(200).json(makeSuccessObject(album));

    } catch (error) {
        const failureObject = makeFailureObject(error, 'Failure creating album.');
        res.status(500).json(failureObject);
        console.error(error); // Added error logging
    }

})

// 3c. Export the router
module.exports = router;