/**
 * Check if keypad sends the right number
 */
// There are 12 keys on this 12 keys on this keypad.. We need numbers for the '*' key and the '#' key.
// '*'  will be 10
// '#'  will be 12
// The "return" instruction will return the number inside the circle to the instruction that called the function.
function read_keyboard () {
    // P0 col with zero at bottom
    pins.digitalWritePin(DigitalPin.P0, 1)
    // P0 col with zero at bottom
    pins.digitalWritePin(DigitalPin.P16, 0)
    // P0 col with zero at bottom
    pins.digitalWritePin(DigitalPin.P8, 0)
    // P1 row with the 4 on it
    // P1
    // P1
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        return 5
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        return 2
    } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        return 8
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        return 0
    }
    // P0 col with zero at bottom
    pins.digitalWritePin(DigitalPin.P0, 0)
    // set col 147 (pin 16) to one and read row 123 (pin  2) then row 456 (pin 1) then row 789 (pin 12)
    pins.digitalWritePin(DigitalPin.P16, 1)
    // P1 row with the 4 on it
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        return 4
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        return 1
    } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        return 7
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        // same as * key
        return 10
    }
    // set col 147 (pin 16) to one and read row 123 (pin  2) then row 456 (pin 1) then row 789 (pin 12)
    pins.digitalWritePin(DigitalPin.P16, 0)
    // P0 col with zero at bottom
    pins.digitalWritePin(DigitalPin.P8, 1)
    // P1 row with the 4 on it
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        return 6
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        return 3
    } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        return 9
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        // same as # key
        return 11
    }
    // P0 col with zero at bottom
    pins.digitalWritePin(DigitalPin.P8, 0)
    return 99
}
basic.forever(function () {
    if (99 != read_keyboard()) {
        basic.showNumber(read_keyboard())
        basic.pause(100)
        basic.clearScreen()
    }
})
