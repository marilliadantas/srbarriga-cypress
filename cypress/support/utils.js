const { fakerPT_BR } = require('@faker-js/faker');

function createUser() {
    return {
        name: fakerPT_BR.person.firstName(),
        email: fakerPT_BR.internet.email().toLowerCase()
    };
}

module.exports = createUser;