import { faker } from '@faker-js/faker';

const database: any = { books: [] }
const total = 50
for (let i = 1; i < total; i++) {
  database.books.push({
    id: i,
    title: faker.lorem.words(),
    description: faker.lorem.sentences(),
    published: true
  })
}
console.log(JSON.stringify(database))
