module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb','prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react',
  ],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': 0,
    "import/prefer-default-export": 0,
    "no-unused-vars":1,
    "react/no-array-index-key":0,
    "arrow-body-style": 0,
    "react/jsx-props-no-spreading": 0
  },
};
