import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Awesome Android Root",
  ignoreDeadLinks: true,
  cleanUrls: true,

  head: [
    // Favicons with improved metadata
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'AAR' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { property: 'og:image', content: 'images/og.png' }],

    // Additional browser compatibility meta tags
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'AAR' }],
    ['meta', { name: 'application-name', content: 'Awesome Android Root' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],


    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'android root 2025, best magisk modules, lsposed framework, android rooting guide, kernelsu modules, root apps collection, android customization, xposed modules, bootloader unlock, android mods, root tools, custom rom, android tweaks, system modifications' }],

    ['meta', { name: 'author', content: 'Fynks' }],
    ['meta', { name: 'publisher', content: 'Awesome Android Root Project' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-image-preview:large' }],
    ['meta', { name: 'language', content: 'en-US' }],


    // Verification Meta Tags

  ],
  themeConfig: {
    logo: {
      light: '/images/logo.svg',
      dark: '/images/logo_dark.svg',
      alt: 'Site Logo'
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        },
        translations: {
          button: {
            buttonText: 'Search apps, modules & guides',
            buttonAriaLabel: 'Search root resources'
          },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Reset search',
            backButtonTitle: 'Close search',
            noResultsText: 'No results for',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },
    nav: [
      {
        text: 'Home',
        link: '/',
        ariaLabel: 'Go to homepage'
      },
      {
        text: 'Guides',
        items: [
          { text: 'Rooting Guides', link: '/rooting-guides/' },
          { text: 'Device-Specific Guides', link: '/rooting-guides/#device-specific-guides' },
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Glossary', link: '../#glossary' },
          { text: 'FAQs', link: '/faqs' },
          { text: 'Contributing Guide', link: '/contributing' }
        ]
      },
      {
        text: 'More',
        items: [
          {
            text: 'Alternative Sites',
            items: [
              { text: 'Cloudflare Pages', link: 'https://awesome-android-root.pages.dev/' },
              { text: 'Netlify Mirror', link: 'https://awesome-android-root.netlify.app/' },
              { text: 'Main Site', link: 'https://awesome-root.org/' }
            ]
          },
          { text: 'GitHub Repository', link: 'https://github.com/awesome-android-root/awesome-android-root' },
          { text: 'Report Issue', link: 'https://github.com/awesome-android-root/awesome-android-root/issues' }
        ]
      }
    ],
    sidebar: [
      {
        text: '🚀 Quick Start',
        collapsed: false,
        items: [
          { text: 'What is Root?', link: '/rooting-guides/#understanding-root-access' },
          { text: 'Benefits & Risks', link: '/rooting-guides/#should-you-root-your-device' },
          { text: 'Prerequisites', link: '/rooting-guides/#prerequisites-and-preparations' }
        ]
      },
      {
        text: '🔧 Rooting Guides',
        collapsed: false,
        items: [
          { text: 'General Rooting Guide', link: '/rooting-guides/#how-to-root' },
          { text: 'Framework Solutions', link: '/rooting-guides/#advanced-framework-solutions' },
          { text: 'Device-Specific Guides', link: '/rooting-guides/#device-specific-guides' }
        ]
      },
      {
        text: '💡 Help & Resources',
        collapsed: true,
        items: [
          { text: 'Frequently Asked Questions', link: '/faqs' },
          { text: 'Troubleshooting', link: '/faqs#troubleshooting' },
          { text: 'Glossary of Terms', link: '../#glossary' }
        ]
      },
      {
        text: '🤝 Contributing',
        collapsed: true,
        items: [
          { text: 'How to Contribute', link: '/contributing' },
          { text: 'Report an Issue', link: 'https://github.com/awesome-android-root/awesome-android-root/issues' }
        ]
      }
    ],
    footer: {
      message: "Released under the MIT License | Made with ❤️ for the Android community",
      copyright: `Copyright © ${new Date().getFullYear()} Awesome Android Root Project`
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/awesome-android-root/awesome-android-root' }
    ],
  }
})
