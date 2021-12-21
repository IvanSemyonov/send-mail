import * as core from '@actions/core'
const nodemailer = require('nodemailer')

async function main() {

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'auto-merge-rc-job@yandex.ru',
                pass: '5$FrN}52b0TA',
            },
        })

        let result = await transporter.sendMail({
            from: '"Node js" <nodejs@example.com>',
            to: 'semenovio@sovcombank.ru, semyonov.o2001@gmail.com',
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