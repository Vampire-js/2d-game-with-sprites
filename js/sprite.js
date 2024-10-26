
class Sprite{
    constructor({position, src, frameRate = 1}){
        this.position = position
        this.image = new Image()
        this.image.imageSmoothingEnabled = false
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / frameRate
            this.height = this.image.height 
        }
        this.image.src = src
        this.elapsedFrames = 0
        this.frameBuffer = 2
        this.frameRate = frameRate
        this.currentFrame = 0
        this.loaded = false
    }
    draw(){
        const cropbox ={
            position:{
                x:this.width * this.currentFrame, y:0
            },
            width:this.width,
            height: this.height
        }
        if(!this.loaded) return
        c.drawImage(this.image,cropbox.position.x, cropbox.position.y, cropbox.width, cropbox.height, this.position.x, this.position.y, this.width,this.height)
      
        
        this.elapsedFrames++
        if(this.elapsedFrames % this.frameBuffer === 0){
            if(this.currentFrame < this.frameRate -1) this.currentFrame++
            else this.currentFrame = 0
        }
    }
    updateFrames(){
        // this.currentFrame++
        this.elapsedFrames++
        if(this.elapsedFrames % this.frameBuffer === 0){
            if(this.currentFrame < this.frameRate -2) this.currentFrame++
            else this.currentFrame = 0
        }
    }
}