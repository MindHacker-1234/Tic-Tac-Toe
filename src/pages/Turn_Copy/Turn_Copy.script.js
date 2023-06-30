import moment from 'moment';
import * as _ from 'lodash';

export default function addPageScript(App, Page) {
  //auto refresh functions
  const setTimeout = App.lib.setTimeout;
  const setInterval = App.lib.setInterval;

  var currentPlayer = Page.App.Variables.Player.dataSet.data.playerchoice;
  let game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let flag = false;
  let labels = [
    'label10_1',
    'label34',
    'label36',
    'label27_1',
    'label39',
    'label43',
    'label32',
    'label26',
    'label45',
  ];
  let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWin() {
    if (flag) {
      setTimeout(function () {
        alert('Player ' + currentPlayer + ' won!');
        resetGame();
      }, 2000);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

      if (currentPlayer === Page.Widgets.label6.caption) {
        Page.Widgets.label3.caption = 'Your Turn';
      } else {
        Page.Widgets.label3.caption = 'Opponent Turn';
      }
    }
  }

  function resetGame() {
    flag = false;
    game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let label of labels) {
      Page.Widgets[label].caption = 'L';
      Page.Widgets[label].color = '#010b1a';
    }
  }

  function updateLabel(labelId) {
    let label = Page.Widgets[labels[labelId]];

    if (label.caption === 'L' && !flag) {
      label.caption = currentPlayer;
      if (currentPlayer === 'X') {
        label.color = '#C4A8FF';
      } else {
        label.color = '#FFD9AD';
      }

      game[labelId] = currentPlayer;

      for (let combination of combinations) {
        let found = true;
        for (let index of combination) {
          if (game[index] !== currentPlayer) {
            found = false;
            break;
          }
        }

        if (found) {
          flag = true;
          break;
        }
      }

      if (!flag && !game.includes(0)) {
        Page.Widgets.label3.caption = 'Draw match';
        resetGame();
      } else {
        checkWin();
      }
    }
  }

  Page.label10_1Tap = function ($event, widget) {
    updateLabel(0);
  };

  Page.label34Tap = function ($event, widget) {
    updateLabel(1);
  };

  Page.label36Tap = function ($event, widget) {
    updateLabel(2);
  };

  Page.label27_1Tap = function ($event, widget) {
    updateLabel(3);
  };

  Page.label39Tap = function ($event, widget) {
    updateLabel(4);
  };

  Page.label43Tap = function ($event, widget) {
    updateLabel(5);
  };

  Page.label32Tap = function ($event, widget) {
    updateLabel(6);
  };

  Page.label26Tap = function ($event, widget) {
    updateLabel(7);
  };

  Page.label45Tap = function ($event, widget) {
    updateLabel(8);
  };
}
