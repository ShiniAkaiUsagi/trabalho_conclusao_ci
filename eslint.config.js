import cypress from 'eslint-plugin-cypress';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Especifica as extensões que o ESLint deve verificar
    ignores: ['node_modules/**'], // Ignora a pasta node_modules

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        browser: 'readonly',
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      ...cypress.configs.recommended.rules,
      ...prettierConfig.rules, // Adiciona regras do Prettier para evitar conflitos
    },
  },
];
