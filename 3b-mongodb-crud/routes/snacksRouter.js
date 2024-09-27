/*
    6a. Set up basic request handler settings
*/
    const express = require ('express');
    const Snack = require ('../models/snackModel');

    const router = express.Router();

    const makeSuccessObject = function (data) {
        return {
            mesage: 'success',
            payload: data,
        }
    }

    const maleSuccessObjectArrowVersion = (data) => ({
            message: 'success',
            payload: data, 

    }) 

     const sillyersion = (data) 

//9. Write a request handler function for GET requests to localhost:3000/api/snacks
router.get('/snacks',async function (req, res) {
    try {
        const foundSnacks = await Snack.find({});
        res.status(200). json ({
                message: 'success',
                payload: foundSnacks, 
        });

    }  catch (error) {
        console.log('error finding all snacks')
        console. log (error);
    }
})

// GET htp://locahost:3000/api/snacks/{snack id} 
// DRY-DONT REPEAT YOURSELF 
// AHA - Avoid Hasty Abstractions 
// WET- Write Everything twice 

router.get('/snack:id', async function (req, res) {
    try {
            const foundSnack = await Snack.findById(req.params.id);
            res.status(200).json({
                message: 'success',
                payload: foundSnacks, 
            });
    } catch (error) { 
    
    }
})

/*
    8. Write a request handler function for POST reqeuests to localhost:3000/api/snacks
*/

/*
    10. Write a request handler function for PUT reqeuests to localhost:3000/api/snacks
    udates usually reuqire Both a dynamic parameter (like/:id) AND a request body 
*/router.put('snacks/:id', async function(req,res){
    try {
            await Snack.updateOne (
                {_id: req.params.id},
            ) 
    } catch (error){

    }
})


/*
    11. Write a request handler function to DELETE reqeuests to localhost:3000/api/snacks
*/
router.delete ('/snacks/:id',async function (req, res){
try{
 await Snack.findByIdAndDelete(req.params.id);
 const allSnacks = await Snack.find ({})
 res.status(200).json (makeSuccessOject(allSnacks));
} catch (error) {
    const errorObject = { 
        message: 'delete snack failure'
        payload: error, 

        }       
    }
})


    /* 6b. Export the router
*/
