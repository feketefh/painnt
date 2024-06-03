led_x = 0

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global led_x
    led_x += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    led.plot(0, 0)
    if True:
        pass
basic.forever(on_forever)
