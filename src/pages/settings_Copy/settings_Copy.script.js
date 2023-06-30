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
    Page.App.Variables.Player.setData({
      data: {
        playername: Page.App.Variables.Player.dataSet.data.playername,
        playeravatar: Page.App.Variables.Player.dataSet.data.playeravatar,
        playerchoice:
          Page.Widgets.selectsideList1.selectedItemWidgets.Text.caption,
        playergrid:
          Page.Widgets.SelectgridList1.selectedItemWidgets.Text.caption,
        playerlevel:
          Page.Widgets.selectdifficultylevelList1.selectedItemWidgets.Text
            .caption,
      },
    });

    Page.App.Actions.goToPage_Turn_Copy.invoke({});
  };
}
