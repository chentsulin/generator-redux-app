/* eslint-disable global-require */
describe('configureStore', () => {
  const _ENV = process.env.NODE_ENV;
  afterEach(() => {
    process.env.NODE_ENV = _ENV;
    jest.resetModules();
  });

  it('should use dev configureStore when NODE_ENV=development', () => {
    process.env.NODE_ENV = 'development';
    const developmentConfigureStore = require('../configureStore.dev').default;
    const configureStore = require('../configureStore').default;
    expect(configureStore).toBe(developmentConfigureStore);
  });

  it('should use prod configureStore when NODE_ENV=production', () => {
    process.env.NODE_ENV = 'production';
    const productionConfigureStore = require('../configureStore.prod').default;
    const configureStore = require('../configureStore').default;
    expect(configureStore).toBe(productionConfigureStore);
  });

  it('should use prod configureStore when NODE_ENV=test', () => {
    process.env.NODE_ENV = 'test';
    const productionConfigureStore = require('../configureStore.prod').default;
    const configureStore = require('../configureStore').default;
    expect(configureStore).toBe(productionConfigureStore);
  });
});
