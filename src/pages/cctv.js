import React from 'react';

import {Layout} from '../components/layout/layout';
import SEO from '../components/seo';
import {RateCards, rateTypes} from '../components/rate-cards/rate-cards';

const CctvPage = ({data, location}) => {
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Видеонаблюдение" keywords={[
        "Ростелеком Самара",
        "Видеонаблюдение",
      ]}/>
      <RateCards data={data} type={rateTypes.CCTV}/>
    </Layout>
  );
};

export default CctvPage;

export const query = graphql`
{
  allRatesCctvJson {
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