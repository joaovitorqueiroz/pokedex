export default function useUriImagePokemon(id: string) {
  const uriImageSvg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const uriImagePng = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return { uriImageSvg, uriImagePng };
}
