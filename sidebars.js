/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'installation',
        'development',
        'deployment',
        'troubleshooting',
        'contributing',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/inventory',
        'features/sales',
        'features/purchase',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/authentication',
        'api/inventory',
        'api/sales',
        'api/purchase',
      ],
    },
  ],
};

module.exports = sidebars; 