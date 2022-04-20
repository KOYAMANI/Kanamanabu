const request = require('supertest');
const app = require('./server')

describe("GET /api/chapters", () =>{

    test("Get chapters by title", async () => {
        const res = await request(app).get("/api/chapters/hiragana").send({
        })
        expect(res.statusCode).toBe(200)
    });

})