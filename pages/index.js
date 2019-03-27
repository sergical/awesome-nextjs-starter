import React from 'react';
import { Page } from '@shopify/polaris';
import UrlForm from '../components/UrlForm';
import FileForm from '../components/FileForm';

export default function HomePage() {
  return (
    <Page title="Hey Shopify! 👋🏼">
      <UrlForm />
      <FileForm />
    </Page>
  );
}
