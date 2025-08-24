import React from 'react';
import Head from 'next/head';
import IndexSectionSignIn7 from '../components/sign-in/IndexSectionSignIn7';
import IndexSectionFeatures5 from '../components/features/IndexSectionFeatures5';
import IndexSectionBlog4 from '../components/blog/IndexSectionBlog4';
import IndexSectionTeams1 from '../components/teams/IndexSectionTeams1';
import IndexSectionHowItWorks8 from '../components/how-it-works/IndexSectionHowItWorks8';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title></title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-bootstrap.png'
        />
      </Head>
      <IndexSectionSignIn7 />
      <IndexSectionFeatures5 />
      <IndexSectionBlog4 />
      <IndexSectionTeams1 />
      <IndexSectionHowItWorks8 />
    </>
  );
};

export default Index;

