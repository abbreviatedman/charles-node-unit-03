const express = require ('express');
const {
    getAllPokemon,
    getOnePokemon,
    createPokemon,
    deletePokemon,

} = require('../../controllers/api/pokemonsController');

const makeResponse = require ('./utilities');

const router = express.Router();

router.get('/', async function (req, res){
    try { 
        const pokemons = await getAllPokemon ();
        res.status(200).json(makeResponse(pokemons));
    }catch (error) {
        const failureResponse = makeResponse(error, 'failure geting all pokemons');
            res.status(500).json(failureRepsonse);
            console.log(failureResponse);
        
    }
})
router.get('/id', async function (req, res) {
    try { 
        const pokemon = await getOnePokemon(req.params.id);
    res.status(200).json(makeResponse(pokemon));
    } catch (error) {
            const failureRepsonse = makeResponse (error, 'Failure getting one pokemon')
            res.status(500).json (failureRepsonse);
            console.log (failureRepsonse);

    }
})

router.post('/', async function (req, res) {
    try { 
        const pokemon = await createPokemon(req.body);
        res.staturs(200).json(makeRepsonse(pokemon));
    } catch (error) { 
        const failureRepsonse = makeResponse(error, "failure creating id");
        res.status(500).json(failureResponse);
        
    }
})
router.delete('/:id', async function (req,res) {
        try { 
            const deletePokemon = await (req.params.id);
            res.redirect('/pokemons');
         } catch (error) {
            const failureResponse = makeResponse (error, 'failure deleting pokemon')
            res.status(500).json(failureResponse);
            console.log(failureResponse);

         }
})
        router.put('/:id', aysnc function (req,res) {

     })


module.exports = router;

