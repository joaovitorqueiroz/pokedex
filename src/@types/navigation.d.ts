import { PokemonColorPalette } from 'src/models/PokemonColorPalette';

export type DetailsParams = {
  id: number | undefined;
  name: string | undefined;
  palette: PokemonColorPalette;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      splash: undefined;
      home: undefined;
      details: DetailsParams;
    }
  }
}
