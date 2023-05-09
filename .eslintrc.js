module.exports = {
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    'react/require-default-props': 'off',
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.*",
          "**/.storybook/**/*.*"
        ],
        "peerDependencies": true
      }
    ],
   /*"react/jsx-props-no-spreading": [{
    "html": "ignore",
    "custom": "ignore",
    "explicitSpread": "ignore",
    }]*/
  }
};
