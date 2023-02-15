const MarqeeBlockQuery = `
... on  ComponentBlocksMarquee{
    id
    logos{
      data{
        id
        attributes{
          width
          height
          url
        }
      }
    }
    title
  }
`;

export default MarqeeBlockQuery;
