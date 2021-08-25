const express = require('express')
const User = require('../models/user')
const Auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
const { 
    sendWelcomeEmail, 
    sendCancellationEmail
 } = require('../emails/account')
const router = new express.Router()


router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
      // sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (error) {
        res.status(400).send()
    }
})

router.post('/users/logout', Auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', Auth, async(req, res) => {
    try {
        req.user.tokens = []

        await req.user.save()

        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/users/me', Auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', Auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates' })
    }
    try {
        const user = req.user

        updates.forEach((update) => user[update] = req.body[update])

        await user.save()
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/users/me', Auth, async(req, res) => {
    try {
        await req.user.remove()
        sendCancellationEmail(req.user.email, req.user.name)
        res.send(req.user)
    } catch (error) {
        res.status(400).send()        
    }
})

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb( new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})


router.post('/users/me/avatar', Auth, upload.single('upload'), async(req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250}).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message})
});

router.delete('/users/me/avatar', Auth, async(req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
});

router.get('/users/:id/avatar', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error()
        }

        res.set('content-type','image/png')
        res.send(user.avatar)
    } catch (error) {
        res.status(404).send()
    }
})

module.exports = router