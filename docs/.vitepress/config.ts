module.exports = {
    // 网站标题
    title: 'light-player',
    // 网站描述
    description: '一款轻量web播放器,基于vue3.2的组件库。',
    // 打包目录
    dest: './dist',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 导航栏配置
        nav: [
            { text: '我的个人网站', link: 'peakchao.com' },
            { text: 'Github', link: 'https://github.com/zhangzhichaolove' },
        ],
        // sidebar: 'auto'
        sidebar: {
            '/': getSidebar()
        },
    }
}

function getSidebar() {
    return [
        {
            text: '开始',
            link: '/',
        },
        {
            text: 'Button 按钮',
            link: '/Button',
        },
    ]
}