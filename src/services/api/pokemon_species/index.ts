import axios from 'src/services/axios';
import { PokemonSpeciesDetails } from 'src/models/PokemonSpeciesDetails';

export const getPokemonSpeciesDetailsByName = async (
  id: number | undefined,
) => {
  const { data } = await axios.get(`/pokemon-species/${id}`);

  return data as PokemonSpeciesDetails;
};
