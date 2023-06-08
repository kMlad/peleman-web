import { Product, Enum_Componentblockshero_Size } from "@utils/types";
import findMediaUrl from "@utils/findMediaUrl";
import React, { useState, useEffect } from "react";
import HeroBlock from "@blocks/HeroBlock/HeroBlock";
import { Carousel } from "react-responsive-carousel";
import ReactMarkdown from "react-markdown";

interface P {
  product: Product;
}

const ProductPageBlock = ({ product }: P): JSX.Element => {
  const { productDescription, productTitle, productMainImage, productImageCarousel } = product;
  return (
    <>
      {console.log(product)}
      <HeroBlock
        size={Enum_Componentblockshero_Size.Small}
        title={productTitle}
        id={productTitle}
        heroImage={productMainImage}
      />
      <section className="container mx-auto  flex h-40 flex-row justify-between">
        <div className="h-full w-full">
          <Carousel>
            {productImageCarousel && productImageCarousel.data.map((image, index) => {
                return (
                  <div key={index}>
                    {/* {image && image.attributes && <image src={findMediaUrl(image.attributes)}/>} */}
                  </div>
                )
            })}
          </Carousel>
        </div>
        <div className="h-full w-full bg-lightNavy">
          <ReactMarkdown>{productDescription}</ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export default ProductPageBlock;
