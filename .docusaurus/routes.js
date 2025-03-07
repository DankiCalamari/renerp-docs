import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/renerp/',
    component: ComponentCreator('/renerp/', '383'),
    exact: true
  },
  {
    path: '/renerp/',
    component: ComponentCreator('/renerp/', '877'),
    routes: [
      {
        path: '/renerp/',
        component: ComponentCreator('/renerp/', '7a9'),
        routes: [
          {
            path: '/renerp/',
            component: ComponentCreator('/renerp/', '9e0'),
            routes: [
              {
                path: '/renerp/api/authentication',
                component: ComponentCreator('/renerp/api/authentication', '40e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/api/inventory',
                component: ComponentCreator('/renerp/api/inventory', 'c29'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/api/purchase',
                component: ComponentCreator('/renerp/api/purchase', 'eab'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/api/sales',
                component: ComponentCreator('/renerp/api/sales', '596'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/CODE_OF_CONDUCT',
                component: ComponentCreator('/renerp/CODE_OF_CONDUCT', '973'),
                exact: true
              },
              {
                path: '/renerp/contributing',
                component: ComponentCreator('/renerp/contributing', 'f1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/deployment',
                component: ComponentCreator('/renerp/deployment', 'fa5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/development',
                component: ComponentCreator('/renerp/development', '8c1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/features/inventory',
                component: ComponentCreator('/renerp/features/inventory', 'aff'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/features/purchase',
                component: ComponentCreator('/renerp/features/purchase', 'a83'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/features/sales',
                component: ComponentCreator('/renerp/features/sales', '82d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/installation',
                component: ComponentCreator('/renerp/installation', 'bdc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/intro',
                component: ComponentCreator('/renerp/intro', '3d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/renerp/troubleshooting',
                component: ComponentCreator('/renerp/troubleshooting', 'efd'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
