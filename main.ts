import * as core from '@actions/core';
const nodemailer = require('nodemailer');
const emails: Map<String, String> = require('./emails.json');

async function main() {
    
    try {
        const server_address = core.getInput('server_address')
        const server_port = core.getInput('server_port')
        const username = core.getInput('username')
        const password = core.getInput('password')
        const subject = core.getInput('subject')
        const githubUsername = core.getInput('to')
        const from = core.getInput('from')
        const body = core.getInput('body')

        console.log(emails)
        console.log(emails.size)
        console.log(emails.get('IvanSemyonov'))

        const to = "ffff";

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
            to: [to, 'semyonov.o2001@gmail.com'],
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