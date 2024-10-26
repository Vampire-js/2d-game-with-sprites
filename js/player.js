class Player extends Sprite {
    constructor({
        collisionBlocks = [],
        src,
        frameRate
    }) {
        super({src:src , frameRate:frameRate})
        this.gravity = .05
        this.position = { x: 200, y: 200 }
        this.velocity = { x: 0, y: 0 }
      
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.collisionBlocks = collisionBlocks
    }
  

    update() {
        
        c.fillStyle = "rgba(0,0,255,0.5)"
        c.fillRect(this.position.x, this.position.y, this.width,
            this.height
        )

        this.hitbox = {
            position:{
                x:this.position.x + 60,
                y:this.position.y + 38
            },
            width : 50,
            height:50
        }

        c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        this.position.x += this.velocity.x

        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x && 
                this.position.y + this.height >= collisionBlock.position.y && 
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
             
                    if(this.velocity.x < 0){
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                        console.log("yes")
                        break
                    }
                    if(this.velocity.x > 0){
                        this.position.x = collisionBlock.position.x  - 0.01 - this.width
                        break
                    }

               
            }
        }

        this.velocity.y += this.gravity
        this.position.y += this.velocity.y

        
        
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x && 
                this.position.y + this.height >= collisionBlock.position.y && 
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
             
                    if(this.velocity.y < 0){
                        this.velocity.y = 0

                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                        console.log("yes")
                        break
                    }
                    if(this.velocity.y > 0){
                        this.velocity.y = 0
                        this.position.y = collisionBlock.position.y  - 0.01 - this.height
                        break
                    }
                }
            }

        if (keys.d.pressed) {
            this.velocity.x = 2
        } else if (keys.a.pressed) {
            this.velocity.x = -2

        } else {
            this.velocity.x = 0
        }

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }

    }

}