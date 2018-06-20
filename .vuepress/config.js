module.exports = {
  title: 'defects.ai',
  //base: '/documentation/',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'defects.ai', link: 'http://defects.ai' }],
    repo: 'defectsai/documentation',
    repoLabel: 'Contribute on Github',
    docsRepo: 'defectsai/documentation',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    dest: '../docs',
    sidebar: {
      '/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: ['', 'boards']
        }
      ]
    }
  }
};
