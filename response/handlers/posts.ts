import { Post, Post as PostI } from 'interfaces/post';

export const handlePostsResponse = (data: {
  posts: {
    edges: { node: PostI }[];
  };
}) => data.posts.edges.map(({ node }: { node: PostI }) => node);
