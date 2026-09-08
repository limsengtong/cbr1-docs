// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  robotsSidebar: [
    'robots',
    {
      type: 'category',
      label: 'R-BOT',
      link: {type: 'doc', id: 'rbot/overview'},
      items: [],
    },
    {
      type: 'category',
      label: 'CBR-1',
      link: {type: 'doc', id: 'cbr1/overview'},
      items: [
        {
          type: 'category',
          label: 'User Manual',
          link: {type: 'doc', id: 'cbr1/user-manual/index'},
          items: [
            'cbr1/user-manual/safety',
            'cbr1/user-manual/unboxing',
            'cbr1/user-manual/getting-started',
            'cbr1/user-manual/status-lights',
          ],
        },
        {
          type: 'category',
          label: 'Integration Guide',
          link: {type: 'doc', id: 'cbr1/integration/index'},
          items: [
            'cbr1/integration/mechanical',
            'cbr1/integration/electrical',
            'cbr1/integration/software',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          link: {type: 'doc', id: 'cbr1/tutorials/index'},
          items: [
            'cbr1/tutorials/first-drive',
          ],
        },
        {
          type: 'category',
          label: 'Maintenance Manual',
          link: {type: 'doc', id: 'cbr1/maintenance/index'},
          items: [
            'cbr1/maintenance/battery',
            'cbr1/maintenance/motor-controller',
            'cbr1/maintenance/preventative-schedule',
          ],
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          link: {type: 'doc', id: 'cbr1/troubleshooting/index'},
          items: [
            'cbr1/troubleshooting/common-issues',
          ],
        },
        {
          type: 'category',
          label: 'Error Codes',
          link: {type: 'doc', id: 'cbr1/error-codes/index'},
          items: [],
        },
      ],
    },
  ],
};

export default sidebars;
