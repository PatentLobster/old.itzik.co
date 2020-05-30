// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'itzik.co',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'markdownPage', // Required
        baseDir: './content', // Where .md files are located
        template: './src/templates/Base.vue', // Optional
        route:'/',
        plugins: [
          '@gridsome/remark-prismjs'
        ],
      }
    }
  ]
};
