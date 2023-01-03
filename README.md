# Pokédex

Este projeto foi criado como teste prático para a empresa VR Benefícios. 
O objetivo é criar uma aplicação que funcione como uma pokédex.

Este projeto utiliza [pokéapi](https://pokeapi.co/) com graphQL.


## Funcionalidades

Abaixo uma lista das funcionalidades que esse projeto possui ordenadas por features.

### Listar pokemons

- Exibe uma lista de pokemons ordenados pelo seu número nacional da Pokédex.

### Busca por pokemons

- Permite que sejam executados buscas por pokemons informando uma dessas informações:
  * Número nacional da Pokédex.
  * Nome completo ou uma parte dele.

### Detalhes do pokemon

- A tela de detalhes apresenta uma descrição sobre o pokemon além de outros detalhes como:
  * Nome.
  * Tipos do pokemon.
  * Peso.
  * Altura.
  * Estatisticas do pokemon (Hp, Ataque, Defesa, Ataque Especial, Defesa Especial, Velocidade)


## Instalação

Este projeto utiliza o yarn.

Clone o repositório para um diretório em sua máquina e execute o seguinte comando:

```bash
  yarn install
```

Ao final da Instalação para executar o projeto execute o seguinte comando:

```bash
  cd ios && pod install
```

Ao final das instalações dos arquivos de pod, volte a pasta raiz com o seguinte comando:

```bash
  cd ..
```

Para executar o aplicativo no Android execute o comando abaixo:

```bash
  npx react-native run-android
```

Para executar o aplicativo no IOS execute o comando abaixo:

```bash
  npx react-native run-ios
```

## Execução dos testes


O projeto possui alguns testes e podem ser executados pelo comando:

```bash
  yarn run test
```

## Stack utilizada

- React Native
- TypeScript
- Styled Components
- React native reanimated
- React native vector icons
- Lottie: Para animações personalizadas. 
- GraphQL
- React Query: Para gerenciar as requisições criando estados em cache melhorando a performance e simplificando atualização de dados mediante alguma mudança.
- Jest e React Native Testing Library: Para testes unitários e de integração. 

Além disso, para garantir um melhorar a padronização do código e sanitização foram usadas as tecnologias abaixo:

- Eslint: Padronização do código.
- Prettier: Correções automáticas de estrutura de código.
- Commitlint: Manter um padrão da forma de como os commits são escritos e muito importante para um crescimento de um projeto. Commitlint impedi que commits que estejam fora do padrão do conventional commits seja realizado. 
- Husk e LintStage: Para verificar e impedir que códigos que não estejam seguindo o padrão definido no eslint sejam publicados.
