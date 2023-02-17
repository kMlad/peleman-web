const CallToActionBlockQuery = `
... on ComponentBlocksCallToAction {
  __typename
    id
    title
    description
    buttons {
      id
      cta
      link
    }
}
`;

export default CallToActionBlockQuery;
