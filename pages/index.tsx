import Head from 'next/head';
import { useIntl } from 'react-intl';

import { POSTS_QUERY } from 'queries/posts';

import { apolloClient } from 'api/client';

import { handlePostsResponse } from 'response/handlers/posts';

import { Post as PostI } from 'interfaces/post';

import Page from 'components/Page/Root';
import Posts from 'components/Pages/Home/Posts';
import ClientOnly from 'components/ClientOnly';
import ClientPosts from 'components/Pages/Home/ClientPosts';

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: POSTS_QUERY,
  });

  return {
    props: {
      posts: handlePostsResponse(data),
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
