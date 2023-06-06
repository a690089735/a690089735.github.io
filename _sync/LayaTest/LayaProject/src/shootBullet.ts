const { regClass, property } = Laya;

@regClass()
export class Script extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(String)
    public text: string = "";
    @property(Laya.Prefab)
    public bulletPrefab: Laya.Prefab;
    @property(Laya.Sprite)
    public birthplace: Laya.Sprite;

    constructor() {
        super();
    }
    // this.stage.on(Laya.Event.CLICK, this, this.onStageClick);

    onMouseDown(evt: Laya.Event): void {
        let bullet = this.bulletPrefab.create();
        (bullet as Laya.Sprite).pos = this.birthplace.pos
        Laya.stage.addChild(bullet);
    }
    
}