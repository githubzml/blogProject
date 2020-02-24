module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/blog123/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'js', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebarDepth: 2,
        sidebar: [{
            title: 'ojs',
            collapsable: false,
            children: ['/guide/']
        },
        {
            title: '异步编程方法',
            collapsable: false,
            children: ['/async/']
        }
    ],
        lastUpdated: '上次更新时间'
    },

}