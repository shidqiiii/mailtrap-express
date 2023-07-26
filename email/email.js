const Email = require("email-templates");
const path = require("path");

const SendverifyUser = async (user) => {
    console.log(user.name);
    const sendEmail = new Email({
        message: {
            from: "Mailtrap <noreply@email.com>",
        },
        send: true,
        transport: {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "a6d427eed00946", // your Mailtrap username
                pass: "2ad8e535bb21d8", //your Mailtrap password
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
