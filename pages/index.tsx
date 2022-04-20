import Head from 'next/head';
import { useIntl } from 'react-intl';
import { ApolloQueryResult } from '@apollo/client';

import { POSTS_QUERY } from 'queries/posts';

import { apolloClient } from 'api/client';

import { handlePostsResponse } from 'response/handlers/posts';

import {
  Post as PostI,
  PostEdgesNodeReponse as PostEdgesNodeReponseI,
} from 'interfaces/post';

import Page from 'components/Page/Root';
import Posts from 'components/Pages/Home/Posts';
import ClientOnly from 'components/ClientOnly';
import ClientPosts from 'components/Pages/Home/ClientPosts';

export async function getStaticProps() {
  const response: ApolloQueryResult<PostEdgesNodeReponseI> =
    await apolloClient.query({
      query: POSTS_QUERY,
    });
  console.log(response.data, 'sda');
  return {
    props: {
      posts: handlePostsResponse(response.data),
    },
  };
}

interface Props {
  posts: PostI[];
}

function Home({ posts }: Props) {
  const { messages } = useIntl();

  return (
    <>
      <Head>
        <title>{messages.home}</title>
        <meta name="description" content={messages.home} />
        <meta property="og:title" content={messages.home} />
      </Head>

      <Page>
        <Posts posts={posts} />

        <ClientOnly>
          <ClientPosts />
        </ClientOnly>
      </Page>
    </>
  );
}

export default Home;
