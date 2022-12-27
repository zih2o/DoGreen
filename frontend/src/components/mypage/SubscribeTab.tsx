import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardType, TextType, WrapperType, BtnType } from '../common/theme';
import CardSkeleton from '../loadings/CardSkeleton';
import { CardLayout } from '../layout/GlobalLayout';
import { MyPageContentsLayout } from '../layout/MyPageLayout';
import { useSubquery, useDelSubscription, ISubscription } from '../../hooks/useSubscription';
import { checkName } from '../../util/functionUtil';
import Modal from '../../components/Modal';
import { AiOutlineClose } from 'react-icons/ai';

const SubscribeTab = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [cancelId, setCancelId] = useState<string>('');
  const {
    subQuery: { isLoading, data: subInfo },
  } = useSubquery();
  const { delMutation } = useDelSubscription(cancelId);

  const cancelSubscription = () => {
    delMutation.mutate();
    setIsModal(!isModal);
    window.location.reload();
  };

  const tabCards = subInfo?.map((card) => (
    <li className={CardType.size + CardType.flipContent} key={card._id}>
      <div key={`back-${card._id}`} className={CardType.layout + CardType.back}>
        <button type="button" className={BtnType.newsLetterBtn}>
          {' '}
          <Link to={`/categories/${card._id}`}>뉴스레터 📰</Link>
        </button>
        <button
          type="button"
          className={BtnType.subCancelBtn}
          data-id={card._id}
          id={card._id}
          onClick={() => {
            setCancelId(card._id!);
            setIsModal(!isModal);
          }}
        >
          {'구독취소 '}
        </button>
      </div>
      <div key={`front-${card._id}`} className={CardType.layout + CardType.front}>
        <div className={CardType.imgWrapper}>
          <img className={CardType.img} src={card.mascotImage} alt="default card" />
        </div>
        <div className={CardType.text}>
          <h2>
            <span className={TextType.mascotNameText}>{checkName(card.mascotName)}</span> 전하는 <br></br>
            <span className={TextType.categoryNameText}>{card.categoryName}</span>
          </h2>
        </div>
      </div>
    </li>
  ));
  const skeletonCards = Array(8).fill(0);
  return (
    <MyPageContentsLayout>
      {subInfo && subInfo.length > 0 && (
        <CardLayout>
          <div className={TextType.titleText}>{'My Greens'}</div>
          <div className={TextType.introduceText}>{'내가 구독 중인 토픽을 확인하고 관리해보세요!'} &nbsp;</div>
          <div className={WrapperType.cardContentsWrapper}>
            <ul className={WrapperType.cardListWrapper}>
              {isLoading &&
                skeletonCards.map((e, i) => (
                  <li className={CardType.size} key={`{skeleton-${i}}`}>
                    <CardSkeleton />
                  </li>
                ))}
              {tabCards}
              {isModal && (
                <Modal
                  onClose={() => {
                    setIsModal(!isModal);
                  }}
                >
                  <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="popup-modal"
                        onClick={() => {
                          setIsModal(!isModal);
                        }}
                      >
                        <AiOutlineClose size="24" />
                        <span className="sr-only">Close modal</span>
                      </button>
                      <div className="px-16 py-8 text-center">
                        <h3 className="mt-5 mb-8 text-xl font-bold text-gray-600 dark:text-gray-300">
                          정말로 구독을 취소하시겠습니까?
                        </h3>
                        <button
                          data-modal-toggle="popup-modal"
                          type="button"
                          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-red-400 font-medium rounded-lg text-lg inline-flex items-center px-5 py-2.5 text-center mr-2"
                          onClick={cancelSubscription}
                        >
                          네
                        </button>
                        <button
                          data-modal-toggle="popup-modal"
                          type="button"
                          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          onClick={() => {
                            setIsModal(!isModal);
                          }}
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
      )}
      {subInfo === undefined ||
        (subInfo.length < 1 && (
          <div className="flex-col mt-60 pb-24 align-middle">
            <div className={TextType.titleText + ' text-center'}>구독 정보가 없습니다</div>
            <br></br>
            <div className="text-2xl text-center leading-10 font-bold text-garden1 underline">
              <Link to="/categories">구독 하러가기</Link>
            </div>
          </div>
        ))}
    </MyPageContentsLayout>
  );
};

export default SubscribeTab;
