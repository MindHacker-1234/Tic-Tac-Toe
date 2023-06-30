import { register } from 'react-native-bundle-splitter';

const components = {
  Login: {
    type: register({ loader: () => import('./Login/Login.component') }),
    name: 'LoginComponent',
  },
  Main: {
    type: register({ loader: () => import('./Main/Main.component') }),
    name: 'MainComponent',
  },
  Turn: {
    type: register({ loader: () => import('./Turn/Turn.component') }),
    name: 'TurnComponent',
  },
  Turn_Copy: {
    type: register({ loader: () => import('./Turn_Copy/Turn_Copy.component') }),
    name: 'Turn_CopyComponent',
  },
  Turn_Copy_Copy: {
    type: register({
      loader: () => import('./Turn_Copy_Copy/Turn_Copy_Copy.component'),
    }),
    name: 'Turn_Copy_CopyComponent',
  },
  empty: {
    type: register({ loader: () => import('./empty/empty.component') }),
    name: 'emptyComponent',
  },
  selectgrid: {
    type: register({
      loader: () => import('./selectgrid/selectgrid.component'),
    }),
    name: 'selectgridComponent',
  },
  selectgrid_Copy: {
    type: register({
      loader: () => import('./selectgrid_Copy/selectgrid_Copy.component'),
    }),
    name: 'selectgrid_CopyComponent',
  },
  settings: {
    type: register({ loader: () => import('./settings/settings.component') }),
    name: 'settingsComponent',
  },
  settings_Copy: {
    type: register({
      loader: () => import('./settings_Copy/settings_Copy.component'),
    }),
    name: 'settings_CopyComponent',
  },
};

const configs = [
  { name: 'Login', type: 'PAGE', params: [] },
  { name: 'Main', type: 'PAGE', params: [] },
  {
    name: 'Turn',
    type: 'PAGE',
    params: [
      { name: 'playername', type: 'string' },
      { name: 'playeravatar', type: 'string' },
      { name: 'playerchoice', type: 'string' },
      { name: 'playergrid', type: 'string' },
      { name: 'playerlevel', type: 'string' },
    ],
  },
  {
    name: 'Turn_Copy',
    type: 'PAGE',
    params: [
      { name: 'playername', type: 'string' },
      { name: 'playeravatar', type: 'string' },
      { name: 'playerchoice', type: 'string' },
      { name: 'playergrid', type: 'string' },
      { name: 'playerlevel', type: 'string' },
    ],
  },
  {
    name: 'Turn_Copy_Copy',
    type: 'PAGE',
    params: [
      { name: 'playername', type: 'string' },
      { name: 'playeravatar', type: 'string' },
      { name: 'playerchoice', type: 'string' },
      { name: 'playergrid', type: 'string' },
      { name: 'playerlevel', type: 'string' },
    ],
  },
  { name: 'empty', type: 'PAGE', params: [] },
  { name: 'selectgrid', type: 'PAGE', params: [] },
  { name: 'selectgrid_Copy', type: 'PAGE', params: [] },
  {
    name: 'settings',
    type: 'PAGE',
    params: [
      { name: 'playername', type: 'string' },
      { name: 'playeravatar', type: 'string' },
    ],
  },
  {
    name: 'settings_Copy',
    type: 'PAGE',
    params: [
      { name: 'playername', type: 'string' },
      { name: 'playeravatar', type: 'string' },
    ],
  },
];

configs.forEach(p => {
  const component = components[p.name];
  p.component = component.type;
  p.componentName = component.name;
});

export default configs;
