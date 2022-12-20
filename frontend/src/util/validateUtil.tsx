export const passwordRegExp = /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

export const validateRequired = (value?: string) => {
  return !value && '깜빡하셨습니다';
};

export const requiredMessage = '깜빡하셨습니다.';

export const validateName = (username: string) => {
  return username.length > 2 && username.length < 21 ? true : '이름은 2자이상 20자이하로 등록해주세요.';
};

export const validateEmail = (email: string) => {
  const regExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;
  return email.match(regExp) ? true : '올바른 형식이 아닙니다.';
};

export const validatePassword = (password: string) => {
  const regExp = /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  return password.match(regExp) ? true : '특수문자와 숫자를 최소 1개씩 포함하여 최소 8자이상 등록해주세요.';
};
