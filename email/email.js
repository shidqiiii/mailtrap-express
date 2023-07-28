require("dotenv").config();
const Email = require("email-templates");
const path = require("path");

const SendverifyUser = async (user) => {
    const sendEmail = new Email({
        message: {
            from: "Mailtrap <noreply@email.com>",
        },
        send: true,
        transport: {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        },
        preview: false,
    });

    try {
        await sendEmail.send({
            template: path.resolve(__dirname, "verif-register"),
            message: {
                to: user.email,
            },
            locals: {
                name: user.name,
                url: `http://localhost:5000/user/verify/${user.user_id}`,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { SendverifyUser };
