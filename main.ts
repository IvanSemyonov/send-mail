import * as core from '@actions/core'
import emails from './emails.json';
const nodemailer = require('nodemailer')

async function main() {

    console.log(emails.IvanSemyonov)
    console.log(emails.IvanSemyonov)
    console.log(emails.IvanSemyonov)
    console.log(emails.IvanSemyonov)
    console.log(emails.IvanSemyonov)
    console.log(emails.IvanSemyonov)
    console.log(emails.IvanSemyonov)
    try {
        const server_address = core.getInput('server_address')
        const server_port = core.getInput('server_port')
        const username = core.getInput('username')
        const password = core.getInput('password')
        const subject = core.getInput('subject')
        const to = core.getInput('to')
        const from = core.getInput('from')
        const body = core.getInput('body')

        let transporter = nodemailer.createTransport({
            host: server_address,
            port: server_port,
            secure: true,
            auth: {
                user: username,
                pass: password,
            },
        })

        let result = await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: body,
        });

        console.log(result);

    } catch (error) {
        // @ts-ignore
        core.setFailed(error.message)
    }
}

main();