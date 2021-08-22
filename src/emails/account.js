const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name ) => {
    sgMail.send({
        to: email,
        from: 'barseetbrown@gmail.com',
        subject: 'Welcome',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail = ( email, name ) => {
    sgMail.send({
        to: email,
        from: 'barseetbrown@gmail.com',
        subject: 'Goodbye',
        text: `Goodbye ${name}. It's sad to see you go. Is there anything we could have done to keep you?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}