const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "Mike",
    email: "mike@exapmle.com",
    password:"jrsksdjfis",
    tokens:[{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
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

test('Should log in existing user', async()=> {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should  not login non-existent user', async()=> {
    await request(app).post('/users/login').send({
        email:"b@g.com",
        password: "asdjf"
    }).expect(400)
})

test('should get profile for user', async() => {
    await request(app)
          .get('/users/me')
          .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
          .send()
          .expect(200)
})

test('should not get profile for unauthenticated user', async()=> {
    await request(app)
          .get('/users/me')
          .send()
          .expect(401)
})

test('should delete account for user', async() => {
    await request(app)
          .delete('/users/me')
          .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
          .send()
          .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('should not delete account for unauthorized user', async() => {
    await request(app)
          .delete('/users/me')
          .send()
          .expect(401)
})