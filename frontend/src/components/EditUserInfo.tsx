const EditUserInfo = () => {
  return (
    <div className="flex-col w-full ">
      <p className="text-center p-8">내 정보 수정</p>
      <div className="flex flex-row justify-around">
        <div className="w-3/5">
          <div className="flex mb-4 items-center justify-between">
            <label htmlFor="email">이메일</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="flex mb-4 items-center justify-between">
            <label htmlFor="pwd">비밀번호</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="pwd"
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <div className="flex mb-4 items-center justify-between">
            <label htmlFor="pwd">
              비밀번호
              <br />
              확인
            </label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="confrimPwd"
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="username">이름</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              id="username"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/17/16/snowman-6981771_960_720.jpg"
              alt="프로필 사진 변경"
            />
          </div>
          <label htmlFor="img">프로필 사진 변경</label>
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="font-semibold py-2 px-4 border rounded" id="login">
          수정 완료
        </button>
      </div>
    </div>
  );
};

export default EditUserInfo;
