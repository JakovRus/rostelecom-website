import React from 'react';

import {Layout} from '../components/layout/layout';
import SEO from '../components/seo';
import {RateCards, rateTypes} from '../components/rate-cards/rate-cards';

const InternetPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home"/>
      <RateCards data={data} type={rateTypes.INTERNET}/>
    </Layout>
  );
};

export default InternetPage;

export const query = graphql`
{
  allRatesInternetJson {
    edges {
      node {
        description
        name
        price
        id
      }
    }
  }
}
`;