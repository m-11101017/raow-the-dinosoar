input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 200) {
        pins.digitalWritePin(DigitalPin.P2, 180)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
