interface ILinkType {
  mypageTab: string;
}
interface IProgressbarType {
  wrapper: string;
  filledbar: string;
  unfilledbar: string;
}
interface IImageType {
  profileImg: string;
  progressbarImg: string;
}

interface ITextType {
  titleText: string;
  introduceText: string;
  messageText: string;
  mascotNameText: string;
  categoryNameText: string;
}

interface IWrapperType {
  homeCategoriesWrapper: string;
  profileTotalWrapper: string;
  profileWrapper: string;
  textWrapper: string;
  cardContentsWrapper: string;
  cardListWrapper: string;
  cardListWrapper_mypage: string;
  cardListRightWrapper: string;
  cardListLeftWrapper: string;
}

interface ICardType {
  size: string;
  layout: string;
  imgWrapper: string;
  img: string;
  text: string;
  front: string;
  back: string;
  flipContent: string;
}

interface IButtonType {
  newsLetterBtn: string;
  subscribeBtn: string;
  subscribingBtn: string;
  subCancelBtn: string;
}
export const LinkType: ILinkType = {
  mypageTab: 'mb-12 pl-8',
};
export const ProgressbarType: IProgressbarType = {
  wrapper: 'mt-12 mb-24 mx-auto px-10 lg:px-20',
  filledbar: 'inline-block h-8 rounded-tl-md rounded-bl-md bg-garden1',
  unfilledbar: 'inline-block h-8 rounded-tr-md rounded-br-md bg-slate-100',
};
export const ImageType: IImageType = {
  profileImg: 'w-full h-full rounded-full p-2 m-3 bg-slate-50/30',
  progressbarImg: 'w-20 h-20 float-right rounded-full text-center',
};
export const TextType: ITextType = {
  titleText: 'text-xl md:text-2xl lg:text-3xl font-bold pl-2 leading-10',
  introduceText: 'text-xl md:text-2xl leading-10 mt-3 pl-2 text-garden1',
  messageText: 'text-emerald-600',
  mascotNameText: 'text-lg sm:text-xl',
  categoryNameText: 'text-lg sm:text-2xl text-garden1',
};

export const WrapperType: IWrapperType = {
  homeCategoriesWrapper: 'relative overflow-hidden h-[450px] sm:h-[620px] z-0 mb-20 sm:mb-40',
  profileTotalWrapper: 'flex items-center ',
  profileWrapper: 'w-2/5',
  textWrapper: 'flex flex-col w-3/5 font-bold text-center ',
  cardContentsWrapper: 'flex mt-20 mb-20 mx-auto ',
  cardListWrapper: 'grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-12 gap-y-14 ',
  cardListWrapper_mypage: 'grid lg:grid-cols-3 grid-cols-2 gap-x-14 gap-y-14 ',
  cardListRightWrapper: 'flex absolute top-0 gap-x-3 animate-slider1',
  cardListLeftWrapper: 'flex absolute bottom-1 gap-x-3 animate-slider2',
};
export const CardType: ICardType = {
  size: 'w-36 h-52 sm:w-56 sm:h-72',
  layout:
    'flex flex-col h-full items-center justify-center rounded-xl shadow-md overflow-hidden bg-white border border-gray-200 dark:bg-[#292524] dark:border-garden4',
  imgWrapper: 'h-1/2 p-5',
  img: 'w-20 h-20 sm:w-32 sm:h-32 mb-4 rounded-full shadow-lg',
  text: 'h-1/2 py-5 sm:py-10 px-3 text-center text-lg sm:text-xl font-bold ',
  front: ' absolute w-full backface-hidden',
  back: ' absolute w-full rotate-y-180 ',
  flipContent:
    ' transition-transform duration-[1000ms] transform-style-3d hover:rotate-y-180 hover:transition-transform hover:duration-[1200ms]',
};

export const BtnType: IButtonType = {
  newsLetterBtn:
    'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-lg sm:text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  subscribeBtn:
    'rotation-y-180 focus:outline-none text-white bg-garden1 hover:bg-green-800 focus:ring-2 focus:ring-green-800 rounded-xl text-lg sm:text-xl font-bold px-5 py-2.5 mr-2 mb-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-600',
  subscribingBtn:
    'rotation-y-180 text-white bg-garden1 opacity-75 rounded-xl text-lg sm:text-xl font-bold px-5 py-2.5 mr-2 mb-2 dark:bg-green-700 cursor-not-allowed',
  subCancelBtn:
    'rotation-y-180 focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-600 rounded-xl text-lg sm:text-xl font-bold px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-600',
};
