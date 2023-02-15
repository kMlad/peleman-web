const TitleBlockQuery = `
... on ComponentBlocksTitle {
    id
    centeredTitle {
      id
      cta
      aligment
      fontSize
      __typename
    }
    __typename
  }
`;
export default TitleBlockQuery;
