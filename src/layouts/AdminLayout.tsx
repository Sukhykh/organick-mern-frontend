import { Outlet } from 'react-router-dom';
import { AdminNavigation } from '../pages/Admin/AdminNavigation';

export const AdminLayout = () => {
  return (
    <>
      <main>
        <AdminNavigation/>
        <Outlet />
      </main>
    </>
  );
}