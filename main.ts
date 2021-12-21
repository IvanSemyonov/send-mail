import * as core from '@actions/core'
const nodemailer = require('nodemailer')

async function main() {
    let server_address = core.getInput('server_address')
    let server_port = core.getInput('server_port')
    let username = core.getInput('username')
    let password = core.getInput('password')
    let subject = core.getInput('subject')
    let to = core.getInput('to')
    let from = core.getInput('from')
    let body = core.getInput('body')


    try {
        let transporter = nodemailer.createTransport({
            host: server_address,
            port: server_port,
            secure: true,
            auth: {
                user: username,
                pass: password,//'quqpjiidfajnppkf',
            },
        })

        let result = await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: body,
        });

        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");
        console.log("1234567890-");

    } catch (error) {
        // @ts-ignore
        core.setFailed(error.message)
    }
}

main();