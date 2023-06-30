import { ModelVariable } from '@wavemaker/app-rn-runtime/variables/model-variable';
import { ServiceVariable } from '@wavemaker/app-rn-runtime/variables/service-variable';
import { NavigationAction } from '@wavemaker/app-rn-runtime/actions/navigation-action';
import { TimerAction } from '@wavemaker/app-rn-runtime/actions/timer-action';
import { NotificationAction } from '@wavemaker/app-rn-runtime/actions/notification-action';
import { DeviceVariable } from '@wavemaker/app-rn-runtime/variables/device-variable';
import { LoginAction } from '@wavemaker/app-rn-runtime/actions/login-action';
import { LogoutAction } from '@wavemaker/app-rn-runtime/actions/logout-action';
import WmPartialContainer from '@wavemaker/app-rn-runtime/components/page/partial-container/partial-container.component';
import React from 'react';

export default App => {
  return {
    Variables: {
      appInfo: new DeviceVariable({
        name: 'appInfo',
        _context: App,
        operation: 'getAppInfo',
        service: 'device',
        paramProvider: () => ({}),
      }),
      deviceInfo: new DeviceVariable({
        name: 'deviceInfo',
        _context: App,
        operation: 'getDeviceInfo',
        service: 'device',
        paramProvider: () => ({}),
      }),
      Player: new ModelVariable({
        name: 'Player',
        _context: App,
        paramProvider: () => ({
          name: 'name0',
          dataValue: 'dataValue0',
          playername: '',
          playeravatar: '',
          playerchoice: '',
          playergrid: '',
          playerlevel: '',
        }),
      }),
      selectdifficultylevel: new ModelVariable({
        name: 'selectdifficultylevel',
        _context: App,
        paramProvider: () => [
          { name: 'Easy', dataValue: 'Easy' },
          { name: 'Medium', dataValue: 'Medium' },
          { name: 'Hard', dataValue: 'Hard' },
        ],
        isList: true,
      }),
      Selectgrid: new ModelVariable({
        name: 'Selectgrid',
        _context: App,
        paramProvider: () => [
          { name: 'name1', dataValue: '3 x 3' },
          { name: 'name2', dataValue: '4 x 4' },
          { name: 'name3', dataValue: '5 x 5' },
        ],
        isList: true,
      }),
      selectside: new ModelVariable({
        name: 'selectside',
        _context: App,
        paramProvider: () => [
          { name: 'name1', dataValue: 'X' },
          { name: 'name2', dataValue: 'O' },
        ],
        isList: true,
      }),
      supportedLocale: new ModelVariable({
        name: 'supportedLocale',
        _context: App,
        paramProvider: () => ({ en: 'English' }),
        isList: true,
      }),
    },
    Actions: {
      appNotification: new NotificationAction({
        name: 'appNotification',
        _context: App,
        operation: 'toast',
        paramProvider: () => ({
          class: 'Error',
          toasterPosition: 'bottom right',
        }),
        onOk: (variable, data, options) => {},
        toasterService: () => App.appConfig.currentPage.toaster,
        onClose: (variable, data, options) => {},
      }),
      goToPage_empty: new NavigationAction({
        name: 'goToPage_empty',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'empty',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_Main: new NavigationAction({
        name: 'goToPage_Main',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'Main',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_selectgrid: new NavigationAction({
        name: 'goToPage_selectgrid',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'selectgrid',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_selectgrid_Copy: new NavigationAction({
        name: 'goToPage_selectgrid_Copy',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'selectgrid_Copy',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_settings: new NavigationAction({
        name: 'goToPage_settings',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'settings',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_settings_Copy: new NavigationAction({
        name: 'goToPage_settings_Copy',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'settings_Copy',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_Turn: new NavigationAction({
        name: 'goToPage_Turn',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'Turn',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_Turn_Copy: new NavigationAction({
        name: 'goToPage_Turn_Copy',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'Turn_Copy',
        }),
        appConfig: App.appConfig,
      }),
      goToPage_Turn_Copy_Copy: new NavigationAction({
        name: 'goToPage_Turn_Copy_Copy',
        _context: App,
        operation: 'gotoPage',
        paramProvider: () => ({
          pageName: 'Turn_Copy_Copy',
        }),
        appConfig: App.appConfig,
      }),
    },
  };
};
