import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import NewsSkeleton from '../components/loadings/NewsSkeleton';
import News from '../components/newspage/News';
import useCategory from '../hooks/useCategory';
import usePost, { IPost } from '../hooks/usePost';

export default function NewsPage() {
  const { catId } = useParams();
  const { ref, inView } = useInView();
  const {
    categoryQuery: { data: category },
  } = useCategory(catId);
  const {
    postQuery: { status, fetchNextPage, isFetchingNextPage, hasNextPage, data },
  } = usePost(catId || 'null');

  useEffect(() => {
    console.log('보였당', data);
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="w-full min-h-screen mt-32 mb-24">
      {data?.pages.map((page, index) => (
        <Fragment key={index}>
          {category &&
            page.result.map((post: IPost) => (
              <News
                categoryName={category.mascotName}
                categoryImg={category.mascotImage}
                content={post.content}
                createdAt={post.createdAt}
                key={post._id}
              />
            ))}
        </Fragment>
      ))}
      {hasNextPage && <NewsSkeleton instance={ref} />}
    </div>
  );
}
