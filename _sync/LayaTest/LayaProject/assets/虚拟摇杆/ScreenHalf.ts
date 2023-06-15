const { regClass, property } = Laya;
import { Vector2D } from '../../src/Vector2D数学/Vector2D'

@regClass()
export class Left extends Laya.Script {

    // @property(String)
    // public text: string = "";
    @property(Laya.Prefab)
    public virtualStickPrefab: Laya.Prefab;

    public virtualStick: Laya.Box;
    public virtualStickButton: Laya.Sprite;
    public virtualStickBase: Laya.Sprite;

    constructor() {
        super();
    }

    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake(): void {
        var box: Laya.Box = this.owner as Laya.Box;
        box.width = Laya.stage.width * .5;
        box.height = Laya.stage.height;

        function onResizeBox(theBox: Laya.Box = box) {
            theBox.width = Laya.stage.width * .5;
            theBox.height = Laya.stage.height;
            // console.log(Laya.stage.width); 
        }
        Laya.stage.on(Laya.Event.RESIZE, this, onResizeBox);
    }

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
    onMouseClick(): void {
        // console.log(this.owner.name);
    }


    /**
     * 鼠标按下时执行
     */
    onMouseDown(evt: Laya.Event): void {
        this.virtualStick = this.virtualStickPrefab.create() as Laya.Box;
        this.virtualStick.pos(evt.stageX, evt.stageY);//= new Laya.Vector2(evt.stageX, evt.stageY);
        Laya.stage.addChild(this.virtualStick);

        this.virtualStickButton = this.virtualStick.getChildByName("Button") as Laya.Sprite;
        this.virtualStickBase = this.virtualStick.getChildByName("Base") as Laya.Sprite;
    }


    /**
     * 鼠标按住一个物体后，拖拽时执行
     */
    onMouseDrag(evt: Laya.Event): void {

        // console.log(evt.stageX,evt.stageY);y
        // this.virtualStickButton.pos(evt.stageX - this.virtualStick.x, evt.stageY - this.virtualStick.y);
        // this.virtualStickBase.pos(evt.stageX - this.virtualStick.x, evt.stageY - this.virtualStick.y);

        var buttonPos = new Vector2D(evt.stageX - this.virtualStick.x, evt.stageY - this.virtualStick.y);
        var basePos = new Vector2D(this.virtualStickBase.x, this.virtualStickBase.y);
        var distanceLimit = 40;
        var distance = buttonPos.distance(basePos);
        if (distance > distanceLimit) {
            basePos = basePos.add(buttonPos.sub(basePos).normalize().scale(distance - distanceLimit));
        }

        this.virtualStickButton.pos(buttonPos.x, buttonPos.y);
        this.virtualStickBase.pos(basePos.x, basePos.y);
    }

    /**
     * 鼠标按住一个物体，拖拽一定距离，释放鼠标按键后执行
     */
    onMouseDragEnd?(evt: Laya.Event): void {
        this.virtualStick.destroy();
    }

}