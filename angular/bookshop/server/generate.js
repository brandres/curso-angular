"use strict";
exports.__esModule = true;
var faker_1 = require("@faker-js/faker");
var database = { books: [] };
var total = 50;
for (var i = 1; i < total; i++) {
    database.books.push({
        id: i,
        title: faker_1.faker.lorem.words(),
        description: faker_1.faker.lorem.sentences(),
        published: true
    });
}
console.log(JSON.stringify(database));
