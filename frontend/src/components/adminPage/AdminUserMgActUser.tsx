import React from 'react';
import useAdminUser from '../../hooks/useAdminUser';
import Loading from '../loadings/Loading';
import AdminUserLine from './AdminUserLine';
export default function AdminUserMgActUser() {
  const {
    activeUserQuery: { data: activeUsers },
  } = useAdminUser();

  return activeUsers === undefined ? (
    <Loading />
  ) : (
    activeUsers.map((user, index) => (
      <AdminUserLine ban="false" key={index}  role={user.role} email={user.email} username={user.username} bio={user.bio} imgUrl={user.imgUrl} />
    ))
  );
}
