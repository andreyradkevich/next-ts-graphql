import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query NewQuery {
    posts {
      edges {
        node {
          uri
          title
          status
          content
        }
      }
    }
  }
`;
