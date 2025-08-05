import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/lipu-sona-pi-sitelen-Kuwi/",  // 👈 must have trailing slash
  title: "lipu sona pi sitelen Kuwi",
  description: "o kama sona e sitelen Kuwi!",
  head: [
    ['link', { rel: 'icon', href: '/lipu-sona-pi-sitelen-Kuwi/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'introduction', link: '/pages/introduction' },
      { text: 'how to use', link: '/pages/block-structure' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/pages/introduction' },
          {
            text: 'Key concepts',
            items: [
              { text: 'Block Structure', link: '/pages/key-concepts/block-structure' },
              { text: 'Particles', link: '/pages/key-concepts/particles' },
              { text: 'Function Words', link: '/pages/key-concepts/function-words' },
              { text: 'Ambiguity', link: '/pages/key-concepts/ambiguity' },
              { text: 'Names and Punctuation', link: '/pages/key-concepts/names-and-punctuation' },
            ]
          },
          { text: 'Dictionary', link: '/pages/dictionary' },
          {
            text: 'Resources',
            items: [
              { 
                text: 'sitelen Kuwi', 
                items: [
                  { text: "Story", link: '/pages/resources/story' },
                  { text: "Art", link: '/pages/resources/art' },
                ]
              },
              { text: 'font', link: '/pages/resources/font' },
              { text: 'toki pona', link: 'https://sona.pona.la/wiki/Learning_Resources' }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClockWise3411/sitelen-leko' }
    ]
  }
})
