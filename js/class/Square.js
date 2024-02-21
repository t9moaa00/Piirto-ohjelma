import { Rectangle } from "./Rectangle.js"

export class Square extends Rectangle {
    #width
    #height

    constructor(x,y,width,height) {
        super(x,y)
        this.#width = width
        this.#height = height
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.strokeRect(this._x,this._y,this.#width,this.#height)
    }
}