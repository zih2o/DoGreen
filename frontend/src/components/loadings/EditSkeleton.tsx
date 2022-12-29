import React from 'react';
import { InputContainer } from '../common/InputContainer';

export default function EditSkeleton() {
  const className = {
    container:
      'flex flex-col justify-center items-center flex-1 w-[700px] mb-[100px] sm:w-[600px] md:w-[700px] xl:w-[800px] max-[650px]:w-[100%] mx-auto mt-5 mb-[100px] py-5 px-14 max-[780px]:px-12 max-[650px]:px-10  border-2 border-solid border-zinc-300 dark:border-[#292524] rounded-xl bg-gardenBG',
    title: 'h-[110px] max-[550px]:text-3xl',
    form: 'flex-col w-full px-3 max-[800px]:px-1',
    imgContainer: 'flex flex-col justify-center items-center',
    img: 'mb-3 w-[180px] h-[180px] rounded-full bg-zinc-300 dark:bg-[#292524]  text-transparent animate-pulse',
    imgButton: 'mt-5 mb-10 py-1 px-3 w-[130px] rounded-full bg-zinc-300 dark:bg-[#292524] text-transparent',
    inputContainer1: 'flex items-start max-[600px]:flex-col  justify-between w-full space-y-2',
    input:
      'w-full px-3 py-2 rounded-lg max-[600px]:w-[100%] bg-zinc-300 dark:bg-[#292524] text-transparent animate-pulse',
    inputError: ' mt-1 min-h-[30px] text-base text-transparent',
    inputLabel: 'flex text-xl text-garden4 font-semibold pt-4 ',
    InputContainer2: 'flex flex-col w-2/3 max-[600px]:w-[100%]',
    buttonContainer: 'flex justify-center mt-3 w-full',
    button:
      'flex justify-center w-[50%] h-[45px] mb-2 py-2 rounded-full bg-zinc-300 dark:bg-[#292524] text-xl text-transparent animate-pulse',
  };
  return (
    <>
      <div className={className.container}>
        <p className={className.title}></p>
        <div className={className.form}>
          <section className={className.imgContainer}>
            <div className={className.img}>이미지</div>
            <div className={className.imgButton}>이미지 버튼</div>
          </section>
          <section className={className.inputContainer1}>
            <div className={className.inputLabel}></div>
            <div className={className.InputContainer2}>
              <div className={className.input}>입력창</div>
              <p className={className.inputError}>에러창</p>
            </div>
          </section>
          <section className={className.inputContainer1}>
            <div className={className.inputLabel}></div>
            <div className={className.InputContainer2}>
              <div className={className.input}>입력창</div>
              <p className={className.inputError}>에러창</p>
            </div>
          </section>
          <section className={className.inputContainer1}>
            <div className={className.inputLabel}></div>
            <div className={className.InputContainer2}>
              <div className={className.input}>입력창</div>
              <p className={className.inputError}>에러창</p>
            </div>
          </section>
          <section className={className.inputContainer1}>
            <div className={className.inputLabel}></div>
            <div className={className.InputContainer2}>
              <div className={className.input}>입력창</div>
              <p className={className.inputError}>에러창</p>
            </div>
          </section>
          <section className={className.inputContainer1}>
            <div className={className.inputLabel}></div>
            <div className={className.InputContainer2}>
              <div className={className.input}>입력창</div>
              <p className={className.inputError}>에러창</p>
            </div>
          </section>
          <section className={className.inputContainer1}>
            <div className={className.inputLabel}></div>
            <div className={className.InputContainer2}>
              <div className={className.input}>입력창</div>
              <p className={className.inputError}>에러창</p>
            </div>
          </section>
          <div className={className.buttonContainer}>
            <div className={className.button}>버튼</div>
          </div>
          <div className={className.buttonContainer}>
            <div className={className.button}>버튼</div>
          </div>
        </div>
      </div>
    </>
  );
}
