import React, { Fragment, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import NewsSkeleton from '../components/loadings/NewsSkeleton';
import News from '../components/newspage/News';
import usePost, { IPost } from '../hooks/usePost';
import { useSelectedCategory } from '../hooks/useCategory';

export default function NewsPage() {
  const { ref, inView } = useInView();
  const { mascotImage, mascotName, _id } = useSelectedCategory();
  const {
    postQuery: { status, fetchNextPage, hasNextPage, data },
  } = usePost(_id);
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="w-full min-h-screen mt-32 mb-24">
      {data?.pages.map((page, index) => (
        <Fragment key={index}>
          {page.result.map((post: IPost) => (
            <News
              categoryName={mascotName}
              categoryImg={mascotImage}
              categoryId={_id}
              content={post.content}
              _id={post._id}
              imageList={post.imageList}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              likesNum={post.likesNum}
              isLiked={post.isLiked}
              key={post._id}
            />
          ))}
        </Fragment>
      ))}
      {(hasNextPage || status === 'loading') && <NewsSkeleton instance={ref} />}
    </div>
  );
}
