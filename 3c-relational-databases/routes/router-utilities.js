const makeSuccessObject = function (data){
    return { 
        message: 'Success',
        payload: data,
    }
}
const makeFailureObject = funciton (error, failureMessage){ 
    return {
        message: failureMessage,
        payload: error, 
    }
}
module.exports = { 
    makeSuccessObject
}