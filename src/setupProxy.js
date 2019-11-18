const proxy = require('http-proxy-middleware')
module.exports = function ( app ) {
  app.use(proxy(
    '/index.php',{
      target: 'http://www.qinqin.net',
      changeOrigin: true 
    }
  ))
  app.use(proxy(
    '/ajax',{
      target: 'http://m.maoyan.com',
      changeOrigin: true
    }
  ))
}
