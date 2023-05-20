export const nicknameRegex = /^[a-zA-Z0-9._]+$/;
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const textPattern = /^[A-Za-z0-9\s\-_\.\,\!\?\"\'\:\;\(\)\[\]\…\“\”\{\}\—\<\>\$\%\@\#\&\*\+\=\|\~\`\^\’\/\\\u0022]+$/;

export const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*(?: [A-Za-z]+\-[A-Za-z]+)*$/;