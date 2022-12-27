import { ResultType } from '@remix-run/router/dist/utils';
import React, { useEffect, useState, useCallback, Fragment, FormEvent, ChangeEvent } from 'react';
import { useInView } from 'react-intersection-observer';
import { BsFillHeartFill } from 'react-icons/bs';
import { ImBubble } from 'react-icons/im';
import useComment, { IComment } from '../../hooks/useComment';
import Loading from '../loadings/Loading';
import Modal from '../common/Modal';
import { useUserLoginStore } from '../../hooks/store';
import { AlertModal } from '../common/AlertModal';
import NewsCarousel from './NewsCarousel';

interface INews {
  categoryName: string;
  categoryImg: string;
  newsId: string;
  content: string;
  imageList: string[];
  createdAt: string;
  likeNum: number;
}

const CommentTheme = {
  form: 'flex justify-between px-2 py-4 bg-gradient-to-r from-zinc-400 to-gray-300',
  input: 'flex-auto mx-2 py-1 rounded-md bg-slate-50 text-gray-800 focus:outline-none focus:ring-4 focus:ring-garden3',
  button:
    'mx-2 px-2 rounded-md bg-garden4 text-gray-50 font-semibold transition duration-0 hover:scale-110 hover:duration-700',
};

export default function NewsCard(props: INews) {
  const [clickHeart, setClickHeart] = useState<boolean>(false);
  const [clickComment, setClickComment] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const isLoggedIn = useUserLoginStore((state) => state.isLogin);
  const {
    addComment,
    commentQuery: { status, fetchNextPage, hasNextPage, data },
  } = useComment(props.newsId);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  const handleClickHeart = () => {
    return;
  };
  const handleFocus = () => {
    if (!isLoggedIn) {
      return <AlertModal title="로그인" message="로그인이 필요한 서비스입니다." />;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    addComment.mutate({ postId: props.newsId, comment: inputValue });
    setInputValue('');
  };

  return (
    <div className="flex w-full h-full justify-center py-6 bg-gardenBG">
      <div className="flex flex-col mr-4 items-center">
        <img className={'rounded-full w-12 h-12 shadow-xl'} src={props.categoryImg} alt="펭귄" />
        <span className="font-semibold">{props.categoryName}</span>
      </div>
      <div className="flex flex-col w-10/12 h-full shadow-2xl rounded-lg overflow-hidden md:w-9/12 lg:w-8/12">
        <div className="relative flex justify-center bg-red-300 ">
          <NewsCarousel imageList={['']} />
        </div>
        <div className="w-full p-6 bg-slate-50  rounded-t-lg text-md sm:">{props.content}</div>
        <div className="flex justify-between bg-slate-400  px-6 py-2 rounded-b-lg bg-gradient-to-r from-zinc-50 to-garden4 items-center">
          <div className="flex">
            <BsFillHeartFill
              className={`${clickHeart ? 'text-red-400 mr-4 hover:cursor-pointer' : 'mr-4 hover:cursor-pointer'}`}
              onClick={handleClickHeart}
            />
            <ImBubble className="mr-4 hover:cursor-pointer" onClick={() => setClickComment(!clickComment)} />
            <div>{props.likeNum}명이 이 글을 좋아합니다.</div>
          </div>
          <span className=" text-slate-50 font-semibold text-sm">{props.createdAt}</span>
        </div>
      </div>
      {clickComment && (
        <Modal
          onClose={() => {
            setClickComment(!clickComment);
          }}
        >
          <div className="flex flex-col w-96 h-96 rounded-md bg-gray-50 overflow-hidden">
            <div className="flex-auto w-full">
              {data?.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.result.map((comment: IComment) => (
                    <div className="flex mx-4 my-4" key={comment._id}>
                      <img src={comment.userId.imgUrl} alt="엘리스" className="w-7 h-7 rounded-full bg-garden4" />
                      <div className="flex flex-col ml-2">
                        <span className="text-sm font-semibold text-gray-400">{comment.userId.username}</span>
                        <span className="text-md text-gray-400">{comment.comment}</span>
                      </div>
                    </div>
                  ))}
                </Fragment>
              ))}
              {(hasNextPage || status === 'loading') && <Loading instance={ref} />}
            </div>
            <form onSubmit={handleSubmit} className={CommentTheme.form} onFocus={handleFocus}>
              <input type="text" className={CommentTheme.input} onChange={handleChange} value={inputValue} />
              <button className={CommentTheme.button}>ADD</button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
