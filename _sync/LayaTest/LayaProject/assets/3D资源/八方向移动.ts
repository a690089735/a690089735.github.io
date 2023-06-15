const { regClass, property } = Laya;
import { Vector2D } from '../../src/Vector2D数学/Vector2D';
import { Vector3D } from '../../src/Vector2D数学/Vector3D';

@regClass()
export class 八方向移动 extends Laya.Script {
    declare owner: Laya.Sprite3D;

    @property(Number)
    public speed: number = 0.01;

    public up_pressd: boolean = false;
    public down_pressd: boolean = false;
    public left_pressd: boolean = false;
    public right_pressd: boolean = false;
    public preDirection: Vector2D = new Vector2D();
    public direction: Vector2D = new Vector2D();
    public offset: Laya.Vector3 = new Laya.Vector3();

    constructor() {
        super();
    }

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
    onUpdate(): void {
        if (this.direction.distance(this.preDirection) > 0) {
            this.preDirection = this.direction.copy();
        }
        else if (this.direction.magnitude() > 0) {
            // let offset: Vector3D = new Vector3D(this.direction.x, 0, this.direction.y).scale(this.speed);
            // console.log("offset:" + this.offset);
            this.owner.transform.translate(this.offset);
        }
    }

    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}

    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}

    onKeyDown(evt: Laya.Event): void {
        console.log("keyDown:" + evt.keyCode);

        switch (evt.keyCode) {
            case Laya.Keyboard.W:
                this.up_pressd = true; // 向前
                break;
            case Laya.Keyboard.S:
                this.down_pressd = true; // 向后
                break;
            case Laya.Keyboard.A:
                this.left_pressd = true; // 向左
                break;
            case Laya.Keyboard.D:
                this.right_pressd = true; // 向右
                break;
            default:
                break;
        }
        this.calcDirection();

        // console.log("keyDown:" + this.direction);
    }

    onKeyUp(evt: Laya.Event): void {
        console.log("keyUp:" + evt.keyCode);

        switch (evt.keyCode) {
            case Laya.Keyboard.W:
                this.up_pressd = false; // 向前
                break;
            case Laya.Keyboard.S:
                this.down_pressd = false; // 向后
                break;
            case Laya.Keyboard.A:
                this.left_pressd = false; // 向左
                break;
            case Laya.Keyboard.D:
                this.right_pressd = false; // 向右
                break;
            default:
                break;
        }
        this.calcDirection();

        // console.log("keyUp:" + this.direction);
    };

    calcDirection(): void {
        this.direction = new Vector2D();
        if (this.up_pressd) { this.direction = this.direction.add(new Vector2D(0, -1)); }
        if (this.down_pressd) { this.direction = this.direction.add(new Vector2D(0, 1)); }
        if (this.left_pressd) { this.direction = this.direction.add(new Vector2D(-1, 0)); }
        if (this.right_pressd) { this.direction = this.direction.add(new Vector2D(1, 0)); }
        this.direction = this.direction.normalize();
        // console.log("direction:" + this.direction);

        this.offset = new Laya.Vector3(this.direction.x * this.speed, 0, this.direction.y * this.speed);
    }
}