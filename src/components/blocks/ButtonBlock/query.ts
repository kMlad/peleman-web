const ButtonsBlockQuery = `
... on ComponentBlocksButtons {
  __typename
  id
  buttons {
    id
    cta
    link
    hasLink
    color
    __typename
  }
}
`;
export default ButtonsBlockQuery;
