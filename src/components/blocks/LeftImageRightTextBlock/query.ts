const LeftImageRightTextBlockQuery = `
... on ComponentBlocksLeftImageRightText {
    id
    title
    description
    circledImage {
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
    __typename
 }
`;

export default LeftImageRightTextBlockQuery;
