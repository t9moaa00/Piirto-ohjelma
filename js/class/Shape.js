export class Shape {
    _x
    _y
    _lineWidth
    _color

    constructor (x,y,_lineWidth = 1,_color = 'black') {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
        this._color = _color
    }

    set setlineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    set StrokeStyle(color) {
        this._color = color
    }
}