const express = require('express');

const {
    getAllPokemon,
    getOnePokemon,
    createdPokemon,
    deletePokemon,
} = require('../../controllers/api/pokemonsController');

const { createPokemon } = require('../../../api/pokemonsController');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
})

router.get('/pokemons', async function (req, res) {
    try {
        const pokemons = await getAllPokemon();
        res.render('pokemons', {pokemons})
    } catch (error) {
        console.log('error rendering pokemons page');
        console.log(error);
        res.send('404, pokemons not found');
    }
})

router.get('/pokemon/:id', async function (req, res) {
    try {
        const pokemon = await getOnePokemon(req.params.id);
        res.render('pokemon', {pokemon});
    } catch (error) {
        console.log('error rendering pokemon page');
        console.log(error);
        res.send('404, pokemon not found');
    }
})
router.get('/create-pokemon', function (req,res) {
    res.render('create-pokemon');
})
router.post('/create-pokemon', async function(renq,res){
        const pokemon = req.body;
        pokemon.Moves = pokemon.Moves.split('')
        try {
            const createdPokemon = await createPokemon(pokemon);
            res.removeHeader('pokemon', {pokemon: newPokemon});

        }catch (error) {
            console.log(error);
            res.send('Error creating pokemon')
        }
    
})
            router.get('/confirm-deletion/:id', async function (req,res){
                try { 
                    const pokemon = await getOnePokemon (req.param.id);
                    res.render("confirm-deletion", {pokemon})
                } catch (error) { 
                    res.send ("Error confimring pokemon deletion.");

                }    
            })
router.delete('/pokemon/;id', async function (req,res)
        try { 
            await deletePokemon (req.params.id);
            res.redirect('/pokemons');
         } catch (error) {
    
    }
})

module.exports = router;