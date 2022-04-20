import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { POSTS_QUERY } from 'queries/posts';

import { handlePostsResponse } from 'response/handlers/posts';

const ClientPosts = () => {
  const { data, loading } = useQuery(POSTS_QUERY);

  const posts = useMemo(() => (data ? handlePostsResponse(data) : []), [data]);

  if (loading) {
    return <div></div>;
  }
  console.log(posts, 'posts');
  return <div></div>;
};

export default ClientPosts;
