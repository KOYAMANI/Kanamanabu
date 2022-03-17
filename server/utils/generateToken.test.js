const generateToken = require("./generateToken");
const env = process.env;


describe("generate JWT token", () => {
    // Mocking process.env
    beforeEach(() => {
        jest.resetModules();
        process.env = {
            ...env,
            JWT_SECRET : "jwtSecret",
        };
    });

    test("", () => {
        const id = 'testUserId'
        expect(generateToken(id, "id")).toEqual(expect.any(String));
    });

    afterEach(() => {
        process.env = env;
    });
});

