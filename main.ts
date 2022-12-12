input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.OnceInBackground)
    Pontos_A += 1
    basic.showString("A")
    basic.showString("" + (Pontos_A))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(100)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
    basic.clearScreen()
    basic.showNumber(Pontos_A)
    basic.showString("x")
    basic.showString("" + (Pontos_B))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    Pontos_A = 0
    Pontos_B = 0
    basic.clearScreen()
    basic.showIcon(IconNames.Chessboard)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.OnceInBackground)
    Pontos_B += 1
    basic.showString("B")
    basic.showString("" + (Pontos_B))
    basic.clearScreen()
})
let Pontos_B = 0
let Pontos_A = 0
Pontos_A = 0
Pontos_B = 0
basic.showIcon(IconNames.TShirt)
basic.forever(function () {
	
})
