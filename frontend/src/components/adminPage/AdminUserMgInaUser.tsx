import React from 'react';
import useAdminUser from '../../hooks/useAdminUser';
import Loading from '../loadings/Loading';
import AdminUserLine from './AdminUserLine';

export default function AdminUserMgInaUser() {
  const {
    inactiveUserQuery: { data: inactiveUsers },
  } = useAdminUser();

  return inactiveUsers === undefined ? (
    <Loading />
  ) : (
    inactiveUsers.map((user,  index) => (
      <AdminUserLine ban="true" role={user.role} key={index} email={user.email} username={user.username} bio={user.bio} imgUrl={user.imgUrl} />
    ))
  );
}
