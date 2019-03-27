import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { AppProvider } from '@shopify/polaris';
import withApolloClient from '../lib/with-apollo-client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://sdks.shopifycdn.com/polaris/3.11.0/polaris.min.css"
          />
        </Head>
        <Container>
          <ApolloProvider client={apolloClient}>
            <AppProvider>
              <Component {...pageProps} />
            </AppProvider>
          </ApolloProvider>
        </Container>
      </>
    );
  }
}

export default withApolloClient(MyApp);
