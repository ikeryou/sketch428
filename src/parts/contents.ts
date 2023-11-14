import { Color } from "three";
import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    // アルファベットを配列に
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
    Util.shuffle(str)

    const colKey = Util.randomInt(0, 2)

    const r = Util.random(10, 2000)
    const max = this.qsAll('.js-item').length
    this.qsAll('.js-item').forEach((el:HTMLElement, i:number) => {
      new Item({
        el: el,
        key: i,
        str: str,
        r: r
      })

      const w = Util.map(i, 0, 1, 0, max)
      const col = [new Color(1, w, w), new Color(w, 1, w), new Color(w, w, 1)][colKey]
      el.style.color = col.getStyle()
    })
  }

  protected _update():void {
    super._update()
  }
}