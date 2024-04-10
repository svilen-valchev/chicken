player.onChat("chicken", function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(PARROT, pos(0, 10, 0))
    }
})
