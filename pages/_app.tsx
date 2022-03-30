import '../styles/global.scss';

import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from 'api/client';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { IntlContext } from '../context/intl';

import { messages } from '../config/messages';

import Layout from '../components/Layout';
import ErrorBoundary from '../components/Error/Boundary';

function App(props: any) {
  const { Component, pageProps, isSsr = false } = props;

  const { locale = 'en' } = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <IntlContext.Provider value={messages[locale]}>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <ErrorBoundary>
              <Component {...{ isSsr, ...pageProps }} />
            </ErrorBoundary>
          </Layout>
        </ApolloProvider>
      </IntlContext.Provider>
    </>
  );
}

export default App;
