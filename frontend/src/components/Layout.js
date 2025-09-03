// src/components/Layout.js
import Header from './Header/Header';

import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <main><Outlet /></main>
  </>
);

export default Layout;
