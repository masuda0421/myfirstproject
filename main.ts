namespace SpriteKind {
    export const Potion = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
}
function makeNewItem () {
    item = sprites.create(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.Food)
    item.setFlag(SpriteFlag.StayInScreen, true)
    item.setPosition(randint(0, 160), randint(0, 120))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `],
    100,
    true
    )
})
function bgm2 () {
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Double))
}
function potion1 () {
    if (info.score() % 10 == 0) {
        potion = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........dd55........
            ........5555........
            .........44.........
            ........dddd........
            ........dddd........
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......555555.......
            .......555555.......
            .......555555.......
            ........5555........
            ........4444........
            ....................
            `, SpriteKind.Potion)
        potion.setFlag(SpriteFlag.StayInScreen, true)
        potion.setPosition(randint(0, 160), randint(0, 120))
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    animation.runImageAnimation(
    enemy2,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    100,
    false
    )
    mySprite.startEffect(effects.disintegrate, 500)
    music.bigCrash.play()
    info.changeLifeBy(-1)
    pause(1000)
})
function bgm1 () {
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(233, music.beat(BeatFraction.Quarter))
    music.playTone(233, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 200)
    info.changeScoreBy(1)
    music.baDing.play()
    makeNewItem()
    potion1()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Potion, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
    music.jumpUp.play()
    if (info.life() < 4) {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        ccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    animation.runImageAnimation(
    enemiy,
    [img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd111111111f......
        ......fd11111111df......
        ......fd11111111df......
        ......fcdd1111ddcff.....
        .......fbcf11fcbfbbf....
        .......ffbdb1bdffff.....
        ........fcbfbfdf........
        ........ffffffff........
        ......ffffffffff........
        .....fcb1bcffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fdd111111ddf......
        ......fbdd1111dddf......
        ......fcdbfddfbdbf......
        .......fbcf11fcbfff.....
        .......ffb1111bcfbcf....
        ........fcdb1bdfbbbf....
        .......ffffffffffcf.....
        .....fcb1bcfffff........
        .....f1b1b1ffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    false
    )
    mySprite.startEffect(effects.disintegrate, 500)
    music.bigCrash.play()
    info.changeLifeBy(-1)
    pause(1000)
})
let enemy2: Sprite = null
let potion: Sprite = null
let item: Sprite = null
let enemiy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
enemiy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
enemiy.setVelocity(50, 50)
enemiy.setPosition(94, 103)
enemiy.setFlag(SpriteFlag.BounceOnWall, true)
let en = 0
info.setScore(0)
info.setLife(4)
makeNewItem()
forever(function () {
    for (let index = 0; index < 4; index++) {
        bgm1()
    }
    bgm2()
})
forever(function () {
    if (info.score() == 10) {
        enemiy.setVelocity(60, 60)
    }
    if (info.score() == 20) {
        en += 1
        if (en == 1) {
            enemy2 = sprites.create(img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c c . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f c 3 b c 3 b c f b b c c c . 
                f c b b b b b b c f b c b c c . 
                c c 1 b b b 1 b c b b c b b c . 
                c b b b b b b b b b c c c b c . 
                c b 1 f f 1 c b b c c c c c . . 
                c f 1 f f 1 f b b b b f c . . . 
                f f f f f f f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 2 b b b c f . . . . 
                . . f 2 2 2 b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy2)
            enemy2.setPosition(78, 57)
            enemy2.follow(mySprite, 10)
            en += 1
        }
    }
    if (enemiy.isHittingTile(CollisionDirection.Left)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......fbd1111111f.......
            ......fdd1111111df......
            ......fddd111111df......
            ......fdddddd111df......
            ......fdddddd111df......
            ......fbddddddd1df......
            ......ffbbddbfd1df......
            .......fcbbdcfddbf......
            .......fffbddccffff.....
            .......ffffcfbbb1bcf....
            ......ffffffffcd1b1f....
            ...ffffffffff..fdfdf....
            .....ffffff.....f.f.....
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            .......ffb1111ff........
            ......fb1111111bf.......
            ......f111111111f.......
            .....ffff1111111df......
            ....fb111c1dd111df......
            ....ffb1b1fdcf11bf......
            .....ffbfbfb11111f......
            ......ffffcfdb1b1f......
            .......fcccfcfbfbf......
            ........ffffffffff......
            .........ffffff.........
            .........ffffff.........
            .....f..fffffff.........
            .....fffffffff..........
            ......fffffff...........
            ........................
            ........................
            ........................
            ........................
            `],
        500,
        false
        )
    }
})
