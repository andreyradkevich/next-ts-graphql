import { Keys } from 'enums/post';

import { Seo } from './seo';

export interface Post {
  [Keys.title]: string;
  [Keys.seo]: Seo;
  [Keys.content]: string;
}

export interface PostEdgesNodeReponse {
  posts: {
    edges: { node: Post }[];
  };
}
