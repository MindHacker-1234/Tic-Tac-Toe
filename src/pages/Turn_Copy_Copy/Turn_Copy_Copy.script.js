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
    var wincount = 0;
    var currentPlayer = Page.Widgets.label6.caption;
    Page.label10_1Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };
    Page.label34Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    Page.label36Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    Page.label27_1Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    Page.label39Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    Page.label43Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    Page.label32Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    Page.label26Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    Page.label45Tap = function ($event, widget) {
      updateLabel(widget);
      checkWin();
    };

    function updateLabel(widget) {
      if (widget.caption == 'X' || widget.caption == 'O') {
        return;
      }

      // Set the label text to the current player's symbol
      widget.caption = currentPlayer;
      if (currentPlayer === 'X') {
        widget.color = '#C4A8FF'; // Set color to light purple for 'X'
      } else {
        widget.color = '#FFD9AD'; // Set color to light peach for 'O'
      }

      // Switch the current player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
      let combinations = [
        ['label10_1', 'label34', 'label36'],
        ['label27_1', 'label39', 'label43'],
        ['label32', 'label26', 'label45'],
        ['label10_1', 'label27_1', 'label32'],
        ['label34', 'label39', 'label26'],
        ['label36', 'label43', 'label45'],
        ['label10_1', 'label39', 'label45'],
        ['label36', 'label39', 'label32'],
      ];

      for (let combination of combinations) {
        let [label1Id, label2Id, label3Id] = combination;
        let label1 = Page.Widgets[label1Id];
        let label2 = Page.Widgets[label2Id];
        let label3 = Page.Widgets[label3Id];

        // Check if the label that was clicked on is occupied
        if (label1.caption !== 'L') {
          // Check if the label that was clicked on is part of a winning combination
          if (
            label1.caption === label2.caption &&
            label2.caption === label3.caption
          ) {
            // Display an alert and reset the game
            if (label1.caption === 'X') {
              alert('Player X won');
              wincount++;
              Page.Widgets.label7.caption = wincount.toString();
              resetGame();
            } else {
              alert('Player O won');
              resetGame();
            }
          }
        }
      }
    }

    function resetGame() {
      Page.Widgets.label10_1.caption = '';
      Page.Widgets.label34.caption = '';
      Page.Widgets.label36.caption = '';
      Page.Widgets.label27_1.caption = '';
      Page.Widgets.label39.caption = '';
      Page.Widgets.label43.caption = '';
      Page.Widgets.label32.caption = '';
      Page.Widgets.label26.caption = '';
      Page.Widgets.label45.caption = '';
    }
  };

  // Page.label10_1Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label34Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label36Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label27_1Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label39Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label43Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label32Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label26Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // Page.label45Tap = function($event, widget) {
  //     updateLabel(widget);
  //     checkWin();
  // };

  // function updateLabel(widget) {
  //     if (widget.caption == 'X' || widget.caption == 'O') {
  //         return;
  //     }

  //     // Set the label text to the current player's symbol
  //     widget.caption = currentPlayer;
  //     if (currentPlayer === 'X') {
  //         widget.color = '#C4A8FF'; // Set color to light purple for 'X'
  //     } else {
  //         widget.color = '#FFD9AD'; // Set color to light peach for 'O'
  //     }

  //     // Switch the current player
  //     currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  // }

  // function checkWin() {
  //     let combinations = [
  //         ['label10_1', 'label34', 'label36'],
  //         ['label27_1', 'label39', 'label43'],
  //         ['label32', 'label26', 'label45'],
  //         ['label10_1', 'label27_1', 'label32'],
  //         ['label34', 'label39', 'label26'],
  //         ['label36', 'label43', 'label45'],
  //         ['label10_1', 'label39', 'label45'],
  //         ['label36', 'label39', 'label32']
  //     ];

  //     for (let combination of combinations) {
  //         let [label1Id, label2Id, label3Id] = combination;
  //         let label1 = Page.Widgets[label1Id];
  //         let label2 = Page.Widgets[label2Id];
  //         let label3 = Page.Widgets[label3Id];

  //         // Check if the label that was clicked on is occupied
  //         if (label1.caption !== 'L') {

  //             // Check if the label that was clicked on is part of a winning combination
  //             if (
  //                 label1.caption === label2.caption &&
  //                 label2.caption === label3.caption
  //             ) {

  //                 // Display an alert and reset the game
  //                 if (label1.caption === 'X') {
  //                     alert('Player X won');
  //                     resetGame();
  //                 } else {
  //                     alert('Player 2 won');
  //                     resetGame();
  //                 }
  //                 return;
  //             }
  //         }
  //     }
  // }

  // function resetGame() {
  //     Page.Widgets.label10_1.caption = '';
  //     Page.Widgets.label34.caption = '';
  //     Page.Widgets.label36.caption = '';
  //     Page.Widgets.label27_1.caption = '';
  //     Page.Widgets.label39.caption = '';
  //     Page.Widgets.label43.caption = '';
  //     Page.Widgets.label32.caption = '';
  //     Page.Widgets.label26.caption = '';
  //     Page.Widgets.label45.caption = '';

  // }
}
