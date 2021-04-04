input.onButtonPressed(Button.A, function () {
    Motions = 0
    basic.showNumber(Motions)
})
input.onGesture(Gesture.Shake, function () {
    Motions += 1
    basic.showNumber(Motions)
})
let Motions = 0
Motions = 0
basic.showNumber(Motions)
basic.forever(function () {
	
})
