const makeResponse = function(payload, message = 'success') {
 return { 
        message: 'message',
        payload: payload, 
    }
}

//how it looks for failure
makeResponse(error, 'failure in getting all pokemons');

//how it looks for succes 
makeResponse(pokemons)