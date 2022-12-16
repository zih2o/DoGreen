import { Link } from 'react-router-dom';
function Hambuger(props) {
  return (
    <>
      <div className="p-6 fixed top-[12.5%] bottom-[100px] right-[0%] w-[30%] h-full items-center place-content-between bg-garden4 text-right border-b-2 border-garden4">
        <div className="flex flex-col mx-auto items-center">
          <div className="leading-10 text-garden2 text-3xl">
            {props.rank} {props.name}님
          </div>
          <span className=" text-garden2 text-xl">지금까지 펭귄 300마리를 구하셨어요!</span>
        </div>
        <ul id="menu" className="flex flex-col mt-6">
          <Link to="/" className="hover:underline decoration-garden2">
            <li className="mb-4 text-garden2">Home</li>
          </Link>
          <Link to="/mypage" className="hover:underline decoration-garden2">
            <li className="mb-4 text-garden2">마이페이지</li>
          </Link>
          <Link to="/animals" className="hover:underline decoration-garden2">
            <li className="mb-4 text-garden2">동물</li>
          </Link>
          <Link to="/topics" className="hover:underline decoration-garden2">
            <li className="mb-4 text-garden2">토픽</li>
          </Link>
          <Link to="/logout" target="_blank" className="hover:underline decoration-garden2">
            <li className="mb-4 text-garden2">로그아웃</li>
          </Link>
        </ul>
      </div>
      <div className="fixed top-[12.5%] left-[0%] w-[70%] h-full bg-garden4 bg-opacity-50" />
    </>
  );
}
export default Hambuger;
