import React, { useState } from 'react';
function MainTopCards() {
  const [cardStyle, setCardStyle] = useState('hidden');
  const cardHiddenHandler = () => {
    return cardStyle === "hidden" && setCardStyle('block');
  };
  const exData = {
    mascotName: '김펭귄',
    category: '뉴스피드',
    content: `조강 펭귄목의 새. 한자로는 '인조(人鳥)'라고 한다. 키는 40~120cm이고, 몸은 방추형이고 날개는 지느러미
    모양으로 짧고 작게 변화하여 날지 못하고 걸어 다닌다. 현생 생물 중에 인간을 포함한 유인원들과 더불어 몇 안
    되는 직립보행을 하는 동물이다. 남극 등 남반구의 적도 부근부터 극지방까지 서식하며, 바닷가에서 무리 지어
    살며 돌로 만든 간단한 둥지에 두세 개의 알을 낳는다. 날지 못하는 대신 헤엄을 잘 치며 물고기·낙지·새우
    따위를 잡아먹는다. 황제펭귄, 아델리펭귄 등 6속 17종[1]이 있다. 남극의 귀염둥이, 상징과도 같은 새다.[2]
    등은 검은색, 배는 흰색의 턱시도 같은 특유의 털 무늬 때문에 '남극의 신사'라고도 불린다. 대뇌화지수(뇌의
    중량비) EQ를 통한 지능의 예측은 양(0.81)에 비해 약간 낮고 생쥐(0.50) 보다 살짝 높은 0.60이라고 한다.[3]
    조류의 유전자 게놈 분석 결과, 펭귄은 슴새목 알바트로스의 자매격이며 공룡 시대가 끝난 직후부터 공통 조상인
    슴새목에서 갈라져 펭귄의 진화가 시작되었음이 6천 100만년 전의 펭귄 화석을 통해 밝혀졌다. 기사 황제펭귄의
    경우 보통 수명은 20년을 조금 넘으며 길면 30년도 넘길 수 있다. 조류 중에서 꽤 오래 사는 편. 가장 오래 산
    펭귄으로는 덴마크의 동물원에 있는 젠투펭귄으로, 2020년 기준 41세를 기록했다`,
  };
  return (
    <>
      <div className="flex justify-evenly pt-6 px-12">
        <div
          className=" static m-3 p-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]
        hover:hidden
        hover:w-[1000px]
        hover:bg-blue-200
        hover:transition"
        >
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-4 rounded-full shadow-lg"
              src="https://w.namu.la/s/91372f442eecd338ac9133706e272f0617405e0e647c72400b2854f7ee8c0688f5611d44aca4955aec4bd2c7e1d2c5a2a3da5167f5cf32a7bc21ccc8863149cdfdc67bd6569bda06cee24ef37a471d9f63fe50702d7250649574066d3378b010"
              alt="default card"
            />
            <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">{exData.mascotName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exData.category}</span>
          </div>
        </div>

        <div className=" static m-3 p-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-4 rounded-full shadow-lg"
              src="https://w.namu.la/s/91372f442eecd338ac9133706e272f0617405e0e647c72400b2854f7ee8c0688f5611d44aca4955aec4bd2c7e1d2c5a2a3da5167f5cf32a7bc21ccc8863149cdfdc67bd6569bda06cee24ef37a471d9f63fe50702d7250649574066d3378b010"
              alt="default card"
            />
            <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">{exData.mascotName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exData.category}</span>
          </div>
        </div>
        <div className=" static m-3 p-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-4 rounded-full shadow-lg"
              src="https://w.namu.la/s/91372f442eecd338ac9133706e272f0617405e0e647c72400b2854f7ee8c0688f5611d44aca4955aec4bd2c7e1d2c5a2a3da5167f5cf32a7bc21ccc8863149cdfdc67bd6569bda06cee24ef37a471d9f63fe50702d7250649574066d3378b010"
              alt="default card"
            />
            <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">{exData.mascotName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{exData.category}</span>
          </div>
        </div>
      </div>
      <div className={`absolute my-9 h-[200px] w-full ${cardStyle}`} onMouseOver={cardHiddenHandler} onFocus={cardHiddenHandler}>
        <div className="flex justify-around mx-14 p-3 h-full rounded-lg bg-white">
          <img
            className="bg-gray-500 rounded-lg w-[20%]"
            src="https://w.namu.la/s/91372f442eecd338ac9133706e272f0617405e0e647c72400b2854f7ee8c0688f5611d44aca4955aec4bd2c7e1d2c5a2a3da5167f5cf32a7bc21ccc8863149cdfdc67bd6569bda06cee24ef37a471d9f63fe50702d7250649574066d3378b010"
            alt="default card"
          />
          <div className="flex flex-col rounded-lg w-[70%] justify-around p-3">
            <h5 className=" text-xl font-semibold text-gray-900 dark:text-white">김펭귄</h5>
            <span className="text-medium text-gray-900 dark:text-gray-400">
              {exData.content.length > 100 ? exData.content.slice(0, 300) + '...' : exData.content}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainTopCards;
