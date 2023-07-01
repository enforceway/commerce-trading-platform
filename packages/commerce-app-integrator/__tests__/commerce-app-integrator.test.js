'use strict';

const commerceAppIntegrator = require('..');
const assert = require('assert').strict;

assert.strictEqual(commerceAppIntegrator(), 'Hello from commerceAppIntegrator');
console.info('commerceAppIntegrator tests passed');
