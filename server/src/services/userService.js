import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../../models/index.js';
import { email_reg, pwd_reg, USER_VALIDATION_ERRORS, hashPwd, verifyToken} from '../utils/ahthUtils.js';
import c from 'chalk';

const { log } = console;

/**
 * DB에 저장되어 있는지 여부 확인
 * @param {string} email 
 */
export const findUser = async (email) => {
  return await db.User.findOne({ where: { email }});
};

/**
 * 신규 유저를 생성합니다.
 * @param {{userName: string, email: string, password: string}} userInfo 
 */
export const createUser = async (userInfo) => {
  const { userName, email, password } = userInfo;

  // const hashedPwd = await bcrypt.hash(password, +process.env.PWD_ROUNDS);
  const hashedPwd = await hashPwd(password);

  const newUser = {
    userName,
    email,
    password: hashedPwd
  };

  try {
    const data = await db.User.create(newUser);

    return data;
  } catch(e) {
    throw new Error(e);
  }

};


/**
 * 사용자의 role을 체크 합니다.
 * @param { string } authorizaion 
 * @returns boolen
 */
export const roleCheck = async (authorizaion) => {
  const token = authorizaion.split(' ')[1];
  const verified = verifyToken(token);

  const dbData = await db.User.findOne({ where: { email: verified.email }});

  return dbData && dbData.role === 0 ? true : false;
};

/**
 * 받은 form의 유효성을 검사합니다.
 * @param { { email: string, password: string } } form;
 *  every 메서드를 활용해 빈 값을 찾아 냅니다.
 */ 
export const formValidator = (form) => {

  if(!Object.values(form).every(value => value)) {
    return {
      isValid: false,
      message: USER_VALIDATION_ERRORS.EMPTY_FORM
    }
  }

  if(!email_reg.test(form.email)) {
    return {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_EMAIL
    }
  }

  if(!pwd_reg.test(form.password)) {
    return {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_PASSWORD
    }
  }

  return {
    isValid: true,
    message: 'Success!!'
  }
};

export const userList = async () => {
  return await db.User.findAll();
};