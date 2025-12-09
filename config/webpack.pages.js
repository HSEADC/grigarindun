const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html'),
  createPages('./src/pages/articles.html', './pages/articles.html'),
  createPages('./src/pages/cards.html', './pages/cards.html'),
  createPages('./src/pages/glossary.html', './pages/glossary.html'),
  createPages('./src/pages/tests.html', './pages/tests.html'),
  createPages('./src/pages/timeline.html', './pages/timeline.html'),
  createPages('./src/pages/about.html', './pages/about.html'),
  createPages('./src/styleguide.html', './styleguide.html'),

  createPages(
    './src/pages/tests/whatrapperareyou.html',
    './pages/tests/whatrapperareyou.html'
  ),
  createPages('./src/pages/articles/kanye.html', './pages/articles/kanye.html')
]

module.exports = htmlPages
