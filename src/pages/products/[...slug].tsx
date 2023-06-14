import client from "../../utils/apollo-client";
import { GET_ALL_PRODUCTS } from "../../utils/queries";
import { Query, ProductEntity, ComponentUtilSeo } from "../../utils/types";
import Layout from "@layout/Layout/Layout";
import React, { useState } from "react";
import ProductPageBlock from "@blocks/ProductPageBlock/ProductPageBlock";

interface Params {
  params: { slug: string };
}

interface P {
  pageData: ProductEntity[];
  //   blogData: BlogEntity[];
}

interface ApiResponse {
  data: Query;
}

export async function getStaticPaths() {
  const { data }: ApiResponse = (await client.query({
    query: GET_ALL_PRODUCTS,
  })) as ApiResponse;

  const allProducts = data.products?.data;

  const paths = allProducts?.map((product) => {
    return {
      params: { slug: [product.attributes?.slug ?? null] },
    };
  });

  return {
    paths,
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }: Params) {
  let pageData: ProductEntity[] | undefined;

  try {
    const res = (await client.query({
      query: GET_ALL_PRODUCTS,
      fetchPolicy: "no-cache",
    })) as ApiResponse;

    pageData = res.data.products?.data.filter(
      (page) => page.attributes?.slug === params.slug[0]
    );
  } catch (e) {
    console.log(e);
    pageData = [];
  }

  return {
    props: {
      pageData,
    },
    revalidate: 10,
  };
}

function Page({ pageData }: P) {
  const singlePageData = pageData[0];

  return (
    <>
      <Layout seo={singlePageData.attributes?.seo as ComponentUtilSeo}>
        {/* <div className="bg-secondary">{singlePageData.attributes?.title}</div> */}
        {singlePageData.attributes && (
          <ProductPageBlock product={singlePageData.attributes} />
        )}
      </Layout>
    </>
  );
}

export default Page;
