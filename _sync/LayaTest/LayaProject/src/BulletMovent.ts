const { regClass, property } = Laya;

@regClass()
export class Script extends Laya.Script {
    //declare owner : Laya.Sprite3D;

    @property(String)
    public text: string = ""

    public sprite: Laya.Sprite

    constructor() {
        super();
    }

    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart(): void {
        this.sprite = this.owner as Laya.Sprite
        this.sprite.rotation = Math.random() * 360
    }

    /**
     * 手动调用节点销毁时执行
     */
    //onDestroy(): void {

    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    onUpdate(): void {
        // this.sprite.x
        // 获取当前对象的朝向向量
        let radian = (this.sprite.rotation - 90) * Math.PI / 180
        let forward = new Laya.Vector2(Math.cos(radian) * 10, Math.sin(radian) * 10); // 默认朝上方向

        // 移动对象
        this.sprite.x += forward.x;
        this.sprite.y += forward.y;

        // Laya.Vector2.normalize(new Laya.Vector2(Math.cos(radian) * 10, Math.sin(radian) * 10), forward)
        // Laya.Vector2.

        // var vector = new Laya.Vector2(3, 4); // 创建一个二维向量
        // var length = vector. // 计算向量的长度
        // console.log(length); // 输出结果：5
        var vector = new Laya.Vector2(3, 4);
        // vector.length();
        new Laya.Vector2(3);
    }

    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}

    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}
}