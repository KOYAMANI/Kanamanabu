const request = require('supertest');
const app = require('../server')

describe("GET /api/quizzes", () =>{

    test("Fetch Quiz Category", async () => {
        const res = await request(app).get("/api/quizzes/categories").send({
        })
        expect(res.statusCode).toBe(200)
    });

    test("Sort Quiz by Category", async () => {
        const res = await request(app).get("/api/quizzes/hiragana").send({
        })
        expect(res.statusCode).toBe(200)
    });

    test("Sort Quiz by Category and SubCategory", async () => {
        const res = await request(app).get("/api/quizzes/hiragana/a-group").send({
        })
        expect(res.statusCode).toBe(200)
    });

})

