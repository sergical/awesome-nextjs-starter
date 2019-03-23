const sm = require('sitemap');
const path = require('path');

const sitemap = sm.createSitemap({
  hostname: 'https://awesome-nextjs-starter.now.sh',
  cacheTime: 600000, // 600 sec - cache purge period
});

const setup = ({ server }) => {
  // This is where you'd add all your pages for the site map. Example:
  sitemap.add({
    url: '/about',
    changefreq: 'daily',
    priority: 1,
  });

  server.get('/sitemap.xml', (req, res) => {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        return;
      }

      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  });

  server.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
  });
};

module.exports = setup;
