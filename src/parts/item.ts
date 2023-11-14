import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _h:Array<string>
  private _key: number
  private _r: number

  constructor(opt:any) {
    super(opt)

    this._r = opt.r
    this._h = opt.str
    this._key = opt.key
  }

  protected _update():void {
    super._update();

    const txtNum = 10
    let txt = ''
    for (let i = 0; i < txtNum; i++) {
      const key = ~~(Util.map(Math.sin(Util.radian(i * this._r)), 0, this._h.length - 1, -1, 1))
      txt += this._h[key]
    }
    this.el.innerHTML = txt

    Tween.set(this.el, {
      letterSpacing: Util.map(Math.sin(this._key * 0.15 + this._c * 0.05), 0, 0.1, -1, 1) + 'em',
      x: Math.sin(this._key * 0.15 + this._c * 0.05) * 10,
    })
  }
}







