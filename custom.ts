// this could all be done pretty easily with array.prototype.fill but this is what I had to do to get typescript in the IDE accepting the strings

const showSetLeds: Array<() => void> = [
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # . . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # . 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  . . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # . . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # . . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # . . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # . 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  . . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # . . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # . . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # . . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # . 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  . . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  # . . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  # # . . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  # # # . . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # . 
  `),
  () =>
    basic.showLeds(`
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  `)
];
const showInvertLeds: Array<() => void> = [
  () =>
    basic.showLeds(`
  # . . . # 
  . . . . . 
  . . # . . 
  . . . . . 
  # . . . # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . . # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . . # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  . # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . . 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . . # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . . # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . . # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  . # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . . 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . . # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . . # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . . # # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  . # # # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . . 
  # # # # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . . # 
  # # # # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . . # # 
  # # # # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . . # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  . # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  `),
  () =>
    basic.showLeds(`
  . . . . . 
  # # # # # 
  # # # # # 
  # # # # # 
  # # # # # 
  `)
];
