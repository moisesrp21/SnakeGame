class Animation {

    constructor() {
        this.frames = [];
        this.currFrameIndex = 0;
        this.totalDuration = 0;
        this.animTime = 0;
    }

    addFrame(ximage, duration) {
        this.totalDuration += duration;
        this.frames.push({image: ximage, endTime: this.totalDuration});
    }

    update() {
        if (this.frames.length > 1) {
            this.animTime += deltaTime;
            if (this.animTime >= this.totalDuration) {
                this.animTime = this.animTime % this.totalDuration;
                this.currFrameIndex = 0;
            }
            while(this.animTime > this.frames[this.currFrameIndex].endTime)
                this.currFrameIndex++;
        }
    }

    draw(x, y) {
        image(this.frames[this.currFrameIndex].image,x,y);
    }
}
