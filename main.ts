input.onButtonPressed(Button.A, function () {
    choice = randint(0, option.length - 1)
    basic.showString("" + (option[choice]))
})
let choice = 0
let option: string[] = []
option = ["PE with Joe", "shopping", "jogging", "gardening", "dancing", "cycling"]
