import React from 'react';

import {Layout} from '../components/layout/layout';
import SEO from '../components/seo';
import {RateCards, rateTypes} from '../components/rate-cards/rate-cards';

const IndexPage = ({data, location}) => {

  return (
    <Layout pathname={location.pathname}>
      <SEO title="Главная" keywords={[
        "Ростелеком Самара",
        "Тарифы",
        "Интернет и телевидение Самара",
      ]}/>
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
        id
      }
    }
  }
}
`;