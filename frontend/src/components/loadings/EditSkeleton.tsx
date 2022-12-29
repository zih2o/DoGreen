import React from 'react';

export default function EditSkeleton() {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-1 w-[700px] mb-[100px] py-5 px-14 border-2 border-solid border-zinc-300 dark:border-[#292524] rounded-xl bg-gardenBG">
        <p className="h-[110px]"></p>
        <section className="flex flex-col justify-center items-center">
          <div className="mb-3 w-[180px] h-[180px] rounded-full bg-zinc-300 dark:bg-[#292524]  text-transparent animate-pulse">
            이미지
          </div>
          <div className="mt-5 mb-10 py-1 px-3 w-[130px] rounded-full bg-zinc-300 dark:bg-[#292524] text-transparent">
            이미지 버튼
          </div>
        </section>
        <section className="flex items-start justify-between w-full space-y-2">
          <div className="flex text-xl text-garden4 font-semibold pt-4"></div>
          <div className="flex flex-col w-2/3 ">
            <div className="w-full px-3 py-2 rounded-lg bg-zinc-300 dark:bg-[#292524] text-transparent animate-pulse">
              입력창
            </div>
            <p className=" mt-1 min-h-[30px] text-base text-transparent">에러창</p>
          </div>
        </section>
        <section className="flex items-start justify-between w-full space-y-2">
          <div className="flex text-xl text-garden4 font-semibold pt-4"></div>
          <div className="flex flex-col w-2/3 ">
            <div className="w-full px-3 py-2 rounded-lg bg-zinc-300 dark:bg-[#292524] text-transparent animate-pulse">
              입력창
            </div>
            <p className=" mt-1 min-h-[30px] text-base text-transparent">에러창</p>
          </div>
        </section>
        <section className="flex items-start justify-between w-full space-y-2">
          <div className="flex text-xl text-garden4 font-semibold pt-4"></div>
          <div className="flex flex-col w-2/3 ">
            <div className="w-full px-3 py-2 rounded-lg bg-zinc-300 dark:bg-[#292524] text-transparent animate-pulse">
              입력창
            </div>
            <p className=" mt-1 min-h-[30px] text-base text-transparent">에러창</p>
          </div>
        </section>
        <section className="flex items-start justify-between w-full space-y-2">
          <div className="flex text-xl text-garden4 font-semibold pt-4"></div>
          <div className="flex flex-col w-2/3 ">
            <div className="w-full px-3 py-2 rounded-lg bg-zinc-300 dark:bg-[#292524] text-transparent animate-pulse">
              입력창
            </div>
            <p className=" mt-1 min-h-[30px] text-base text-transparent">에러창</p>
          </div>
        </section>
        <section className="flex items-start justify-between w-full space-y-2">
          <div className="flex text-xl text-garden4 font-semibold pt-4"></div>
          <div className="flex flex-col w-2/3 ">
            <div className="w-full px-3 py-2 rounded-lg bg-zinc-300 dark:bg-[#292524] text-transparent animate-pulse">
              입력창
            </div>
            <p className=" mt-1 min-h-[30px] text-base text-transparent">에러창</p>
          </div>
        </section>
        <section className="flex items-start justify-between w-full space-y-2">
          <div className="flex text-xl text-garden4 font-semibold pt-4"></div>
          <div className="flex flex-col w-2/3 ">
            <div className="w-full px-3 py-2 rounded-lg bg-zinc-300 dark:bg-[#292524] text-transparent animate-pulse">
              입력창
            </div>
            <p className=" mt-1 min-h-[30px] text-base text-transparent">에러창</p>
          </div>
        </section>
        <div className="flex justify-center mt-3 w-full">
          <div className="flex justify-center w-[50%] h-[45px] mb-2 py-2 rounded-full bg-zinc-300 dark:bg-[#292524] text-xl text-transparent animate-pulse">
            버튼
          </div>
        </div>
        <div className="flex justify-center mt-3 w-full">
          <div className="flex justify-center w-[50%] h-[45px] mb-2 py-2 rounded-full bg-zinc-300 dark:bg-[#292524] text-xl text-transparent animate-pulse">
            버튼
          </div>
        </div>
      </div>
    </>
  );
}
