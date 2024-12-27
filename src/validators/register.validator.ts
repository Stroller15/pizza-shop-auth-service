import { checkSchema } from "express-validator";

export default checkSchema({
    firstName: {
        in: ["body"],
        errorMessage: "First name is required",
        isString: {
            errorMessage: "First name must be a valid string",
        },
        notEmpty: {
            errorMessage: "First name cannot be empty",
        },
        trim: true,
        escape: true,
    },
    lastName: {
        in: ["body"],
        errorMessage: "Last name is required",
        isString: {
            errorMessage: "Last name must be a valid string",
        },
        notEmpty: {
            errorMessage: "Last name cannot be empty",
        },
        trim: true,
        escape: true,
    },
    email: {
        in: ["body"],
        errorMessage: "Email is required",
        trim: true,
        isEmail: {
            errorMessage: "Email must be a valid email address",
        },
        notEmpty: {
            errorMessage: "Email cannot be empty",
        },
        normalizeEmail: true,
    },
    password: {
        in: ["body"],
        errorMessage: "Password is required",
        isString: {
            errorMessage: "Password must be a valid string",
        },
        notEmpty: {
            errorMessage: "Password cannot be empty",
        },
        isLength: {
            options: { min: 8 },
            errorMessage: "Password should be at least 8 characters long",
        },
        matches: {
            options: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            errorMessage:
                "Password must include one uppercase letter, one lowercase letter, one number, and one special character",
        },
    },
});