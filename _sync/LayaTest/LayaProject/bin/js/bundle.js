(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/BulletMovent.ts
  var { regClass, property } = Laya;
  var Script = class extends Laya.Script {
    constructor() {
      super();
      this.text = "";
    }
    /**
     * 第一次执行update之前执行，只会执行一次
     */
    onStart() {
      this.sprite = this.owner;
      this.sprite.rotation = Math.random() * 360;
    }
    /**
     * 手动调用节点销毁时执行
     */
    //onDestroy(): void {
    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    onUpdate() {
      let radian = (this.sprite.rotation - 90) * Math.PI / 180;
      let forward = new Laya.Vector2(Math.cos(radian) * 10, Math.sin(radian) * 10);
      this.sprite.x += forward.x;
      this.sprite.y += forward.y;
      var vector = new Laya.Vector2(3, 4);
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
  };
  __name(Script, "Script");
  __decorateClass([
    property(String)
  ], Script.prototype, "text", 2);
  Script = __decorateClass([
    regClass("669cd7de-4b84-42b7-b4ad-ffd6ccb19356", "../src/BulletMovent.ts")
  ], Script);

  // src/Main.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass2("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/ShootBullet.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var Script2 = class extends Laya.Script {
    constructor() {
      super();
      this.text = "";
    }
    // this.stage.on(Laya.Event.CLICK, this, this.onStageClick);
    onMouseDown(evt) {
      let bullet = this.bulletPrefab.create();
      bullet.pos = this.birthplace.pos;
      Laya.stage.addChild(bullet);
    }
  };
  __name(Script2, "Script");
  __decorateClass([
    property3(String)
  ], Script2.prototype, "text", 2);
  __decorateClass([
    property3(Laya.Prefab)
  ], Script2.prototype, "bulletPrefab", 2);
  __decorateClass([
    property3(Laya.Sprite)
  ], Script2.prototype, "birthplace", 2);
  Script2 = __decorateClass([
    regClass3("9f85d930-3b2b-4ed7-b880-968bc868bb6f", "../src/ShootBullet.ts")
  ], Script2);

  // src/Touching.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var Touching = class extends Laya.Script {
    constructor() {
      super();
      this.text = "";
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
    //onUpdate(): void {}
    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}
    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}
  };
  __name(Touching, "Touching");
  __decorateClass([
    property4(String)
  ], Touching.prototype, "text", 2);
  Touching = __decorateClass([
    regClass4("daf2f70e-d217-4a17-b1d9-41ffcab1b6b3", "../src/Touching.ts")
  ], Touching);

  // src/Vector2D数学/Vector2D.ts
  var { regClass: regClass5 } = Laya;
  var Vector2D = class {
    // 有参数构建向量
    constructor(xOrAngle, y) {
      if (xOrAngle === void 0 && y === void 0) {
        this.x = 0;
        this.y = 0;
      } else if (y === void 0) {
        const angle = xOrAngle;
        const radians = angle * (Math.PI / 180);
        this.x = Math.cos(radians);
        this.y = Math.sin(radians);
      } else {
        this.x = xOrAngle;
        this.y = y;
      }
    }
    //实例版本
    /**
     * 2D向量加法
     * @param	b  另一个向量.
     * @return 新的2D向量
     */
    add(b) {
      return new Vector2D(this.x + b.x, this.y + b.y);
    }
    /**
     * 2D向量减法
     * @param	b  另一个向量.
     * @return 新的2D向量
     */
    sub(b) {
      return new Vector2D(this.x - b.x, this.y - b.y);
    }
    /**
     * 2D向量乘法
     * @param	b  另一个向量.
     * @return 新的2D向量
     */
    mul(b) {
      return new Vector2D(this.x * b.x, this.y * b.y);
    }
    /**
     * 2D向量除法
     * @param	b  另一个向量.
     * @return 新的2D向量
     */
    div(b) {
      return new Vector2D(this.x / b.x, this.y / b.y);
    }
    /**
     * 2D向量缩放(标量乘法)
     * @param	b  另一个向量.
     * @return 新的2D向量
     */
    scale(b) {
      return new Vector2D(this.x * b, this.y * b);
    }
    /**
     * 2D向量点乘
     * @param	b  另一个向量.
     * @return 两个向量的点乘值(未规一化)
     */
    dot(b) {
      return this.x * b.x + this.y * b.y;
    }
    /**
     * 2D向量求距离
     * @param	b  另一个向量.
     * @return 两个向量之间的距离
     */
    distance(b) {
      const dx = this.x - b.x;
      const dy = this.y - b.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * 2D向量减法
     * @return 向量的模长 
     */
    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * 2D向量归一化
     * @return 新的2D向量
     */
    normalize() {
      const len = this.magnitude();
      if (len === 0) {
        return new Vector2D(this.x, this.y);
      }
      return new Vector2D(this.x / len, this.y / len);
    }
    /**
     * 2D向量求角度
     * @return 向量角度
     */
    toAngle() {
      var angle = Math.atan2(this.y, this.x) * 180 / Math.PI;
      if (angle < 0) {
        angle += 360;
      }
      return angle;
    }
    /**
     * 2D向量旋转
     * @param	angle  旋转角度
     * @return 新的2D向量
     */
    rotate(angle) {
      const radian = angle * Math.PI / 180;
      const cos = Math.cos(radian);
      const sin = Math.sin(radian);
      return new Vector2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }
    /**
     * 求两个2D向量夹角
     * @param	b  另一个向量.
     * @return 两个向量之间的角度
     */
    angleTo(b) {
      const dot = this.x * b.x + this.y * b.y;
      const det = this.x * b.y - this.y * b.x;
      return Math.atan2(det, dot) * 180 / Math.PI;
    }
    //静态版本
    // public static distance(a: Vector2D, b: Vector2D): number {
    //   const dx = a.x - b.x;
    //   const dy = a.y - b.y;
    //   return Math.sqrt(dx * dx + dy * dy);
    // }
    // public static length(a: Vector2D): number { //啊...这里为啥一直报冲突啊...
    //   return Math.sqrt(a.x * a.x + a.y * a.y);
    // }
    // public static normalize(a: Vector2D): Vector2D {
    //   const len = a.length();
    //   if (len === 0) {
    //     return new Vector2D(0, 0);
    //   }
    //   return new Vector2D(a.x / len, a.y / len);
    // }
  };
  __name(Vector2D, "Vector2D");
  /**零向量,禁止修改*/
  Vector2D.ZERO = new Vector2D(0, 0);
  /**一向量,禁止修改*/
  Vector2D.ONE = new Vector2D(1, 1);
  /**上向量,禁止修改*/
  Vector2D.UP = new Vector2D(0, -1);
  /**下向量,禁止修改*/
  Vector2D.DOWN = new Vector2D(0, 1);
  /**左向量,禁止修改*/
  Vector2D.LEFT = new Vector2D(-1, 0);
  /**右向量,禁止修改*/
  Vector2D.RIGHT = new Vector2D(1, 0);
  Vector2D = __decorateClass([
    regClass5("693d1921-b8f7-434b-a378-62d388b706fb", "../src/Vector2D\u6570\u5B66/Vector2D.ts")
  ], Vector2D);

  // src/拖拽移动/DragMove.ts
  var { regClass: regClass6, property: property5 } = Laya;
  var DragMove = class extends Laya.Script {
    constructor() {
      super();
      this.lockX = true;
      this.lockY = true;
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake() {
      this._sprite = this.owner;
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
    //onMouseClick(): void {}
    onMouseDown(evt) {
      this._offsetX = this._sprite.x - evt.stageX;
      this._offsetY = this._sprite.y - evt.stageY;
    }
    onMouseDrag(evt) {
      this._sprite.x = evt.stageX + this._offsetX;
      this._sprite.y = evt.stageY + this._offsetY;
    }
    onMouseDragEnd(evt) {
    }
    // onMouseUp(evt: Laya.Event): void {
    //     console.log("抬起")
    // }
  };
  __name(DragMove, "DragMove");
  __decorateClass([
    property5(Boolean)
  ], DragMove.prototype, "lockX", 2);
  __decorateClass([
    property5(Boolean)
  ], DragMove.prototype, "lockY", 2);
  DragMove = __decorateClass([
    regClass6("ad0e797a-dc3d-491a-bba5-ab456c661981", "../src/\u62D6\u62FD\u79FB\u52A8/DragMove.ts")
  ], DragMove);

  // src/虚拟摇杆/ScreenHalf.ts
  var { regClass: regClass7, property: property6 } = Laya;
  var Left = class extends Laya.Script {
    constructor() {
      super();
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
     */
    onAwake() {
      var box = this.owner;
      box.width = Laya.stage.width * 0.5;
      box.height = Laya.stage.height;
      function onResizeBox(theBox = box) {
        theBox.width = Laya.stage.width * 0.5;
        theBox.height = Laya.stage.height;
      }
      __name(onResizeBox, "onResizeBox");
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
    onMouseClick() {
    }
    /**
     * 鼠标按下时执行
     */
    onMouseDown(evt) {
      this.virtualStick = this.virtualStickPrefab.create();
      this.virtualStick.pos(evt.stageX, evt.stageY);
      Laya.stage.addChild(this.virtualStick);
      this.virtualStickButton = this.virtualStick.getChildByName("Button");
      this.virtualStickBase = this.virtualStick.getChildByName("Base");
    }
    /**
     * 鼠标按住一个物体后，拖拽时执行
     */
    onMouseDrag(evt) {
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
    onMouseDragEnd(evt) {
      this.virtualStick.destroy();
    }
  };
  __name(Left, "Left");
  __decorateClass([
    property6(Laya.Prefab)
  ], Left.prototype, "virtualStickPrefab", 2);
  Left = __decorateClass([
    regClass7("86cee8ba-e66a-4ce5-93a0-4e55ef2bdec5", "../src/\u865A\u62DF\u6447\u6746/ScreenHalf.ts")
  ], Left);
})();
//# sourceMappingURL=bundle.js.map
