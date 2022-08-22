import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { JWT_SALT } = process.env;

export const createToken = (userInfo) => {
  return jwt.sign(userInfo, JWT_SALT);
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SALT);
};

export const isCorrectPwd = (pwd, dbPwd) => {
  return bcrypt.compare(pwd, dbPwd);
}

/**
 * password를 hash 합니다.
 * @param { string } pwd 
 */
export const hashPwd = async (pwd) => {
  return await bcrypt.hash(pwd, +process.env.PWD_ROUNDS);
};

export const email_reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const pwd_reg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const USER_VALIDATION_ERRORS = {
  EMPTY_FORM: "이메일 혹은 패스워드 값이 비어있습니다",
  INVALID_EMAIL: "이메일 형식에 맞게 입력해주세요",
  INVALID_PASSWORD: "패스워드는 8자 이상이어야 합니다",
  USER_NOT_FOUND: "로그인에 실패했습니다",
  EXIST_EMAIL: "이미 존재하는 메일입니다",
};