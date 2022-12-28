import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardLayout, CategoryLayout } from '../components/layout/GlobalLayout';
import CardSkeleton from '../components/loadings/CardSkeleton';
import { CardType, TextType, BtnType, WrapperType } from '../components/common/theme';
import useCategory, { ICategory } from '../hooks/useCategory';
import { useSubscription } from '../hooks/useSubs';
import { checkName } from '../util/functionUtil';
import Modal from '../components/common/Modal';
import { DialogModal } from '../components/common/DialogModal';
import { AiOutlineClose } from 'react-icons/ai';
import { useUserInfo } from '../hooks/useUser';
import { useModalState } from '../hooks/useModalState';
import { toast } from 'react-toastify';

interface ISubscriptionInfo {
  categoryId: string;
  categoryName: string;
  subStatus: boolean;
}

export const CategoriesPage = () => {
  const { existUser, getUserInfo } = useUserInfo();
  const { isOpen, handleOpen, handleClose, handleToggle } = useModalState();
  const [isLogined, setIsLogined] = useState<boolean>(true);
  const [subsInfoArr, setSubsInfoArr] = useState<ISubscriptionInfo[]>([]);
  const [newSubsInfo, setNewSubsInfo] = useState<ISubscriptionInfo>({
    categoryId: '',
    categoryName: '',
    subStatus: false,
  });

  const {
    catQuery: { isLoading, data: categories },
  } = useCategory();

  const {
    subsQuery: { data: subscriptions, refetch, error },
    subsMutation,
  } = useSubscription(newSubsInfo.categoryId as string);

  if (error) {
    //console.log('errorrrrrr');
  } else {
    refetch();
  }
  useEffect(() => {
    handleClose();
    getUserInfo();

    refetch();
  }, [existUser]);

  const checkLogin = () => {
    if (!existUser) {
      setIsLogined(!isLogined);
    }
    handleClose();
  };
  const handleSubButton = (category: ICategory) => {
    setNewSubsInfo((prev) => ({
      categoryId: category._id,
      categoryName: category.categoryName,
      subStatus: true,
    }));
    handleOpen();
  };
  const applySubscription = async () => {
    if (existUser) {
      setSubsInfoArr([...subsInfoArr, newSubsInfo]);
      subsMutation.mutate();
      handleClose();
      toast.success('구독 완료!');
      refetch();
    } else {
      checkLogin();
    }
  };
  const handleSubStatus = (category: ICategory) => {
    const status =
      existUser && subscriptions && subscriptions.filter((cat) => category._id === cat._id).length > 0
        ? '구독중 💌'
        : '구독하기 ✅';
    return status;
  };

  const skeletonCards = Array(15).fill(0);
  return (
    <>
      <CategoryLayout>
        <CardLayout>
          <div className={TextType.titleText}>{'See all the Greens!'}</div>
          <div className={TextType.introduceText}>
            {'관심있는 토픽에 대한 뉴스레터를 둘러보거나 구독해보아요!'} &nbsp;
          </div>

          {!isLogined && (
            <DialogModal type="alert" navigate="/login" title="로그인 안내" message="로그인 시 이용 가능합니다." />
          )}
          <div className={WrapperType.cardContentsWrapper}>
            <ul className={WrapperType.cardListWrapper}>
              {isLoading &&
                skeletonCards.map((e, i) => (
                  <li className={CardType.size} key={`{skeleton-${i}}`}>
                    <CardSkeleton />
                  </li>
                ))}
              {categories &&
                categories.map((category) => (
                  <li className={CardType.size + CardType.flipContent} key={category._id}>
                    <div key={`back-${category._id}`} className={CardType.layout + CardType.back}>
                      <button type="button" className={BtnType.newsLetterBtn}>
                        {' '}
                        <Link to={`/categories/${category._id}`}>뉴스레터 📰</Link>
                      </button>
                      <button
                        type="button"
                        className={
                          handleSubStatus(category) === '구독하기 ✅' ? BtnType.subscribeBtn : BtnType.subscribingBtn
                        }
                        data-id={category._id}
                        id={category._id}
                        disabled={handleSubStatus(category) !== '구독하기 ✅' ? true : false}
                        onClick={() => {
                          handleSubButton(category);
                        }}
                      >
                        {handleSubStatus(category)}
                      </button>
                    </div>
                    <div key={`front-${category._id}`} className={CardType.layout + CardType.front}>
                      <div className={CardType.imgWrapper}>
                        <img className={CardType.img} src={category.mascotImage} alt="default card" />
                      </div>
                      <div className={CardType.text}>
                        <h2>
                          <span className={TextType.mascotNameText}>{checkName(category.mascotName)}</span> 전하는{' '}
                          <br></br>
                          <span className={TextType.categoryNameText}>{category.categoryName}</span>
                        </h2>
                      </div>
                    </div>
                  </li>
                ))}
              {isOpen && categories && (
                <Modal onClose={() => handleToggle()}>
                  <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="popup-modal"
                        onClick={() => handleToggle()}
                      >
                        <AiOutlineClose size="24" />
                        <span className="sr-only">Close modal</span>
                      </button>
                      <div className="px-16 py-8 text-center">
                        <h3 className="mt-5 mb-8 text-xl font-bold text-gray-500 dark:text-gray-400">
                          <span className={TextType.categoryNameText}>{newSubsInfo.categoryName}</span> <br></br>토픽을
                          구독하시겠습니까?
                        </h3>
                        <button
                          data-modal-toggle="popup-modal"
                          type="button"
                          className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-400 font-medium rounded-lg text-lg inline-flex items-center px-5 py-2.5 text-center mr-2"
                          onClick={applySubscription}
                        >
                          네
                        </button>
                        <button
                          data-modal-toggle="popup-modal"
                          type="button"
                          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          onClick={() => handleToggle()}
                        >
                          아니요
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </ul>
          </div>
        </CardLayout>
      </CategoryLayout>
    </>
  );
};
