module.exports = {
  defaultCommandTimeout: 10000,
  env: {
    url: 'http://automationpractice.com/index.php',
    usuario: 'teste2021@teste.com.br',
    password: 'teste',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
  },
}