/* eslint-disable @typescript-eslint/no-var-requires */
const { onCreateWebpackConfig } = require('./bootup/onCreateWebpackConfig')
const { onCreateNode } = require('./bootup/onCreateNode')
const { createPages } = require('./bootup/createPages')

/** @type { import("gatsby").GatsbyNode } */
const gatsbyNode = {
  onCreateNode,
  createPages,
  onCreateWebpackConfig
}
module.exports = gatsbyNode

/*
TODO: Gatsby launch.json for VSCode
*/


exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  // It's required by pdfjs-dist
  actions.setWebpackConfig({
    module: {
            rules: [
              {
                test: /react-pdf/, // check /pdfjs-dist/ too
                use: loaders.null()
              },
              {
                test: /pdfjs-dist/, // check /pdfjs-dist/ too
                use: loaders.null()
              },
              { test: /\.pdf$/, use: 'pdf-loader' },
            ]
          },
      externals: [{
          canvas: 'canvas',
      }],
  });
};