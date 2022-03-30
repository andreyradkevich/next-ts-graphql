import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query MyQuery {
    posts {
      edges {
        node {
          title
          seo {
            title
            twitterTitle
            twitterDescription
          }
          uri
          content
        }
      }
    }
  }
`;
