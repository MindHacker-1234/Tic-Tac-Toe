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

export default Page => {
  return {
    Variables: {
      Avatars: new ModelVariable({
        name: 'Avatars',
        _context: Page,
        paramProvider: () => [
          {
            name: 'name1',
            dataValue:
              'resources/images/imagelists/Screenshot_2022-06-19_at_3.38.12_AM_2x.png',
          },
          {
            name: 'name2',
            dataValue: 'resources/images/imagelists/Avatar1.png',
          },
          {
            name: 'name3',
            dataValue: 'resources/images/imagelists/Avatar2.png',
          },
          {
            name: 'name4',
            dataValue: 'resources/images/imagelists/Avatar6.png',
          },
          {
            name: 'name5',
            dataValue: 'resources/images/imagelists/Avatar_5.png',
          },
          {
            name: 'name6',
            dataValue: 'resources/images/imagelists/Avatar_8.png',
          },
        ],
        isList: true,
      }),
    },
    Actions: {},
  };
};
