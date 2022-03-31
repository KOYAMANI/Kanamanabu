const { faker } = require('@faker-js/faker');

const generateSignup = (requestParams, ctx, ee, next) => {
    ctx.vars["name"] = faker.name.findName();
    ctx.vars["email"] = faker.internet.email();
    ctx.vars["password"] = faker.internet.password(10);

    return next();
}

const generateLogin = (requestParams, ctx, ee, next) => {
    ctx.vars["email"] = faker.internet.email();
    ctx.vars["password"] = faker.internet.password(10);

    return next();
}

const generateEmail = (requestParams, ctx, ee, next) =>{
    ctx.vars["email"] = faker.internet.email();

    return next();
}

module.exports = {
    generateSignup,
    generateLogin,
    generateEmail
}