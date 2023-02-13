// import {IMAGE_QUERY} from "../../../utils/queries";

const HeroBlockQuery = `
... on ComponentPageBlocksHero {
    __typename
    id
    size
    title
    description
    smallTitle
    heroImage {
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
    button {
    id
    cta
    link
    hasLink
    __typename
    }
}
`;

export default HeroBlockQuery;