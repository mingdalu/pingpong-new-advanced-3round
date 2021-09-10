function 第二關 () {
    tiles.setTilemap(tilemap`層級3`)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        磚 = sprites.create(sprites.builtin.brick, SpriteKind.Food)
        tiles.placeOnTile(磚, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    球.vy = 90
    otherSprite.startEffect(effects.spray)
    mySprite += 1
    info.changeScoreBy(1)
})
function 第三關 () {
    tiles.setTilemap(tilemap`層級4`)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        磚 = sprites.create(sprites.builtin.brick, SpriteKind.Food)
        tiles.placeOnTile(磚, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    球.vy = -90
})
function 第一關 () {
    tiles.setTilemap(tilemap`層級2`)
    for (let value of tiles.getTilesByType(assets.tile`tile1`)) {
        磚 = sprites.create(sprites.builtin.brick, SpriteKind.Food)
        tiles.placeOnTile(磚, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    mySprite = 0
}
let mySprite = 0
let 磚: Sprite = null
let 球: Sprite = null
let 棍子 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    11111111111111111111111111111111
    11111111111111111111111111111111
    ................................
    ................................
    `, SpriteKind.Player)
棍子.y = 110
controller.moveSprite(棍子, 150, 0)
球 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 4 4 4 1 . . . . . . . 
    . . . 1 2 9 1 9 2 1 . . . . . . 
    . . 5 4 2 9 1 9 2 4 5 . . . . . 
    . 1 5 4 2 9 1 9 2 4 5 1 . . . . 
    . 4 5 4 4 1 5 1 4 2 5 4 . . . . 
    . 4 5 2 4 5 5 5 4 2 5 4 . . . . 
    . 4 5 2 4 1 5 1 4 2 5 4 . . . . 
    . 1 5 4 2 9 1 9 2 4 5 4 . . . . 
    . . 5 4 2 9 1 9 2 4 5 . . . . . 
    . . . 1 2 9 1 9 2 1 . . . . . . 
    . . . . 1 4 4 4 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
球.setVelocity(90, 90)
第一關()
info.setScore(0)
game.onUpdate(function () {
    if (球.x > 155) {
        球.vx = -90
    } else if (球.y > 115) {
        game.over(false, effects.dissolve)
    } else if (球.y < 10) {
        球.vy = 90
    } else if (球.x < 10) {
        球.vx = 90
    } else if (mySprite == 10) {
        pause(500)
        info.setScore(0)
        mySprite = 11
        球.setPosition(80, 60)
        第二關()
    } else if (mySprite == 31) {
        pause(500)
        info.setScore(0)
        mySprite = 32
        球.setPosition(80, 60)
        第三關()
    } else if (mySprite == 62) {
        game.over(true)
    }
})
