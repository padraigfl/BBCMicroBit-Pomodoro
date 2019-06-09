const MESSAGE_SPEED = 80;
const MINUTE = 60000;
const initialSettings = {
  time: 20,
  break: 4,
  longBreak: 12,
  cycleLength: 4,
  isActive: false
};

const initialCount = {
  cycle: 0,
  time: 0, // MS
  isBreak: false
};
let settings = initialSettings;
let count = initialCount;

const getInfoString = () =>
  `Cycle${count.cycle}of${settings.cycleLength} | ${settings.cycleLength},${
    settings.break
  },${settings.longBreak}`;

const nextStage = () => {
  basic.showNumber(count.cycle + 1);
  if (count.isBreak) {
    count.cycle = (count.cycle + 1) % settings.cycleLength;
  }
  count.time = 0;
  count.isBreak = !count.isBreak;
};

const updateState = () => {
  count.time = count.time + 1;
  const time = remainingMin(count.time);
  if (time < 0) {
    nextStage();
  }
};

const remainingMin = (timeCount: number) => {
  let totalTime = settings.time;
  if (!count.cycle && count.isBreak) {
    totalTime = settings.longBreak;
  }
  if (count.isBreak) {
    totalTime = settings.break;
  }
  return Math.ceil(totalTime - timeCount);
};

const flashTime = (onTime = 700, flashCount = 2) => {
  // @todo
  const cycleNotice = 1000;
  const remaining = remainingMin(count.time);
  if (count.isBreak) {
    const loopSize = 3;
    const breakDisplay = MINUTE / (loopSize * 10);
    const regDisplay = MINUTE / loopSize - breakDisplay;

    for (let i = 0; i < loopSize; i++) {
      showInvertLeds[remaining + 1]();
      basic.pause(regDisplay);
      basic.showNumber(count.cycle + 1, breakDisplay);
    }
    return;
  }

  const countNotice = MINUTE - cycleNotice;

  basic.showNumber(count.cycle + 1);
  basic.pause(cycleNotice);

  showSetLeds[remaining + 1]();
  basic.pause(countNotice);
};

const update = () => {
  updateState();
  flashTime();
};

const startTimer = () => {
  if (!settings.isActive) {
    settings.isActive = true;
    basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
        `);
    while (settings.isActive) {
      update();
    }
    return;
  }
  basic.showString(getInfoString());
};

const stopTimer = () => {
  settings.isActive = false;
  count.time = 0;
  count.isBreak = false;
  basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
    `);
  return;
};

const reset = () => {
  settings = initialSettings;
  count = initialCount;
  basic.showString("Reset", MESSAGE_SPEED);
};

basic.showString("Pomo", MESSAGE_SPEED);

basic.forever(function() {
  input.onButtonPressed(Button.A, startTimer);
  input.onButtonPressed(Button.B, stopTimer);
});
