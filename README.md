# Pokédex

Este projeto foi criado como teste prático para a empresa VR Benefícios. 
O objetivo é criar uma aplicação que funcione como uma pokédex.

Este projeto utiliza [pokéapi](https://pokeapi.co/) com graphQL.


## Funcionalidades

Abaixo uma lista das funcionalidades que esse projeto possui separadas por features.

### Listar pokemons

- Exibe uma lista de pokemons ordenados pelo seu número nacional da Pokédex.

<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/210359098-fc53e317-7d5f-4115-afec-536fb462eae8.png" width="300px" /><br>
 <b>Lista de pokemons</b>
</h4>

### Busca por pokemons

- Permite que sejam executado buscas por pokemons digitando uma dessas informações no campo de busca:
  * Número nacional da Pokédex.
  * Nome completo ou uma parte dele.

<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/210357801-f2f72c14-4e11-4b75-989f-493306c04da1.png" width="300px" /><br>
 <b>Busca de pokemons pelo nome</b>
</h4>

### Detalhes do pokemon

- A tela de detalhes apresenta uma descrição sobre o pokemon além de outros detalhes como:
  * Nome.
  * Tipos do pokemon.
  * Peso.
  * Altura.
  * Características do pokemon (Hp, Ataque, Defesa, Ataque Especial, Defesa Especial, Velocidade)

<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/210366463-5642f23a-b106-4dd6-b569-0bb1a6ac3a37.png" width="300px" /><br>
 <b>Detalhes do Pokemon</b>
</h4>

### Componente de Loading

- Enquanto o usuário aguarda a finalização da requisição um componente de loading é exibido na tela.

<h4 align="center">
<img src="https://user-images.githubusercontent.com/58531490/210369147-55d2fc6e-efe5-499a-8f2f-059a3615dda6.gif" width="300px" /><br>
 <b>Componente de Loading</b>
</h4>

&nbsp;
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

&nbsp;

## Execução dos testes


O projeto possui alguns testes e podem ser executados pelo comando:

```bash
  yarn run test
```

 Os testes também são executados automaticamente pelo GitHub Actions assim que um push para branch 'main' é realizado.

&nbsp;

## Tecnologias utilizadas

- React Native
- TypeScript
- Styled Components
- React native reanimated
- React native vector icons
- Lottie: Para animações personalizadas. 
- GraphQL, Graphql-request: Para otimizar os requests permitindo a busca apenas de informações necessarias. 
- React Query: Por ser uma aplicação mais simples optei por não utilizar o redux e usar apenas o react query para gerenciar as requisições criando estados em cache garantindo performance e simplificando atualização de dados mediante alguma mudança.
- Jest e React Native Testing Library: Para testes unitários e de integração. 

Além disso, para garantir um melhorar a padronização do código e sanitização foram usadas as tecnologias abaixo:

- Eslint: Padronização do código.
- Prettier: Correções automáticas de estrutura de código.
- Commitlint: Manter um padrão da forma de como os commits são escritos e muito importante para um crescimento de um projeto. Commitlint impedi que commits que estejam fora do padrão do conventional commits seja realizado. 
- Husk e LintStage: Para verificar e impedir que códigos que não estejam seguindo o padrão definido no eslint sejam publicados.
