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
  messageText: string;
}

interface IWrapperType {
  homeCategoriesWrapper: string;
  profileTotalWrapper: string;
  profileWrapper: string;
  textWrapper: string;
  cardContentsWrapper: string;
  cardListWrapper: string;
  cardListRightWrapper: string;
  cardListLeftWrapper: string;
}

interface ICardType {
  size: string;
  layout: string;
  imgWrapper: string;
  img: string;
  text: string;
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
  titleText: 'text-3xl font-bold leading-10',
  messageText: 'text-emerald-600',
};

export const WrapperType: IWrapperType = {
  homeCategoriesWrapper: 'relative overflow-hidden h-[620px] z-0 mb-80',
  profileTotalWrapper: 'flex items-center ',
  profileWrapper: 'w-2/5',
  textWrapper: 'flex flex-col w-3/5 font-bold text-center ',
  cardContentsWrapper: 'flex mt-20 mb-20 mx-0 ',
  cardListWrapper: 'flex flex-wrap justify-center gap-y-14 gap-x-12',
  cardListRightWrapper: 'flex absolute w-[4428px] top-0 gap-x-12 animate-slider1',
  cardListLeftWrapper: 'flex absolute w-[4400px] bottom-0 gap-x-12 animate-slider2',
};
export const CardType: ICardType = {
  size: 'w-56 h-72',
  layout: 'flex flex-col h-full items-center justify-center rounded-xl shadow-md overflow-hidden bg-white',
  imgWrapper: 'h-2/3 p-5',
  img: 'w-32 h-32 mb-4 rounded-full shadow-lg',
  text: 'h-1/3 p-5 text-center text-xl font-bold ',
};
