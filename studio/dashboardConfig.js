export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e26ee3650c2e2fcc6e06a8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-huiu5m36',
                  apiId: '3f89aa14-34b8-4b0f-85d1-08aef71108ac'
                },
                {
                  buildHookId: '60e26ee3b8c8791f8faad214',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-52ghvzsr',
                  apiId: '00ca0437-049b-436b-bbb0-fe7b8cf0583f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/B-c0des/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://brian-reed.netlify.app/', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
