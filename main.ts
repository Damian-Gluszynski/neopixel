let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
