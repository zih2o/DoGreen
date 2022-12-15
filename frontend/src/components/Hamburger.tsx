import { Link } from 'react-router-dom';
import './Hambuger.module.css';
function Hambuger(props) {
  return (
    <div className='moveNav p-24 bg-garden3'>
      <ul id="menu" className="">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/mypages">
          <li>마이페이지</li>
        </Link>
        <Link to="/animals">
          <li>동물</li>
        </Link>
        <Link to="/topics">
          <li>토픽</li>
        </Link>
        <Link to="/logout" target="_blank">
          <li>로그아웃</li>
        </Link>
      </ul>
    </div>
  );
}
export default Hambuger;
