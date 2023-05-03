// eslint-disable-next-line import/no-default-export
export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'NobinPegasus', // Navigation and Site Title
  siteTitleAlt: 'NobinPegasus – Low Level Systems Enthusiast', // Alternative Site title for SEO
  siteUrl: 'https://nobinpegasus.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/bg/bg.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg/bg3.jpg', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Low Level Systems Enthusiast', // Your site description
  author: 'Zeshan Ahmed Nobin', // Author for schemaORGJSONLD
  siteLogo: '/assets/home.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@zeshan_nobin', // Twitter Username - Optional
  ogLanguage: 'en_CA', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#398CCC',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Futura',
  bodyFontFamily: 'ff-tisa-web-pro',
  baseFontSize: '20px',

  //
  POST_PER_PAGE: 4
}