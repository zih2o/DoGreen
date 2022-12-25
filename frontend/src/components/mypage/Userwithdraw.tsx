import React, { useRef } from 'react';
import { InputContainer } from '../common/InputContainer';
import { ClickButton } from '../FormsAboutInput';

import useUserData from '../../hooks/useUserData';

const Userwithdraw = () => {
  const { withdrawMutaiton: widthdraw } = useUserData();
  const pwdRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!pwdRef.current?.value) {
      alert('비밀번호를 입력해주세요.');
      return;
    } else if (pwdRef.current.value) {
      const currentPassword = pwdRef.current.value;
      widthdraw.mutate(currentPassword);
    }
  };

  return (
    <div className={className.container}>
      <form onSubmit={onSubmit} className={className.form}>
        <p className={className.title}>정말로 떠나시나요?</p>
        <InputContainer label="비밀번호" inputProp="password">
          <input
            ref={pwdRef}
            type="password"
            id="password"
            className={className.input}
            placeholder="비밀번호을 입력하시면 탈퇴할 수 있습니다."
          />
        </InputContainer>
        <ClickButton>탈퇴하기</ClickButton>
        <p className={className.notice}>
          탈퇴할 경우,
          <br /> 3개월 동안 동일한 계정으로 가입하실 수 없습니다.
        </p>
      </form>
    </div>
  );
};
const className = {
  container:
    'flex flex-col items-center justify-start w-[460px] h-[350px] px-8 border-[3px] border-garden1 box-border rounded bg-gardenBG shadow-[0_0_30px_rgba(30, 30, 30, 0.185)]',
  title: 'justify-self-start text-center my-10 pb-3 text-garden1 font-pacifico text-3xl',
  form: 'flex-col w-full px-3',
  accountContainer: 'flex p-1 mr-3 self-end text-xl ',
  accountText: 'text-garden4 text-base',
  accountLink: 'text-garden1 pl-3 accountContainer font-semibold',
  input:
    'w-full mb-10 px-3 py-2  bg-white rounded-md border border-gray-300 text-gray-900  placeholder:text-[13px] placeholder-gray-400 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3',
  notice: 'my-3 text-forest3',
};

export default Userwithdraw;
