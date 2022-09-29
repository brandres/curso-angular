import { faker } from '@faker-js/faker';

const database: any = { books: [], users: [] }
const total = 50
for (let i = 1; i < total; i++) {
  database.books.push({
    id: i,
    title: faker.lorem.words(),
    description: faker.lorem.sentences(),
    published: true
  });
  database.users.push({
    id: i,
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    useragent: faker.internet.userAgent()

  })
}
console.log(JSON.stringify(database))
