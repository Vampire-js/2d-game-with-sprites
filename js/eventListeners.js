
let keys = {
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    d:{
        pressed:false
    }
}

window.onkeydown = e => {
    switch (e.key) {
        case "w":
            if (player.velocity.y === 0) player.velocity.y = -3
            break;
        case "a":
            keys.a.pressed = true
            break;
        case "d":
            keys.d.pressed = true
            break;


    }
}
window.onkeyup = e => {
    switch (e.key) {
        case "w":
            if (player.velocity.y === 0) player.velocity.y = -1
            break;
            case "a":
                keys.a.pressed = false
                break;
            case "d":
                keys.d.pressed = false
                break;


    }
}