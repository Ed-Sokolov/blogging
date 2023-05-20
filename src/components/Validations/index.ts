import * as Yup from "yup";
import {emailRegex, namePattern, nicknameRegex, passwordRegex, textPattern} from "./Regexes";

const validFileExtensions = {image: ['jpg', 'jpeg', 'png']};

function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const validationSchemaForLogin = Yup.object().shape({
    nickname: Yup.string()
        .required('Nickname is required')
        .matches(nicknameRegex, 'Nickname should only contain letters, numbers, dots and underscores')
        .min(4, 'Nickname must be at least 4 characters')
        .max(100, 'Nickname must not exceed 100 characters'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(32, 'Password must not exceed 32 characters')
        .matches(
            passwordRegex,
            'Password must contain at least one number, one lowercase letter, one uppercase letter'
        ),
})

export const validationSchemaForRegister = Yup.object().shape({
    nickname: Yup.string()
        .required('Nickname is required')
        .matches(nicknameRegex, 'Nickname should only contain letters, numbers, dots and underscores')
        .min(4, 'Nickname must be at least 4 characters')
        .max(100, 'Nickname must not exceed 100 characters'),
    email: Yup.string()
        .required('Email is required')
        .matches(emailRegex, 'Incorrect email address')
        .min(4, 'Email must be at least 4 characters')
        .max(100, 'Email must not exceed 100 characters'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(32, 'Password must not exceed 32 characters')
        .matches(
            passwordRegex,
            'Password must contain at least one number, one lowercase letter, one uppercase letter'
        ),
});

export const validationSchemaForStore = Yup.object().shape({
    title: Yup.string()
        .required('Title is required')
        .matches(textPattern, 'Only English alphabet is allowed')
        .min(5, 'Title must be at least 5 characters')
        .max(150, 'Title must not exceed 150 characters'),
    text: Yup.string()
        .required('Text is required')
        .matches(textPattern, 'Only English alphabet is allowed')
        .min(5, 'Text must be at least 5 characters')
        .max(5000, 'Text must not exceed 5000 characters'),
    photo: Yup.mixed()
        .required('Photo is required')
        .test('is-valid-type', 'Not a valid image type',
            (value) => {
                const file = value as { name: string };
                return isValidFileType(value && file.name.toLowerCase(), "image")
            }),
});

export const validationSchemaForUpdate = Yup.object().shape({
    title: Yup.string()
        .required('Title is required')
        .min(5, 'Title must be at least 5 characters')
        .max(150, 'Title must not exceed 150 characters'),
    text: Yup.string()
        .required('Text is required')
        .min(5, 'Text must be at least 5 characters')
        .max(5000, 'Text must not exceed 5000 characters'),
    photo: Yup.mixed()
        .notRequired()
        .test('is-valid-type', 'Not a valid image type',
            (value) => {
                if (!value) {
                    return true;
                }
                const file = value as { name: string };
                return isValidFileType(value && file.name.toLowerCase(), "image")
            })
});

export const validationSchemaForComment = Yup.object().shape({
    text: Yup.string()
        .required('Text is required')
        .matches(textPattern, 'Only English alphabet is allowed')
        .min(5, 'Text must be at least 5 characters')
        .max(500, 'Text must not exceed 500 characters'),
});

export const validationSchemaForAbout = Yup.object().shape({
    nickname: Yup.string()
        .required('Nickname is required')
        .matches(nicknameRegex, 'Nickname should only contain letters, numbers, dots and underscores')
        .min(4, 'Nickname must be at least 4 characters')
        .max(100, 'Nickname must not exceed 100 characters'),
    name: Yup.string()
        .matches(namePattern, 'Only English alphabet is allowed')
        .max(100, 'Text must not exceed 100 characters'),
    about: Yup.string()
        .matches(textPattern, 'Only English alphabet is allowed')
        .max(500, 'Text must not exceed 500 characters'),
});

export const validationSchemaForAvatar = Yup.object().shape({
    photo: Yup.mixed()
        .test('is-valid-type', 'Not a valid image type',
            (value) => {
                if (!value) {
                    return true;
                }
                const file = value as { name: string };
                return isValidFileType(value && file.name.toLowerCase(), "image")
            }),
});