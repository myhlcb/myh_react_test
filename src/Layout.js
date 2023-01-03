import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      Layout
      {/* 二级路由 */}
      <Outlet />
    </>
  );
}
