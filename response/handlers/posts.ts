import {
  Post as PostI,
  PostEdgesNodeReponse as PostEdgesNodeReponseI,
} from 'interfaces/post';

export const handlePostsResponse = (data: PostEdgesNodeReponseI) => {
  return data.posts.edges.map(({ node }: { node: PostI }) => node);
};
