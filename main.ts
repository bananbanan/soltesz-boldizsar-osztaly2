let b = 0
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        b = randint(1, 5)
        if (b == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (b == 2) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        } else if (b == 3) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . # # .
                . . . # .
                . # # # .
                `)
        } else if (b == 4) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (b == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (b == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (b == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    } else if (b == 4) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
