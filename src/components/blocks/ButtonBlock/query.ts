const ButtonsBlockQuery = `
... on ComponentBlocksButtons {
  __typename
  id
  buttons {
    id
    cta
    link
    color
    __typename
  }
}
`;
export default ButtonsBlockQuery;
