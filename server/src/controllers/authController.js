import { createToken, isCorrectPwd, hashPwd } from "../utils/ahthUtils.js";
import { formValidator, findUser, createUser } from "../services/userService.js";
import { USER_VALIDATION_ERRORS } from "../utils/ahthUtils.js";
import c from 'chalk';


export const login = async (req, res) => {
  const { userName, email, password } = req.body;
  const { isValid, message } = formValidator({ email, password});

  if(!isValid) {
    return res.status(409).json({
      message
    })
  };

  const user = await findUser(email);
  
  if(!user) {
    res.status(400).json({
      message: USER_VALIDATION_ERRORS.USER_NOT_FOUND
    })
  } else {
    const hashed = hashPwd(password);
    if(isCorrectPwd(hashed, user.password)) {
      res.status(200).json({
        token: createToken({ userName, email }),
      });
    } else { 
      res.status(400).json({
        message: '비밀번호가 일치하지 않습니다.'
      })
    }
  }

}

/**
 * signUp Controller
 * @param req  
 * @param res  
 * @returns {}
 */
export const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  const { isValid, message } = formValidator({ email, password});
  
  if(!isValid) {
    return res.status(400).json({
      message
    })
  }

  const existUser = await findUser(email);

  if(existUser) {
    return res.status(409).json({
      message: USER_VALIDATION_ERRORS.EXIST_EMAIL
    });
  } else {
    try {
      await createUser({ userName, email, password });
      return res.status(200).json({
        message: '회원가입이 정상적으로 이루어 졌습니다.'
      })

    } catch(e) {
      throw Error(e);
    }
  }
};