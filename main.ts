let strip = neopixel.create(DigitalPin.P11, 8, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
strip.showRainbow(1, 360)
basic.forever(function () {
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
