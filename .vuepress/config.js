module.exports = {
  title: 'Julica API',
  base: '/',
  description: 'Julica digital signature application toolkit.',
  theme: 'openapi',
  themeConfig: {
    servers: ['/api/1.0/'],
    locales: {
      '/': {
        sidebar: 'auto',
        nav: [
          {
            text: 'Guide',
            link: '/Getting-started' },
          {
            text: 'Julica API',
            link: 'https://api.julica.me/'
          },
          {
            text: 'Github',
            link: 'https://github.com/tendaworld/julica'
          }
        ]
      },
    }
  },
  locales: {
    '/': {
      lang: 'en-US'
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
};
