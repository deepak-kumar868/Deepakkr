const nodeMailer = require("nodemailer");

const sendEmail = async (userMessage) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: process.env.SMPT_MAIL,
        subject: "CONTACT REQUEST FROM PORTFOLIO",
        text: userMessage,
    }

    await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;


