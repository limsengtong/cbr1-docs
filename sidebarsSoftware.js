// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  softwareSidebar: [
    'software',
    'offboard-pc',
    'using-ros',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/ros2-quickstart',
      ],
    },
  ],
};

export default sidebars;
