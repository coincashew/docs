import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Coincashew',
  tagline: 'Crypto is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.coincashew.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coincashew', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',  
          editUrl:
            'https://github.com/coincashew/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },    
    navbar: {
      title: 'Coincashew.com',
      logo: {
        alt: 'Coincashew',
        src: 'img/logo.png',
      },
      items: [
        {
          to: "/about",          
          position: 'left',
          label: 'About',
        },
        {
          to: "/ethpillar",          
          position: 'left',
          label: 'EthPillar',
        },
        {
          to: "/guides/testnet-hoodi",
          position: 'left',
          label: 'Guides',
        },                
        {
          href: 'https://github.com/coincashew/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'EthPillar',
              to: '/ethpillar',
            },
            {
              label: 'Guides',
              to: '/guides/testnet-hoodi',
            },            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/WS8E3PMzrb',
            },
            {
              label: 'X',
              href: 'https://x.com/coincashew_',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/coincashew',
            },            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/coincashew/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Made by Coincashew. On-Chain. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;