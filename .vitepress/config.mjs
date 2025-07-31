import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lipu sona pi sitelen leko",
  description: "o kama sona e sitelen leko!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
            text: 'How to use',
            items: [
              { text: 'Block Structure', link: '/pages/how-to-use/block-structure' },
              { text: 'Particles', link: '/pages/how-to-use/particles' },
              { text: 'Function Words', link: '/pages/how-to-use/function-words' },
              { text: 'Ambiguity', link: '/pages/how-to-use/ambiguity' },
              { text: 'Prepositions', link: '/pages/how-to-use/prepositions' },
              { text: 'Spacing', link: '/pages/how-to-use/spacing' },
              { text: 'Writing Names', link: '/pages/how-to-use/writing-names' },
              { text: 'Punctuation', link: '/pages/how-to-use/punctuation' }
            ]
          },
          { text: 'Dictionary', link: '/pages/dictionary' },
          { text: 'Graphemes', link: '/pages/graphemes' },
          { text: 'Story', link: '/pages/story' },
          {
            text: 'Font',
            items: [
              { text: 'Instructions', link: '/pages/font/instructions' },
              { text: 'Download', link: '/pages/font/download' }
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
