
class Sprite{
    constructor({position, src}){
        this.position = position
        this.image = new Image()
        this.image.imageSmoothingEnabled = false
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = src

        this.loaded = false
    }
    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}