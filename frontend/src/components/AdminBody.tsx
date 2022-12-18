import React from 'react';
function AdminBody(props) {
  return (
    <>
      <div className="grid col-span-3 row-span-full grid-cols-4 grid-rows-6 lg:col-span-2">
        <div className="flex flex-wrap justify-between col-span-full p-6 pb-8 bg-garden1 text-garden2 ">
          <img className="max-w-[50%] m-1" src="/src/assets/profile.png" alt="profile_img" />
          <ul className="flex flex-col justify-center">
            <li className='text-l mb-2 md:text-xl font-semibold'>관리자</li>
            <li className='text-l md:text-xl font-semibold'>Lv.Admin</li>
          </ul>
        </div>
        <div className="col-span-full row-start-2 row-span-full p-6 bg-garden1 text-garden2 ">
          <ul className="flex flex-col">
            <li className='text-l mt-5 md:text-xl font-bold'>동물카드 관리</li>
            <li className='text-l mt-5 md:text-xl font-bold'>뉴스레터카드 관리</li>
            <li className='text-l mt-5 md:text-xl font-bold'>챌린지 게시글/리뷰 관리</li>
          </ul>
        </div>
      </div>
      <div className='col-start-4 col-span-full row-span-full bg-garden2 lg:col-start-3'>내용</div>
    </>
  );
}
export default AdminBody;
