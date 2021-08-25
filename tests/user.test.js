const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user')

const userOne = {
    name: "Mike",
    email: "mike@exapmle.com",
    password:"jrsksdjfis"
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})


test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Bassit',
        email:'barsbrwn@gmail.com',
        password: 'kjhygyghh'
    }).expect(201)
})

test('Should log in new user', async()=> {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should  not login non-existent user', async()=> {
    await request(app).post('/users/login').send({
        email:"b@g.com",
        password: "asdjf"
    }).expect(400)
})