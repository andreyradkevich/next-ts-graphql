import React from 'react';

import { Post as PostI } from 'interfaces/post';

import styles from './styles.module.scss';

interface Proos {
  posts: PostI[];
}

const Posts = ({ posts }: Proos) => {
  return (
    <div className={styles.root}>
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <h6>{post.title}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
