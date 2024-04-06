import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iRacing API",
  description: "A wrapper for the iRacing API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting started', link: '/getting-started' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'How to use', link: '/api/how-to-use' },
          { text: 'Car', link: '/api/car' },
          { text: 'Car Class', link: '/api/car-class' },
          { text: 'Constants', link: '/api/constants' },
          { text: 'Hosted', link: '/api/hosted' },
          { text: 'League', link: '/api/league' },
          { text: 'Lookup', link: '/api/lookup' },
          { text: 'Member', link: '/api/member' },
          { text: 'Results', link: '/api/results' },
          { text: 'Season', link: '/api/season' },
          { text: 'Series', link: '/api/series' },
          { text: 'Team', link: '/api/team' },
          { text: 'Time Attack', link: '/api/time-attack' },
          { text: 'Track', link: '/api/track' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/themich4/iracing-api' }
    ]
  }
})
