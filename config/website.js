const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'David Parsons - Software Engineer', // Navigation and Site Title
  siteTitleAlt: 'David Parsons', // Alternative Site title for SEO
  siteUrl: 'https://davidparsons.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo-1024.png', // U/sed for SEO and manifest
  siteDescription: 'Personal Website for David Parsons, Software Engineer',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
