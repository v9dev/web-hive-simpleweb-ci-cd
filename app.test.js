const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should respond with "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
  });
});
