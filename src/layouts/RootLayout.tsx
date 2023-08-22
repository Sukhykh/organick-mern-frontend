import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header/Header.tsx';
import { Footer } from '../components/Footer/Footer.tsx';


export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}