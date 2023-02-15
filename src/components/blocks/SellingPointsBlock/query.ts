const SellingPointBlockQuery = `
...on ComponentBlocksSellingPoints{
    id
    benefits{
      id
      title
      description
      image{
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
    }
    __typename
  }
`;

export default SellingPointBlockQuery;
