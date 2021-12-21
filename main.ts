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
                pass: 'quqpjiidfajnppkf',
            },
        })

        let result = await transporter.sendMail({
            from: 'auto-merge-rc-job@yandex.ru',
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


const server_address = core.getInput('server_address')
const server_port = core.getInput('server_port')
const username = core.getInput('username')
const password = core.getInput('password')
const subject = core.getInput('subject')
const to = core.getInput('to')
const from = core.getInput('from')
const body = core.getInput('body')