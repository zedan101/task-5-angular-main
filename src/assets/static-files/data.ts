export let filters = [
  ['departments', ['IT', 'HR', 'MD', 'Sales']],
  ['offices', ['seattle', 'india']],
  [
    'job titles',
    [
      'sharepoint practice head',
      '.net development lead',
      'recruiting expert',
      'BI developer',
      'business analyst',
      'a',
      'b',
      'c',
      'd',
      'e',
    ],
  ],
];
type filter =
  | '"IT","HR","MD","Sales"'
  | '"seattle","india"'
  | '"sharepoint practice head",".net development lead","recruiting expert","BI developer", "business analyst","a","b","c","d","e"';
