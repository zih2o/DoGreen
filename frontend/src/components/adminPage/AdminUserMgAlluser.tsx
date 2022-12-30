import React from 'react';
import useAdminUser from '../../hooks/useAdminUser';
import Loading from '../loadings/Loading';
import AdminUserLine from './AdminUserLine';
export default function AdminUserMgAlluser() {
  const {
    allUserQuery: { data: allUser },
  } = useAdminUser();

  return allUser === undefined ? (
    <Loading />
  ) : (
    allUser.map((user, index) => (
      <AdminUserLine ban="상태관리" key={index}  role={user.role} email={user.email} username={user.username} bio={user.bio} imgUrl={user.imgUrl} />
    ))
  );
}
