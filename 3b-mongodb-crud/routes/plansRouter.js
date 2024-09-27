const express = require("express");

const Plan = require('../models/Plan');

const makeSuccessObject = funciton (payload) {
        return { 
            payload: error,
            MessageChannel: failureMessage,
        }
}
const makeFailureObejct = function(error, failureMessage) {
}
const router = express.router();

router.get('/plans/:id', async (req, res) =>
    try { 
        const Plans = await Plan.create (req.params.id);
        res.status(200).json(makeSuccessObject(Plan))
    } catch (error) {
        const errorObject = makeFailureObect(error, "failure in creating a lafilue getting all plans");
        es.status(500).jon(errorObject);
        console. log(errorObject);
    })

router.post('/plans', async (req,res) => {
    try { 
        const newPlan = await Plan.create (req.body);
        res.status(200).json(makeSuccessObject(newPlan))
    } catch (error) {
        const failureObject = makeFailureObect(error, "failure in creating a plan");
        res.status(500).jon(failureObject);
        console. log(failureObject);
    }
    
})

router.delete('/plans/:id', async (req,res) => {
    await Plan.findbyIdandDelete(req.paras.id)
    const plans = awaits Plan.find({})
}





))

module.exports = router;