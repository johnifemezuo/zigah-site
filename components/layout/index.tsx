import Head from 'next/head';
import React from 'react';
import Nav from '../nav';
import Footer from '../page-sections/footer';
import Schedule from '../page-sections/schedule';
import { StyledLayout } from './styled';

interface LayoutProps {
  pagename: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pagename, children }) => (
  <StyledLayout>
    <Head>
      <title>{pagename}</title>
      <link rel="icon" href="/assets/ziga-logo.png" />
    </Head>
    <main>
      <Nav />
      <>{children}</>
      <Schedule />
      <Footer />
    </main>
  </StyledLayout>
);

export default Layout;
