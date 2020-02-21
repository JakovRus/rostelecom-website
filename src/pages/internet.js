import React from 'react';

import {Layout} from '../components/layout/layout';
import SEO from '../components/seo';
import {RateCards, rateTypes} from '../components/rate-cards/rate-cards';

const InternetPage = ({data, location}) => {
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Интернет" keywords={[
        "Ростелеком Самара",
        "Тарифы интернет",
      ]}/>
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