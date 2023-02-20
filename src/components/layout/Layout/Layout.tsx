import Head from 'next/head';
import FooterBlock from '@layout/Footer/FooterBlock';
import HeaderBlock from '@layout/Header/HeaderBlock';

interface P {
  children: any | any[];
  showLoginWindow: boolean;
  setShowLoginWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = ({ children }: P) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" />
      </Head>
      <main>
        <HeaderBlock
          currentSlug={''}
        />
        {children}
        <FooterBlock />
      </main>
    </>
  );
};

export default Layout;
