import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { POSTS_QUERY } from 'queries/posts';

import { handlePostsResponse } from 'response/handlers/posts';

const ClientPosts = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY);

  const posts = useMemo(() => handlePostsResponse(data), [data]);
  console.log(posts, loading, error);
  return <div></div>;
};

export default ClientPosts;
