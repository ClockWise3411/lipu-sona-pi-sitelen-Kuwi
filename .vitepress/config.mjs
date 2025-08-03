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
              { text: 'Prepositions', link: '/pages/key-concepts/prepositions' },
              { text: 'Spacing', link: '/pages/key-concepts/spacing' },
              { text: 'Names', link: '/pages/key-concepts/names' },
              { text: 'Punctuation', link: '/pages/key-concepts/punctuation' }
            ]
          },
          { text: 'Dictionary', link: '/pages/dictionary' },
          {
            text: 'Resources',
            items: [
              { text: 'sitelen Kuwi', link: '/pages/resources/sitelen-kuwi' },
              { text: 'font', link: '/pages/resources/font' },
              { text: 'toki pona', link: '/pages/resources/toki-pona' }
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
