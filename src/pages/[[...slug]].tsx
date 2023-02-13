import client from "../utils/apollo-client";
import { GET_ALL_PAGES, GET_ALL_BLOGS } from "../utils/queries";
import { PageEntity, Query } from "../utils/types";
import Blocks from "@utilityComponents/Blocks";
import Layout from "@layout/Layout/Layout";
import React, { useState } from "react";

interface Params {
  params: { slug: string };
}

interface P {
  pageData: PageEntity[];
  //   blogData: BlogEntity[];
}

interface ApiResponse {
  data: Query;
}

export async function getStaticPaths() {
  const { data }: ApiResponse = (await client.query({
    query: GET_ALL_PAGES,
  })) as ApiResponse;

  const allPages = data.pages?.data;

  const paths = allPages?.map((page) => {
    return {
      params: { slug: [page.attributes?.slug] },
    };
  });

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }: Params) {
  let pageData: PageEntity[] | undefined;

  try {
    const res = (await client.query({
      query: GET_ALL_PAGES,
      fetchPolicy: "no-cache",
    })) as ApiResponse;

    pageData = res.data.pages?.data.filter(
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
  };
}

function Page({ pageData }: P) {
  const singlePageData = pageData[0];
  const [showLoginWindow, setShowLoginWindow] = useState(false);

  return (
    <>
      <Layout
        setShowLoginWindow={setShowLoginWindow}
        showLoginWindow={showLoginWindow}
      >
        {/* <div className="bg-orange">{singlePageData.attributes?.title}</div> */}
        <Blocks singlePageData={singlePageData} />
      </Layout>
    </>
  );
}

export default Page;
