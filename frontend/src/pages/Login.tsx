import React from 'react';
import { Login } from '../components/auth/Login';
import { GlobalLayout } from '../components/layout/GlobalLayout';

export default function LoginPage() {
  return (
    <GlobalLayout>
      <div className="flex justify-center w-full h-full mt-[200px]">
        <Login />
      </div>
    </GlobalLayout>
  );
}
