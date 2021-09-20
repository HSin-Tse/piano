module.exports = {
  siteMetadata: {
    siteTitle: '桃園中路特區 學鋼琴',
    siteDescription: '桃園中路特區 學鋼琴',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://pianomaster.gatsbyjs.io/',//https://chronoblog-profile.now.sh/
    pathPrefix: '/',
    siteLanguage: 'zh-tw',
    ogLanguage: `zh-tw`,
    author: '桃園中路特區 學鋼琴', // for example - 'Ivan Ganev'
    authorDescription: '聯絡電話:0910290068 何老師', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [

    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: false,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        // replace "chronoblog-profile" with your own disqus shortname
        shortname: `chronoblog-profile`,
      },
    },
  ],
};
