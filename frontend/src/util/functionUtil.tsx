import { useNavigate } from 'react-router-dom';
export const checkName = (name: string) => {
  const charCode = name.charCodeAt(name.length - 1);
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    return `${name}가`;
  }
  return `${name}이`;
};
export const checkLogin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
  }
};
