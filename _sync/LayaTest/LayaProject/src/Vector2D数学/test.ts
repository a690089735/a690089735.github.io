// const { regClass} = Laya;

// @regClass()
export class ss {
  public static length(a: Laya.Vector2): number { //啊...这里为啥一直报冲突啊...
    return Math.sqrt(a.x * a.x + a.y * a.y);
  }
}