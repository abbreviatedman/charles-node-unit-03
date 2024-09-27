const Pokemon = required('../../')

const getAllPokemon = async function () {

try {

    const pokemons = await Pokemon.find ({});

    return pokemons;
} catch (error) {
    throw error;
    }
}

const getOnePokemon = async function(id) {
    try {
        const pokemon = await Pokemon.findById(id);
        if (!pokemon) {
            throw "404- No Pokemon found by ID."
        }

            return pokemon;
    }   catch (error) {
            throw error;
    }
}

const createPokemon = async function (pokemonData) {
    try{ 
        const pokemon = await Pokemon.create(pokemonData);

        return pokemon; 
    }catch (error) {
        throw error;
    }
}
const deletePokemon = async function (id) {
    try {
        const removedPokemon = await Pokemon.findByIdAndDelete(id);
        return removedPokemon;
    } catch (error) {
        throw error;
    }
 }

 const updatePokemon = async function (id,updateData) {
    try {
        const changedPokemon = await Pokemon.findByIdAndUpdate(
            id,
            updateData,
            {new: true}

        )
        return changedPokemon {

        } catch (error) {

        }
    }
 }

module.exports = {
    getAllPokemon,
    getOnePokemon,
    createPokemon,
    deletePokemon,
    updatePokemon,
}