// import {IMAGE_QUERY} from "../../../utils/queries";

const FaqBlockQuery = `
... on ComponentPageBlocksFaq {
    id
    title
    activeData
    data {
      id
      title
      accordionItems
      __typename
    }
    __typename
  }
`;
export default FaqBlockQuery;