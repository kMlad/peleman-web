import { gql } from '@apollo/client';
import ContactFormQuery from '@blocks/ContactFormBlock/query';


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
            ${ContactFormQuery}           
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
          thumbnail{
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

export const CREATE_CUSTOMER = gql`
  mutation CreateCustomer(
    $firstName: String!
    $lastName: String!
    $company: String!
    $email: String!
    $address: String!
    $city: String!
    $country: String!
    $postCode: String!
    $phone: String!
    $password: String!
  ) {
    createCustomer(
      data: {
        firstName: $firstName
        lastName: $lastName
        company: $company
        email: $email
        address: $address
        city: $city
        country: $country
        postCode: $postCode
        phone: $phone
        password: $password
      }
    ) {
      data {
        id
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($orderItems: JSON!) {
    createOrder(
      data: {
        orderItems: $orderItems
        billingAddress: {
          firstName: ""
          lastName: ""
          city: ""
          state: ""
          country: ""
        }
      }
    ) {
      data {
        id
        attributes {
          chargebeeUrl
          status
        }
      }
    }
  }
`;

export const GET_PORTAL_SESSION = gql`
  query GetPortalSession {
    portalSession {
      data {
        id
        attributes {
          token
          accessUrl
        }
      }
    }
  }
`;

export const LOCATIONS_QUERY = gql`
  query Locations {
    locations {
      data {
        attributes {
          name
          description
          sku
        }
      }
    }
  }
`;

export const CURRENCIES_QUERY = gql`
  query Currencies {
    currencies {
      data {
        attributes {
          code
          name
          symbol
        }
      }
    }
  }
`;

export const VM_PORDUCTS_QUERY = gql`
  query Products($location: String!, $currency: String!) {
    products(
      filters: {
        title: { contains: $location }
        productType: { eq: "plan" }
        productCategory: { sku: { eq: "VM" } }
      }
    ) {
      data {
        attributes {
          productType
          title
          sku
          metadata
          productPrices(filters: { currency: { eq: $currency } }) {
            data {
              attributes {
                price
                sku
                currency
              }
            }
          }
        }
      }
    }
  }
`;

export const VM_ADDONS_QUERY = gql`
  query Adddons($currency: String!) {
    products(
      pagination: { limit: 100 }
      filters: {
        productType: { eq: "addon" }
        productCategory: { sku: { eq: "VM" } }
      }
    ) {
      data {
        attributes {
          title
          sku
          productType
          description
          metadata
          productPrices(filters: { currency: { eq: $currency } }) {
            data {
              attributes {
                tiers
                price
                sku
                currency
                pricingModel
              }
            }
          }
        }
      }
    }
  }
`;
