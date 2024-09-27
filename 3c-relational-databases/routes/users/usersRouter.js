/*
    7. Set up the users router
*/


// 7a. Import express, router, and controller functionality
const express = require ('express');

const {} = require ('./usersController');
const { makeSuccessObject } = require('../router-utilities');

const router = express.Router ();


// 7b. Route the ability to create a user at localhost:3000/api/users
//   We deal with the network code here, and leave the database code to the
//   controler
router.post('/', async function (req, res) {
    try {
            const uer = await create.User (req.body)
            res.status(200).json(makeSuccessObject(user));
    } catch (error) {
    const failureObject = makeFailureObject(error, 'Failure creating a user');
    res.status(500).json(failureObject);
    console.log(failureObject);
    }   
})

// 7c. Export the router
module.exports = router;