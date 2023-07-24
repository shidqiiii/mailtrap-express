const createError = require("http-errors");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("../db/models");

const RegisterUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    const schema = Joi.object({
        name: Joi.string().min(5).required().messages({
            "string.empty": "Nama tidak boleh kosong",
            "any.required": "Nama tidak boleh kosong",
            "string.min": "Nama tidak boleh kurang dari {#limit} karakter",
        }),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required().messages({
            "string.empty": "Password tidak boleh kosong",
            "any.required": "Password tidak boleh kosong",
            "string.min": "Password tidak boleh kurang dari {#limit} karakter",
        }),
    });

    const validateBody = schema.validate({ name, email, password }, { abortEarly: false });

    if (validateBody.error) {
        // const error = validateBody.error.details.map((item) => ({ [item.context.key]: item.message }));
        return next(createError(400, "Validasi Gagal"));
    }

    try {
        const checkEmail = await User.findOne({ where: { email: email } });

        if (checkEmail) {
            return next(createError(409, "Email telah digunakan"));
        }

        const hashPassword = bcrypt.hashSync(password, 10);
        await User.create({ name, email, password: hashPassword, is_verified: false });
        return res.status(201).json({ status: "Created", data: null });
    } catch (error) {
        console.log(error);
        next(createError(500));
    }
};
const LoginUser = (req, res, next) => {};
const VerifyUser = (req, res, next) => {};

module.exports = { RegisterUser, LoginUser, VerifyUser };
