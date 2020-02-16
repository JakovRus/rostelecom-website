import React from 'react';

import {Layout} from '../components/layout/layout';
import SEO from '../components/seo';
import {RateCards, rateTypes} from '../components/rate-cards/rate-cards';

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home"/>
      <RateCards data={data} type={rateTypes.INTERNET_AND_TV}/>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
{
  allRatesInternetAndTvJson {
    edges {
      node {
        description
        name
        price
      }
    }
  }
}
`;