// src/data.js

export const resources = {
  // Default resources to show when no specific context is matched.
  default: [
    {
      id: 'res-01',
      type: 'Article',
      title: 'Best Practices for CRM Data Entry',
      url: '#',
    },
    {
      id: 'res-02',
      type: 'Video',
      title: 'Introduction to the Sales Pipeline',
      url: '#',
    },
  ],
  // Resources triggered by the "interacted" verb on a specific field.
  interacted: {
    salesStage: [
      {
        id: 'res-03',
        type: 'Job Aid',
        title: 'Sales Stage Definitions',
        url: '#',
      },
      {
        id: 'res-04',
        type: 'Checklist',
        title: 'Stage Exit Criteria',
        url: '#',
      },
    ],
    estimatedValue: [
        {
            id: 'res-05',
            type: 'Article',
            title: 'How to Estimate Deal Size',
            url: '#',
        }
    ]
  },
  // Resources triggered by the "struggled" verb on a specific field.
  struggled: {
    estimatedValue: [
      {
        id: 'res-06',
        type: 'Video',
        title: 'Advanced Tutorial: Forecasting Opportunity Value',
        url: '#',
      },
      {
        id: 'res-07',
        type: 'Contact',
        title: 'Contact Sales Support',
        url: 'mailto:sales.support@example.com',
      },
    ],
  },
};
