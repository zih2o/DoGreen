import React from 'react';
import AdminBody from '../components/AdminBody';
function Admin() {
  return (
    <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
      <div className="grid grid-cols-10 grid-rows-6 mt-[113.99px] mb-[92px] col-span-full row-span-6 sm:mb-[72px]">
        <AdminBody/>
      </div>
    </div>
  );
}
export default Admin;  
