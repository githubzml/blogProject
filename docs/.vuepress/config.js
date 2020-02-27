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
        },

        {
            title: '正则',
            collapsable: false,
            children: ['/Reg/']
        },
        {
            title: '奇技淫巧',
            collapsable: false,
            children: ['/DiabolicTricksAndWickedCraft/']
        },
        {
            title: '建议',
            collapsable: false,
            children: ['/suggest/']
        }
        ],
        lastUpdated: '上次更新时间'
    },

}