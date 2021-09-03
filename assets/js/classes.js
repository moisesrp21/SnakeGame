class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.px = x;
        this.py = y;
        this.vx = 0;
        this.vy = 0;
        this.next = null;
        this.counter = 500;
    }

    setNoHor() {
        this.vx=0;
    }
    setNoVer() {
        this.vy=0;
    }

    mapX() {
        return (30 + this.x*(55+10));
    }

    mapY() {
        return (20 + this.y*(55+10));
    }
}

class Snake extends Point {
    constructor(x,y,SNAKE) {
        super(x,y);
        this.body = [];
        this.didItAteItself = false;
        this.SNAKE = SNAKE;
    }

    draw() {
        let brush = color(54, 168, 50);
        fill(brush);
        // rect(this.mapX(),this.mapY(),55,55);
        image(this.SNAKE,this.mapX()+1,this.mapY()+1);
        let b = this.body;
        for (let i=0; i<b.length; i++) {
            rect(b[i].mapX(),b[i].mapY(),55,55);
        }
    }

    eatsFruit() {
        let x = this.body;
        // if (x.length===0)
        //     x[arr.length] = new Point(this.px,this.py);
        // else
        //     x[arr.length] = new Point(x[arr.length-1].px,y[arr.length-1].py);
        x[x.length] = (x.length===0)? new Point(this.px,this.py)
                                      : new Point(x[x.length-1].px,x[x.length-1].py) ;
    }

    restart() {
        this.x = 7;
        this.y = 7;
        this.vx = 0;
        this.vy = 0;
        this.didItAteItself = false;
        this.body.splice(0,this.body.length);
    }

    update() {
        this.counter+= deltaTime;
        if (this.counter >= 200) {
            // update head
            let h = this;
            h.px = h.x;
            h.py = h.y;
            h.x = h.x + 1*h.vx;
            h.y = h.y + 1*h.vy;
            // update body
            let b = this.body;
            if (b.length>0) {
                this.didItAteItself = (h.x === b[0].x && h.y === b[0].y)? true : false;
                b[0].px = b[0].x;
                b[0].py = b[0].y;
                b[0].x = h.px;
                b[0].y = h.py;
                for (let i = 1; i<b.length; i++) {
                    this.didItAteItself = (h.x === b[i].x && h.y === b[i].y)? true : false;
                    b[i].px = b[i].x;
                    b[i].py = b[i].y;
                    b[i].x = b[i-1].px;
                    b[i].y = b[i-1].py;
                }
            }
            this.counter = 0;
        }
    }
}

class Fruit extends Point {
    constructor(x,y) {
        super(x,y);
    }
    draw() {
        let brush = color(179, 29, 29);
        fill(brush);
        rect(this.mapX(),this.mapY(),55,55);
    }

    update() {
        this.x = Math.trunc(random(15));
        this.y = Math.trunc(random(15));
    }
}
