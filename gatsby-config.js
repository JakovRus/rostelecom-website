module.exports = {
  siteMetadata: {
    title: `Ростелеком Самара`,
    phoneNumbers: [
      '89377960956'
    ],
    description: `Интернет и ТВ для дома. Wi—Fi. Мобильная и городская связь. Оставьте заявку на сайте. Wink — Смотрите ТВ на любых устройствах: Smart TV, смартфоны, планшеты. Тарифы для всей семьи. Интернет для дома.`,
    author: `Ростелеком Самара`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`src/styles`],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/`,
      },
    },
  ],
};
