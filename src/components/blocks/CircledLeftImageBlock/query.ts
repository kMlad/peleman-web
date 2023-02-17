const CircledLeftImageBlockQuery = `
... on ComponentBlocksLeftImageAndText {
  __typename
    id
    title
    description
    button {
      id
      cta
      link
      __typename
    }
    image {
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

export default CircledLeftImageBlockQuery;
