import axios from 'src/services/axios';
import { PokemonList } from 'src/models/PokemonList';
import { PokemonDetails } from 'src/models/PokemonDetails';

export const getPokemon = async () => {
  const { data } = await axios.get('/pokemon?limit=900');

  return data as PokemonList;
};

export const getPokemonDetailsByName = async (name: string) => {
  const { data } = await axios.get(`/pokemon/${name}`);

  return data as PokemonDetails;
};
