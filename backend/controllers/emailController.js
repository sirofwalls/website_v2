const asyncHandler = require('express-async-handler')
const nodemailer = require('nodemailer')


// Decription: Set/Create the Workorder
// Route: POST /api/v2/email
// Access: Public to App Only
const sendEmail = asyncHandler(async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.messageText) {
        res.status(400)
        throw new Error('Please enter the required data')
    }

    const {
        name,
        email,
        messageText
    } = req.body

    try {
        // Sends the email
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            },
            tls: {
                rejectUnauthorized: true,
                minVersion: "TLSv1.2"
            }
        })

        // Actual mail being sent. Text option is required for compatability with non html clients
        await transport.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: `${name} has requested to communicate from your website contact page`,
            html: `
            <html>
                <body>
                    <div style="
                    border 1px solid black; 
                    font-family: sans-serif;
                    line-hieight: 2;">
                        <h2>Contact Request Details:</h2>
                        <p>Name: ${name}</p>
                        <p>E-Mail: ${email}</p>
                        <p>Message Details:</p>
                        <p>${messageText}</p>
                    </div>
                </body>
            </html>
            `,
            text: `
                Contact Request Details: \n\n
                Name: ${name}\n
                E-Mail: ${email}\n
                Message Details:\n
                ${messageText}\n`
        })

        res.status(200).json({message: 'Email Sent!'})
    } catch (error) {
        console.log(error);
    }
})


module.exports = {
    sendEmail
}