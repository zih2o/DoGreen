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
  profileTotalWrapper: string;
  profileWrapper: string;
  textWrapper: string;
  cardContentsWrapper: string;
  cardListWrapper: string;
}

interface ICardType {
  size: string;
  layout: string;
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
  profileImg: 'w-24 h-24 rounded-full m-2 p-2 bg-slate-100',
  progressbarImg: 'w-20 h-20 float-right rounded-full text-center',
};
export const TextType: ITextType = {
  titleText: 'text-3xl font-bold',
  messageText: 'text-emerald-600',
};
export const WrapperType: IWrapperType = {
  profileTotalWrapper: 'flex mx-3 items-center justify-content-center ',
  profileWrapper: 'w-2/5 ',
  textWrapper: 'w-3/5 flex flex-col ml-5 font-bold ',
  cardContentsWrapper: 'flex mt-20 mb-20 mx-0 ',
  cardListWrapper: 'flex flex-wrap justify-start place-items-stretch gap-y-14 gap-x-8',
};
export const CardType: ICardType = {
  size: 'w-56',
  layout: 'h-full shadow-md rounded-xl block overflow-hidden bg-white',
  img: 'h-52 bg-gray-100',
  text: 'p-10 text-center text-xl font-bold ',
};
