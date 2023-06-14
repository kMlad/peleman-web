import { gql } from "@apollo/client";
import BenefitsBlockQuery from "@blocks/BenefitsBlock/query";
import ButtonsBlockQuery from "@blocks/ButtonBlock/query";
import CallToActionBlockQuery from "@blocks/CallToActionBlock/query";
import CircledLeftImageBlockQuery from "@blocks/CircledLeftImageBlock/query";
import CircledRightImageBlockQuery from "@blocks/CircledRightImageBlock/query";
import ContactFormQuery from "@blocks/ContactFormBlock/query";
import DescriptionBlockQuery from "@blocks/DescriptionBlock/query";
import HeroBlockQuery from "@blocks/HeroBlock/query";
import ImageBlockQuery from "@blocks/ImageBlock/query";
import ImageWithTitleBlockQuery from "@blocks/ImageWithTitleBlock/query";
import LeftImageRightTextBlockQuery from "@blocks/LeftImageRightTextBlock/query";
import LeftTitleRightDescriptionBlockQuery from "@blocks/LeftTitleRightDescriptionBlock/query";
import MarqeeBlockQuery from "@blocks/MarqueeBlock/query";
import SellingPointBlockQuery from "@blocks/SellingPointsBlock/query";
import SpacingBlockQuery from "@blocks/SpacingBlock/query";
import TitleBlockQuery from "@blocks/TitleBlock/query";
import VideoHeroBlockQuery from "@blocks/VideoHeroBlock/query";

export const GET_ALL_PAGES = gql`
  query GetAllPages {
    pages (sort: "createdAt:desc", pagination: { limit: 1000 }){
      data {
        id
        attributes {
          __typename
          publishedAt
          title        
          slug
          seo {
            id
            __typename
            metaTitle
            metaDescription
            preventIndexing
            meta {
              __typename
              name
              content
            }
          }
          pageBlocks {
            __typename 
            ${BenefitsBlockQuery}
            ${ButtonsBlockQuery}
            ${CallToActionBlockQuery}
            ${CircledLeftImageBlockQuery}
            ${CircledRightImageBlockQuery}
            ${ContactFormQuery}
            ${DescriptionBlockQuery}
            ${HeroBlockQuery}
            ${ImageBlockQuery}
            ${ImageWithTitleBlockQuery}
            ${LeftImageRightTextBlockQuery}
            ${LeftTitleRightDescriptionBlockQuery}
            ${MarqeeBlockQuery}
            ${SellingPointBlockQuery}
            ${SpacingBlockQuery}
            ${TitleBlockQuery}
            ${VideoHeroBlockQuery}
          }
        }
      }
    } 
  }
`;
export const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    blogs(sort: "createdAt:desc", pagination: { limit: 1000 }) {
      data {
        id
        attributes {
          __typename
          publishedAt
          title
          author
          category
          thumbnail {
            __typename
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                mime
                url
              }
              __typename
            }
          }
          slug
          seo {
            id
            __typename
            metaTitle
            metaDescription
            preventIndexing
            meta {
              __typename
              name
              content
            }
          }
          blogBlocks {
            __typename
          }
        }
      }
    }
  }
`;

export const IMAGE_QUERY = `
{
  __typename
  data {
    id
    attributes {
      name
      alternativeText
      caption
      width
      height
      formats
      mime
      url
    }
    __typename
  }
}
`;

export const GET_ALL_PRODUCTS = gql`
  query {
    products {
      data {
        attributes {
          productTitle
          slug
          productDescription
          productMainImage {
            __typename
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                mime
                url
              }
              __typename
            }
          }
          productImageCarousel {
            __typename
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                mime
                url
              }
              __typename
            }
          }
          seo {
            id
            __typename
            metaTitle
            metaDescription
            preventIndexing
            meta {
              __typename
              name
              content
            }
          }
          product_categories {
            data {
              attributes {
                categoryName
              }
            }
          }
          productSpecs
        }
      }
    }
  }
`;

export const GET_COLORS_CONFIG = gql`
  query GetColorConfig {
    colorsConfig {
      data {
        attributes {
          primary
          primaryLight
          primaryDark
          secondary
          secondaryLight
          secondaryDark
          white
          black
          background
          gray
          lightGray
          darkGray
        }
      }
    }
  }
`;
