const ImageBlockQuery = `
... on ComponentBlocksImage{
    id
    image{
      data{
        id
        attributes{
          name
          alternativeText
          caption
          width
          height
          formats
          mime
          size
          url
          previewUrl                
        }
        __typename
      }
      __typename
    }
    desc
    __typename
  }
`;
export default ImageBlockQuery;
