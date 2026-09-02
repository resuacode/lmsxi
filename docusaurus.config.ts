import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Linguaxes de Marcas e Sistemas de Xestión da Información. Curso 2026-27',
  tagline: 'Contenido para el curso de Linguaxes de Marcas e Sistemas de Xestión da Información del CFGS de Desenvolvemento de Aplicacións Web (DAW).',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://resuacode.es',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lmsxi/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'resuacode', // Usually your GitHub org/user name.
  projectName: 'lmsxi', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'LMSXI 2026-27',
      logo: {
        alt: 'LMSXI',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: '/docs/linguaxes-marcas',
          label: 'LMSXI',
          position: 'left',
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
              label: 'Inicio',
              to: '/docs/linguaxes-marcas',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/resuacode',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@resuacode',
            },
          ],
        },
      ],
      copyright: `Agradecimientos al profesor Daniel Martiñán por la cesión de gran parte del contenido de este sitio.<br>Copyright © ${new Date().getFullYear()} resuacode by Daniel Resúa.<br>Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins:[
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ],
  ],

};

export default config;
