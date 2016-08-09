import { expect } from 'chai';
import requireUncached from 'require-uncached';
import developmentConfigureStore from '../configureStore.dev';
import productionConfigureStore from '../configureStore.prod';

describe('configureStore', () => {
  const _ENV = process.env.NODE_ENV;
  afterEach(() => {
    process.env.NODE_ENV = _ENV;
  });

  it('should use dev configureStore when NODE_ENV=development', () => {
    process.env.NODE_ENV = 'development';
    const configureStore = requireUncached('../configureStore').default;
    expect(configureStore).to.equal(developmentConfigureStore);
  });

  it('should use prod configureStore when NODE_ENV=production', () => {
    process.env.NODE_ENV = 'production';
    const configureStore = requireUncached('../configureStore').default;
    expect(configureStore).to.equal(productionConfigureStore);
  });

  it('should use prod configureStore when NODE_ENV=test', () => {
    process.env.NODE_ENV = 'test';
    const configureStore = requireUncached('../configureStore').default;
    expect(configureStore).to.equal(productionConfigureStore);
  });
});
