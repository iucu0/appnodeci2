const app = require('./app')
const supertest = require('supertest')
const request = supertest(app)

describe('/test endpoint', () => {
    test("Debe devolver un Hello World", async () => {
        const response = await request.get("/")
        const body = JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect(body.message).toBe('Hello World!');
    })
})