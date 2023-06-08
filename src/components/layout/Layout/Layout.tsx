import Head from "next/head";
import FooterBlock from "@layout/Footer/FooterBlock";
import HeaderBlock from "@layout/Header/HeaderBlock";
import type { ComponentUtilSeo } from "@utils/types";

interface P {
  children: any | any[];
  seo: ComponentUtilSeo | undefined;
}

const Layout = ({ children, seo }: P) => {
  return (
    <>
      <Head>
        <title>{seo?.metaTitle ?? "Printintouch MK"}</title>
        <meta name="title" content="hehence" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" />
      </Head>
      <main>
        <HeaderBlock currentSlug={""} />
        {children}
        <FooterBlock />
      </main>
    </>
  );
};

export default Layout;
