import { Outlet, NavLink } from 'react-router-dom';

export const AdminLayout = () => {
  return (
    <>
      <main>
      <div>
                    <NavLink to="addProduct"> add product </NavLink>
                </div>
        <Outlet />
      </main>
    </>
  );
}