
const { regClass, property } = Laya;

import Sprite = Laya.Sprite;

// import Sprite = Laya.Sprite;
// import Script = Laya.Script;

@regClass() //必须有
export class DragMove extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    // @property(String)
    // public text: string = "";
    // public offset: 

    // private _weight: number = 0;

    // @property( { type : Number } )
    // get weight() : number {
    //     return this._weight;
    // }

    // set weight(value: number) {
    //     this._weight = value;
    // }

    private _sprite: Sprite;
    @property({ type: Sprite })
    get sprite(): Sprite {
        return this._sprite;
    }
    set sprite(value: Sprite) {
        this._sprite = value;
    }

    private _offsetX: number;
    private _offsetY: number;

    // constructor() {
    //     super();
    // }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    //onAwake(): void {}

    /**
     * 组件被启用后执行，例如节点被添加到舞台后
     */
    //onEnable(): void {}

    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    //onDisable(): void {}

    /**
     * 第一次执行update之前执行，只会执行一次
     */
    //onStart(): void {}

    /**
     * 手动调用节点销毁时执行
     */
    //onDestroy(): void {

    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onUpdate(): void {}

    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}

    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}

    onMouseDown(evt: Laya.Event): void {
        // console.log("按下")
        // this._sprite = this.owner as Sprite
        // console.log("物体的位置：", this.sprite.x, ", ", this.sprite.y);
        this._offsetX = this._sprite.x - evt.stageX
        this._offsetY = this._sprite.y - evt.stageY
    }
    onMouseDrag(evt: Laya.Event): void {
        // console.log("拖拽")
        this._sprite.x = evt.stageX + this._offsetX
        this._sprite.y = evt.stageY + this._offsetY
    }
    onMouseDragEnd(evt: Laya.Event): void {
        // console.log("拖拽结束")
    }
    // onMouseUp(evt: Laya.Event): void {
    //     console.log("抬起")
    // }
}