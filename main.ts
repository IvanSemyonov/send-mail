import * as core from '@actions/core'
const nodemailer = require('nodemailer')

async function main() {

    try {
        let transporter = nodemailer.createTransport({
            host: 'mail-int.sovcombank.group',
            port: 25,
            secure: false,
            // auth: {
            //     user: 'auto-merge-rc-job@yandex.ru',
            //     pass: 'quqpjiidfajnppkf',
            // },
        })

        let result = await transporter.sendMail({
            from: 'auto-merge-rc-job',
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