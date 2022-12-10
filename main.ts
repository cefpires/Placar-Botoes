input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    Pontos_A += 1
    basic.showString("A")
    basic.showString("" + (Pontos_A))
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.clearScreen()
    basic.showNumber(Pontos_A)
    basic.showString("x")
    basic.showString("" + (Pontos_B))
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    Pontos_A = 0
    Pontos_B = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    Pontos_B += 1
    basic.showString("B")
    basic.showString("" + (Pontos_B))
})
let Pontos_B = 0
let Pontos_A = 0
Pontos_A = 0
Pontos_B = 0
basic.forever(function () {
	
})
