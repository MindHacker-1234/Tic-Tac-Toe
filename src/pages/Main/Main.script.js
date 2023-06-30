import moment from 'moment';
import * as _ from 'lodash';

export default function addPageScript(App, Page) {
  //auto refresh functions
  const setTimeout = App.lib.setTimeout;
  const setInterval = App.lib.setInterval;

  /*
   * Use App.getDependency for Dependency Injection
   * eg: var DialogService = App.getDependency('DialogService');
   */

  /* perform any action on widgets/variables within this block */
  Page.onReady = function () {
    /*
     * variables can be accessed through 'Page.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Page.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Page.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Page.Widgets.username.datavalue'
     */
  };

  Page.button2Tap = function ($event, widget) {
    var playername = Page.Widgets.text1.datavalue;
    Page.App.Variables.Player.setData({
      data: {
        playername: playername,
        playeravatar: Page.Widgets.AvatarsList1_1.selectedItemWidgets
          ? Page.Widgets.AvatarsList1_1.selectedItemWidgets.picture3
              .picturesource
          : Page.Variables.Avatars.dataSet[0].dataValue,
      },
    });

    Page.App.Actions.goToPage_settings_Copy.invoke({});
  };

  Page.label2_1Tap = function ($event, widget) {
    Page.Widgets.AvatarsList1_1.showskeleton =
      !Page.Widgets.AvatarsList1_1.showskeleton;
  };
}
