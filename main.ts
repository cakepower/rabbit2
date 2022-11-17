input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 50; index++) {
        for (let index = 0; index <= 7; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(100)
        }
        for (let index = 0; index <= 7; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            basic.pause(100)
        }
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 8, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
strip.showRainbow(1, 360)
