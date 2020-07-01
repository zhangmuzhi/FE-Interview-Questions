const _ = require('lodash')

module.exports = {
  base: '/FE-Interview-Questions/',
  title: 'FE-Interview',
  description: '前端面试题整理',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style',  }],
    ['script', { src: 'https://my.openwrite.cn/js/readmore.js' }],
    ['script', { src: 'https://blog.poetries.top/img-repo/2020/06/openwrite.js' }]
  ],
  themeConfig: {
    logo: '/logo.png', // 左上角的logo
    nav: [
      { text: '基础', link: '/docs/base' },
      { text: '进阶', link: '/docs/improve' },
      { text: '高级', link: '/docs/advance' },
      { text: '通识', link: '/docs/computed-base' },
      { text: '精华', link: '/docs/excellent' },
      { text: '简版', link: '/docs/simply' },
      { text: '综合', link: '/docs/comprehensive' },
      { text: '其他', link: '/docs/review' },
      { text: 'QA', link: '/docs/qa' }
    ],
    sidebar: {
      '/docs/': [
        ['base', '基础篇'],
        ['improve', '进阶'],
        ['advance', '高级'],
        ['computed-base', '通识'],
        ['excellent', '精华'],
        ['simply', '简版'],
        ['comprehensive', '综合'],
        ['review', '其他'],
        ['qa', 'QA']
      ],
    },
    // repo: 'poetries/FE-Interview-Questions',
    lastUpdated: 'Last Updated',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    // repo: 'poetries/FE-Interview-Questions/tree/dev',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'poetries/FE-Interview-Questions',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'dev',
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
    (options, ctx) => {
      return {
        name: 'archive',
        async additionalPages () {
          return [
            {
              path: '/',
              frontmatter: {
                home: true,
                heroText: 'FE-Interview',
                heroImage: '/logo.png',
                tagline: '前端进阶之路',
                actionText: '快速了解 →',
                actionLink: '/docs/base',
                features: [{
                  title: '基础篇',
                  details: '帮你梳理常见的前端基础面试题'
                }, {
                  title: '进阶篇',
                  details: '提炼分析面试难点，助你快速理解'
                }, {
                  title: '通识篇',
                  details: '巩固计算机基础'
                }],
                footer: 'Copyright © 2018 poetries'
              }
            }
          ]
        },
        // extendPageData ($page) {
        //   const number = $page.path.split(/[\/\.]/g)[3]
        //   if (/\d+/.test(number)) {
        //     const issue = _.get(issuesByNumber, number, {})
        //     const labels = _.flatMap(issue.labels, label => {
        //       if (!label) { return null }
        //       label = labelsByName[label.name]
        //       const labels = [label.alias, label.name, GROUP_MAP[label.group]]
        //       return labels
        //     }).filter(_.identity)
        //     $page.frontmatter.meta = [{
        //       name: 'keywords',
        //       content: ['大厂面试', '每日一题', ...labels].join(',')
        //     }]
        //     $page.frontmatter.description = issue.body | _.slice(_.get(issue.comment, 'body', desc), 0, 240) 
        //   }
        // }
      }
    }
  ],
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    lineNumbers: false,
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-task-checkbox'))
    }
  }
}
