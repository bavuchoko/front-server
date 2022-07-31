const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/naver', {
            target: 'https://m.search.naver.com',
            pathRewrite: {
                '^/naver':''
            },
            changeOrigin: true
        }))
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:8080',
            pathRewrite: {
                '^/api':''
            },
            changeOrigin: true
        }))
};