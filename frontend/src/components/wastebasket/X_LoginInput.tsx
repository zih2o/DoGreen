import React, { useState } from 'react';
import axios from 'axios';
//과거의 잔흔 사용하지않는 component
export default function X_LoginInput() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    let body = {
      email: email,
      password: password,
    };
    axios.post('localhost:3000/auth/login', body).then((res) => {
      console.log(res.data);
      if (res.data.code === 200) {
        alert('로그인');
        dispatch(loginUser(res.data.userInfo));
        setMsg('');
      }
      if (res.data.code === 400) {
        setMsg('ID, Password가 비어있습니다.');
      }
      if (res.data.code === 401) {
        setMsg('존재하지 않는 ID입니다.');
      }
      if (res.data.code === 402) {
        setMsg('Password가 틀립니다.');
      }
    });
  };
  return (
    <form className=" xl:px-8">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-garden2 focus:border-garden2 block w-full p-2.5 "
            placeholder="YourEmail@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-garden2 focus:border-garden2 block w-full p-2.5 "
            placeholder="YourPassword"
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </label>
      </div>
    </form>
  );
}
