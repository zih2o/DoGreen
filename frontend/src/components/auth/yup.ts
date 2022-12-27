import * as yup from 'yup';
import { useMemo } from 'react';
import { passwordRegExp } from '../../util/validateUtil';

export const userValidation = () => {
  const schema = useMemo(() => {
    return yup.object({
      email: yup
        .string()
        .required('이메일을 입력해주세요.')
        .email('올바른 이메일 형식이 아닙니다.')
        .min(3, '이메일은 3자리 이상이어야 합니다.'),
      username: yup
        .string()
        .required('이름을 입력해주세요.')
        .max(15, '이름은 15자리 이하여야 합니다.')
        .min(2, '이름은 2자리 이상이어야 합니다.'),
      password: yup
        .string()
        .required('비밀번호를 입력해주세요.')
        .max(15, '비밀번호는 15자리 이하여야 합니다.')
        .min(4, '비밀번호는 8자리 이상이어야 합니다.')
        .matches(passwordRegExp, '알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요.'),
      conforimPassword: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
    });
  }, []);

  return { schema };
};

export const loginValidation = () => {
  const schema = useMemo(() => {
    return yup.object({
      email: yup.string().required('이메일을 입력해주세요.').email('올바른 이메일 형식이 아닙니다.'),
      password: yup.string().required('비밀번호를 입력해주세요.'),
    });
  }, []);

  return { schema };
};

export const editValidation = () => {
  const schema = useMemo(() => {
    return yup.object({
      username: yup
        .mixed()
        .test(
          'usernameLength',
          '이름은 2자리 이상, 15자리 이하여야 합니다.',
          (value) => value.length === 0 || (value.length > 1 && value.length < 16),
        ),
      oldPassword: yup.string().required('현재 비밀번호를 입력해주세요.'),
      password: yup
        .string()
        .notRequired()
        .max(15, '비밀번호는 15자리 이하이어야 합니다.')
        .min(4, '비밀번호는 8자리 이상이어야 합니다.')
        .matches(passwordRegExp, '알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요.'),
      conforimPassword: yup
        .string()
        .notRequired()
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
      imgUrl: yup.mixed(),
      bio: yup.string().notRequired().max(40, '자기소개는 40자 이하이어야 합니다.'),
    });
  }, []);

  return { schema };
};
