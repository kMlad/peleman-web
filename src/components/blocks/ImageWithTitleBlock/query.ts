const ImageWithTitleBlockQuery = `
... on ComponentPageBlocksImageWithTitle {
  __typename
    id
    title
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
`;

export default ImageWithTitleBlockQuery;
