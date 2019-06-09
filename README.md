# MicroBit Pomo

A simple pomodoro timer to make use of a BBC MicroBit I had hanging around.

Coded via https://makecode.microbit.org/#editor in JavaScript, sorry for the long ass file.
Their IDE imports happen automatically, you can assume everything was in one file.

The code is available in a .hex file in the project, you just have to add it to the microcontroller via usb to try it out.

## Controls

A: Start timer (if not started)
B: Cancel (pretty sure this doesn't work right now...)

## UI

Pretty simple counting of the LEDs for the countdowns. Breaks follow and inverted layout.

With each minute that passes you're given a reminder of the current cycle count.

## File Structure

Imports are handled implicitly via the editor, hence the weirdness here.

### `main.ts`

The main operations

### `custom.ts`

The matrix print function was really badly broken with types (dynamically composed strings weren't being accepted) so I had to make this collection of functions

## Todo

I'll probably never go beyond getting the times right, but some scope for expansion here

- [ ] Switch to Python for greater control (saving data on device)
- [ ] Get working with VS code https://makecode.com/cli
- [ ] Testing
- [ ] Options?
- [ ] Data tracking
- [ ] Threading to allow more user control? Better visual feedback?
