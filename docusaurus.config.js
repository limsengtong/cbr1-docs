// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CBR-1 Documentation',
  tagline: 'Documentation and Tutorials for CBI Robotics Platforms',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://limsengtong.github.io',
  baseUrl: '/cbr1-docs/',

  organizationName: 'limsengtong',
  projectName: 'cbr1-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // The "Robots" section is the default docs instance.
        docs: {
          id: 'default',
          path: 'docs_robots',
          routeBasePath: 'docs_robots',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/limsengtong/cbr1-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // The "Software" section is a second, independent docs instance —
    // same pattern Clearpath uses to split Robots vs Software vs
    // OutdoorNav/IndoorNav into separate top-nav sections.
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'software',
        path: 'docs_software',
        routeBasePath: 'docs_software',
        sidebarPath: './sidebarsSoftware.js',
        editUrl: 'https://github.com/limsengtong/cbr1-docs/tree/main/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CBI Robotics',
        logo: {
          alt: 'CBI Robotics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'robotsSidebar',
            docsPluginId: 'default',
            position: 'left',
            label: 'Robots',
          },
          {
            type: 'docSidebar',
            sidebarId: 'softwareSidebar',
            docsPluginId: 'software',
            position: 'left',
            label: 'Software',
          },
          {
            href: 'https://github.com/limsengtong/cbr1-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://cbirobotics.com/store',
            label: 'Store',
            position: 'right',
          },
          {
            href: 'https://cbirobotics.com',
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Robots',
            items: [
              {label: 'Robots Overview', to: '/docs_robots'},
              {label: 'CBR-1', to: '/docs_robots/cbr1'},
              {label: 'R-BOT', to: '/docs_robots/rbot'},
            ],
          },
          {
            title: 'Software',
            items: [
              {label: 'Software Overview', to: '/docs_software'},
              {label: 'Using ROS', to: '/docs_software/using-ros'},
            ],
          },
          {
            title: 'Support',
            items: [
              {label: 'Contact Support', href: 'mailto:support@cbirobotics.com'},
              {label: 'Sales & Distribution', href: 'mailto:sales@cbirobotics.com'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'CBI Robotics Store', href: 'https://cbirobotics.com'},
              {label: 'GitHub', href: 'https://github.com/limsengtong/cbr1-docs'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CBI Robotics. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
