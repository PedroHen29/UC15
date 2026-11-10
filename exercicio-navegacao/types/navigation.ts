import type { NavigatorScreenParams } from '@react-navigation/native';

export type InicioStackParamList = {
  Pokemons: undefined;
  Detalhes: { pokemonId: number };
};

export type AppTabParamList = {
  Inicio: NavigatorScreenParams<InicioStackParamList>;
  Favoritos: undefined;
  Configuracoes: undefined;
};

export type AppDrawerParamList = {
  Pokemon: NavigatorScreenParams<AppTabParamList>;
  Favoritos: undefined;
  Configuracoes: undefined;
};