module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          screens: './src/screens',
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
