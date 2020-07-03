const proxy = [
  {
    context: '/api',
    target: 'https://dio-process.herokuapp.com',
    pathRewrite: {'^/api' : ''}
  }
];module.exports = proxy;