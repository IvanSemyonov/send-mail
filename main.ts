import * as core from '@actions/core'
const nodemailer = require('nodemailer')

async function main() {

    try {
        const nodemailer = require('nodemailer')

        let testEmailAccount = await nodemailer.createTestAccount()

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testEmailAccount.user,
                pass: testEmailAccount.pass,
            },
        })

        let result = await transporter.sendMail({
            from: '"Node js" <nodejs@example.com>',
            to: 'semenovio@sovcombank.ru',
            subject: 'Message from Node js',
            text: 'This message was sent from Node js server.',
            html:
                'This <i>message</i> was sent from <strong>Node js</strong> server.',
        });

        console.log(result);

    } catch (error) {
        // @ts-ignore
        core.setFailed(error.message)
    }
}

main();