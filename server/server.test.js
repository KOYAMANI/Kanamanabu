const request = require('supertest');
const app = require('./server')


describe("POST /api/users", () =>{

    const rand = Math.random().toString(16).substr(2, 8);

    test("User registration successful", async () => {
        const res = await request(app).post("/api/users").send({
            name : rand,
            email : `${rand}@test.com`,
            password :'validPassword',
            isAdmin: true,
            pic: 'pic'
        })
        expect(res.statusCode).toBe(200)
    });

    test("User registration fail; missing value", async () => {
        const res = await request(app).post("/api/users").send({
            name: 'thisShouldBeFail',
            password :'thisShouldBeFail',
            isAdmin: true,
            pic: 'pic'
        })
        expect(res.statusCode).toBe(500)
    });

    test("User registration fail; existing email", async () => {
        const res = await request(app).post("/api/users").send({
            name : rand,
            email : `paul.ebert@code.berlin`,
            password :'thisShouldBeFail',
            isAdmin: true,
            pic: 'pic'
        })
        expect(res.statusCode).toBe(400)
    });

    test("User login successful", async () => {
        const res = await request(app).post("/api/users/login").send({
            email : `${rand}@test.com`,
            password :'validPassword',
        })
        expect(res.statusCode).toBe(200)
        expect(res.body.token).toEqual(expect.any(String));
    });

    test("User login fail; wrong password", async () => {
        const res = await request(app).post("/api/users/login").send({
            email : `${rand}@test.com`,
            password :'inValidPassword',
        })
        expect(res.statusCode).toBe(400)
    });

    test("User login fail; wrong email", async () => {
        const res = await request(app).post("/api/users/login").send({
            email : `inValidEmail`,
            password :'validPassword',
        })
        expect(res.statusCode).toBe(400)
    });

    test("User info update success", async () => {
        // Login
        const loginRes = await request(app).post("/api/users/login").send({
            email : `${rand}@test.com`,
            password :'validPassword',
        })
        // Configure token
        const token = await loginRes.body.token
        // Update profile
        const res = await request(app).post("/api/users/profile")
            .set({ Authorization: `Bearer ${token}` })
            .send({
                name : 'newName',
            })
        expect(res.statusCode).toBe(200)
    });

    test("User info update fail; Invalid token", async () => {
        const res = await request(app).post("/api/users/profile")
            .set({ Authorization: `InvalidToken` })
            .send({
                name : 'newName',
            })
        expect(res.statusCode).toBe(401)
    });

    test("User info update fail; No token", async () => {
        const res = await request(app).post("/api/users/profile").send({
            name : 'CannotUpdate',
        })
        expect(res.statusCode).toBe(401)
    });

})

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