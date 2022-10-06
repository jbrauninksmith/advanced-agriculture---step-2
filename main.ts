basic.forever(function () {
    if (soil.ifMoisture(soil.SoilPin.P0, Mlevel.VERY_WET)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Umbrella)
        pump.startDuration(Pump.RIGHT, 60, 4)
        basic.clearScreen()
    }
})
