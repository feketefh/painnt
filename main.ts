let led_x = 0
let led_y = 0
input.onButtonPressed(Button.A, function () {
    led_x += 1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(led_x, led_y)
    led_x += 1
})
basic.forever(function () {
    led.plot(led_x, led_y)
    if (led_x == 4) {
        led.toggle(led_x, led_y)
        led_x += -4
        led_y += 1
    }
})
