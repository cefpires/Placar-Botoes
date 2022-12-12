def on_button_pressed_a():
    global Pontos_A
    music.start_melody(music.built_in_melody(Melodies.JUMP_DOWN),
        MelodyOptions.ONCE_IN_BACKGROUND)
    Pontos_A += 1
    basic.show_string("A")
    basic.show_string("" + str((Pontos_A)))
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    basic.pause(100)
    music.start_melody(music.built_in_melody(Melodies.POWER_UP),
        MelodyOptions.ONCE_IN_BACKGROUND)
    basic.clear_screen()
    basic.show_number(Pontos_A)
    basic.show_string("x")
    basic.show_string("" + str((Pontos_B)))
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global Pontos_A, Pontos_B
    music.start_melody(music.built_in_melody(Melodies.POWER_DOWN),
        MelodyOptions.ONCE)
    Pontos_A = 0
    Pontos_B = 0
    basic.clear_screen()
    basic.show_icon(IconNames.CHESSBOARD)
    for index in range(2):
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.show_icon(IconNames.SMALL_DIAMOND)
        basic.show_icon(IconNames.SMALL_SQUARE)
        basic.show_icon(IconNames.DIAMOND)
        basic.show_icon(IconNames.SQUARE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Pontos_B
    music.start_melody(music.built_in_melody(Melodies.JUMP_UP),
        MelodyOptions.ONCE_IN_BACKGROUND)
    Pontos_B += 1
    basic.show_string("B")
    basic.show_string("" + str((Pontos_B)))
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

Pontos_B = 0
Pontos_A = 0
Pontos_A = 0
Pontos_B = 0
basic.show_icon(IconNames.TSHIRT)

def on_forever():
    pass
basic.forever(on_forever)
