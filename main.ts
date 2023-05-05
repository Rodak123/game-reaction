basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    . # . # .
    `)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
