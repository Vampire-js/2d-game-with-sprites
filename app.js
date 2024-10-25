const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")
canvas.width = 1024 
canvas.height = 512 


const bg1 = new Sprite({position:{
    x:0,
    y:0
},
src: './img/backgroundLevel1.png'})
const player = new Player({collisionBlocks})


const animate = () => {
    requestAnimationFrame(animate)

    bg1.draw()

    player.draw()
    player.update()

    collisionBlocks.map(e => {
        e.draw()
    })
}

animate()
