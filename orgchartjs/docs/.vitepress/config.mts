import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  base: "/OrgChartJS/Docs/",
  // base: "/",
  title: 'BALKAN OrgChart JS - JavaScript Org Chart Library | Docs',
  description: 'BALKAN OrgChart JS documentation for building interactive organizational charts with JavaScript. Learn API, features, templates, and customization.',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'BALKAN OrgChart JS - JavaScript Org Chart Library | Docs' }],
    ['meta', { property: 'og:description', content: 'BALKAN OrgChart JS documentation for building interactive organizational charts with JavaScript. Learn API, features, templates, and customization.' }],
    // ['meta', { property: 'og:image', content: 'https://balkan.app/Content/img/screenshot-ba.png' }],
    ['meta', { property: 'og:url', content: 'https://balkan.app/OrgChartJS/Docs/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'BALKAN OrgChart JS - JavaScript Org Chart Library | Docs' }],
    ['meta', { name: 'twitter:description', content: 'BALKAN OrgChart JS documentation for building interactive organizational charts with JavaScript. Learn API, features, templates, and customization.' }],
    ['meta', { name: 'twitter:image', content: 'https://balkan.app/Content/img/oc.png' }],
    ['meta', { name: 'twitter:url', content: 'https://balkan.app/OrgChartJS/Docs/' }],
    ['meta', { name: 'robots', content: 'index, follow' }] 
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/': [
        {
          items: [
            { text: 'Getting Started', link: '/GettingStarted' },
            { text: 'Mobile View', link: '/Mobile' },
            {
              text: 'Templates / CSS',
              collapsed: true,
              items: [
                { text: 'Predefined Templates <span class="badge-ce" title="Available in community edition">CE</span>', link: '/PredefinedTemplates' },
                { text: 'Custom Templates <span class="badge-ce" title="Available in community edition">CE</span>', link: '/CreatingCustomTemplate' },
                { text: 'Multiple Templates <span class="badge-ce" title="Available in community edition">CE</span>', link: '/MultipleTemplates' },
                { text: 'CSS customization <span class="badge-ce" title="Available in community edition">CE</span>', link: '/CSSCustomization' }
              ]
            },
            {
              text: 'Fields',
              collapsed: true,
              items: [
                { text: 'Field definitions <span class="badge-ce" title="Available in community edition">CE</span>', link: '/Fields' },
                { text: 'Text Overflow <span class="badge-ce" title="Available in community edition">CE</span>', link: '/TextOverFlow' }
              ]
            },
            {
              text: 'Links',
              collapsed: true,
              items: [
                { text: 'Main Link <span class="badge-ce" title="Available in community edition">CE</span>', link: '/Link' },
                { text: 'Slink', link: '/Slink' },
                { text: 'Clink', link: '/Clink' }
              ]
            },
            {
              text: 'Assistant / Partner',
              collapsed: true,
              items: [
                { text: 'Assistant', link: '/Assistant' },
                { text: 'Partner', link: '/Partner' }
              ]
            },
            {
              text: 'Import / Export',
              collapsed: true,
              items: [
                { text: 'PDF Export', link: '/ExportingPDF' },
                { text: 'PNG / SVG Export', link: '/ExportingPNG' },
                { text: 'PowerPoint Export', link: '/ExportingPowerPoint' },
                { text: 'Other Exports', link: '/ExportingOther' },
                { text: 'Import', link: '/Importing' }
              ]
            },
            {
              text: 'UI Elements',
              collapsed: true,
              items: [
                { text: 'Search', link: '/Search' },
                { text: 'Filter', link: '/Filter' },
                { text: 'AI', link: '/AI' },
                { text: 'Controls', link: '/Controls' },
                { text: 'Menus', link: '/Menus' },
                { text: 'Edit form', link: '/Edit' },
                { text: 'Undo / Redo', link: '/UndoRedo' },
                { text: 'OrgScribe', link: '/OrgScribe' }
              ]
            },
            {
              text: 'Layout',
              collapsed: true,
              items: [
                { text: 'Sub Trees', link: '/SubTrees' },
                { text: 'Layout', link: '/Layout' },
                { text: 'Tree List Layout', link: '/treeListLayout' },
                { text: 'Scale and Padding', link: '/ScaleAndPadding' },
                { text: 'Orientation', link: '/Orientation' },
                { text: 'Navigation', link: '/Navigation' },
                { text: 'Keyboard Navigation <span class="badge-ce" title="Available in community edition">CE</span>', link: '/KeyNavigation' }
              ]
            },
            {
              text: 'Features',
              collapsed: true,
              items: [
                { text: 'Expand / Collapse <span class="badge-ce" title="Available in community edition">CE</span>', link: '/ExpandCollapse' },
                { text: 'Drag and Drop', link: '/DragAndDrop' },
                { text: 'Minimize / Maximize <span class="badge-ce" title="Available in community edition">CE</span>', link: '/MinMax' },
                { text: 'Dotted Line <span class="badge-ce" title="Available in community edition">CE</span>', link: '/DottedLine' }
              ]
            },
            {
              text: 'Other',
              collapsed: true,
              items: [
                { text: 'Node (API) <span class="badge-ce" title="Available in community edition">CE</span>', link: '/NodeAPI' },
                { text: 'Tags <span class="badge-ce" title="Available in community edition">CE</span>', link: '/Tags' },
                { text: 'State', link: '/State' },
                { text: 'Performance <span class="badge-ce" title="Available in community edition">CE</span>', link: '/Performance' },
                { text: 'Server Side Examples <span class="badge-ce" title="Available in community edition">CE</span>', link: '/GitHub' },
                { text: 'Salesforce Integration <span class="badge-ce" title="Available in community edition">CE</span>', link: '/Salesforce' },
                { text: 'How to create OrgChart JS programmatically (API) <span class="badge-ce" title="Available in community edition">CE</span>', link: '/CreateProgrammatically' },
                { text: 'Use Cases', link: '/UseCases' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})