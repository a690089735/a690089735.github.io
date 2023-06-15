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

  // src/ShootBullet.ts
  var { regClass: regClass2, property: property2 } = Laya;
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
    property2(String)
  ], Script2.prototype, "text", 2);
  __decorateClass([
    property2(Laya.Prefab)
  ], Script2.prototype, "bulletPrefab", 2);
  __decorateClass([
    property2(Laya.Sprite)
  ], Script2.prototype, "birthplace", 2);
  Script2 = __decorateClass([
    regClass2("9f85d930-3b2b-4ed7-b880-968bc868bb6f", "../src/ShootBullet.ts")
  ], Script2);

  // src/Vector2D数学/Vector2D.ts
  var { regClass: regClass3 } = Laya;
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
     * 2D向量取模长
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
      if (len == 0) {
        return new Vector2D(0, 0);
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
    /**
     * 复制一个新的2D向量
     * @return 新的2D向量
     */
    copy() {
      return new Vector2D(this.x, this.y);
    }
    /**
     * 转为系统默认的Vector2
     * @return 默认的新Vector2
     */
    toVector2() {
      return new Laya.Vector2(this.x, this.y);
    }
    /**
     * 按文本输出Vector2D
     * @return Vector2D字符串
     */
    toString() {
      return `Vector2D(X: ${this.x}, Y: ${this.y})`;
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
    regClass3("693d1921-b8f7-434b-a378-62d388b706fb", "../src/Vector2D\u6570\u5B66/Vector2D.ts")
  ], Vector2D);

  // assets/拖拽移动/DragMove.ts
  var { regClass: regClass4, property: property3 } = Laya;
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
    property3(Boolean)
  ], DragMove.prototype, "lockX", 2);
  __decorateClass([
    property3(Boolean)
  ], DragMove.prototype, "lockY", 2);
  DragMove = __decorateClass([
    regClass4("ad0e797a-dc3d-491a-bba5-ab456c661981", "\u62D6\u62FD\u79FB\u52A8/DragMove.ts")
  ], DragMove);

  // assets/虚拟摇杆/ScreenHalf.ts
  var { regClass: regClass5, property: property4 } = Laya;
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
    property4(Laya.Prefab)
  ], Left.prototype, "virtualStickPrefab", 2);
  Left = __decorateClass([
    regClass5("86cee8ba-e66a-4ce5-93a0-4e55ef2bdec5", "\u865A\u62DF\u6447\u6746/ScreenHalf.ts")
  ], Left);

  // assets/3D资源/八方向移动.ts
  var { regClass: regClass6, property: property5 } = Laya;
  var \u516B\u65B9\u5411\u79FB\u52A8 = class extends Laya.Script {
    constructor() {
      super();
      this.speed = 0.01;
      this.up_pressd = false;
      this.down_pressd = false;
      this.left_pressd = false;
      this.right_pressd = false;
      this.preDirection = new Vector2D();
      this.direction = new Vector2D();
      this.offset = new Laya.Vector3();
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
    onUpdate() {
      if (this.direction.distance(this.preDirection) > 0) {
        this.preDirection = this.direction.copy();
      } else if (this.direction.magnitude() > 0) {
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
    onKeyDown(evt) {
      console.log("keyDown:" + evt.keyCode);
      switch (evt.keyCode) {
        case Laya.Keyboard.W:
          this.up_pressd = true;
          break;
        case Laya.Keyboard.S:
          this.down_pressd = true;
          break;
        case Laya.Keyboard.A:
          this.left_pressd = true;
          break;
        case Laya.Keyboard.D:
          this.right_pressd = true;
          break;
        default:
          break;
      }
      this.calcDirection();
    }
    onKeyUp(evt) {
      console.log("keyUp:" + evt.keyCode);
      switch (evt.keyCode) {
        case Laya.Keyboard.W:
          this.up_pressd = false;
          break;
        case Laya.Keyboard.S:
          this.down_pressd = false;
          break;
        case Laya.Keyboard.A:
          this.left_pressd = false;
          break;
        case Laya.Keyboard.D:
          this.right_pressd = false;
          break;
        default:
          break;
      }
      this.calcDirection();
    }
    calcDirection() {
      this.direction = new Vector2D();
      if (this.up_pressd) {
        this.direction = this.direction.add(new Vector2D(0, -1));
      }
      if (this.down_pressd) {
        this.direction = this.direction.add(new Vector2D(0, 1));
      }
      if (this.left_pressd) {
        this.direction = this.direction.add(new Vector2D(-1, 0));
      }
      if (this.right_pressd) {
        this.direction = this.direction.add(new Vector2D(1, 0));
      }
      this.direction = this.direction.normalize();
      this.offset = new Laya.Vector3(this.direction.x * this.speed, 0, this.direction.y * this.speed);
    }
  };
  __name(\u516B\u65B9\u5411\u79FB\u52A8, "\u516B\u65B9\u5411\u79FB\u52A8");
  __decorateClass([
    property5(Number)
  ], \u516B\u65B9\u5411\u79FB\u52A8.prototype, "speed", 2);
  \u516B\u65B9\u5411\u79FB\u52A8 = __decorateClass([
    regClass6("5678592e-1b52-4bc7-a179-023727e58750", "3D\u8D44\u6E90/\u516B\u65B9\u5411\u79FB\u52A8.ts")
  ], \u516B\u65B9\u5411\u79FB\u52A8);

  // src/Vector2D数学/Vector3D.ts
  var { regClass: regClass7 } = Laya;
  var Vector3D = class {
    /**
     * 创建一个 <code>Vector3D</code> 实例。
     * @param	x = 0  X轴坐标。
     * @param	y = 0  Y轴坐标。
     * @param	z = 0  Z轴坐标。
     */
    // constructor(); // 无参数构建0向量
    // /**
    //  * 从角度创建一个 <code>Vector3D</code> 实例。
    //  * @param	angle  旋转角度。
    //  */
    // constructor(angle: number); // 从角度构建向量
    // /**
    //  * 创建一个 <code>Vector3D</code> 实例。
    //  * @param	x  X轴坐标。
    //  * @param	y  Y轴坐标。
    //  * @param	z  Z轴坐标。
    //  */
    // constructor(x: number, y: number, z: number); // 有参数构建向量
    // constructor(x?: number, y?: number, z?: number) {
    //   if (x === undefined && y === undefined && z === undefined) {
    //     this.x = 0;
    //     this.y = 0;
    //     this.z = 0;
    //   } else {
    //     this.x = x;
    //     this.y = y;
    //     this.z = z;
    //   }
    // }
    /**
     * 创建一个 <code>Vector3D</code> 实例。
     * @param	x  X轴坐标。
     * @param	y  Y轴坐标。
     * @param	z  Z轴坐标。
     */
    // 有参数构建向量
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    //实例版本
    /**
     * 3D向量加法
     * @param	b  另一个向量.
     * @return 新的3D向量
     */
    add(b) {
      return new Vector3D(this.x + b.x, this.y + b.y, this.z + b.z);
    }
    /**
     * 3D向量减法
     * @param	b  另一个向量.
     * @return 新的3D向量
     */
    sub(b) {
      return new Vector3D(this.x - b.x, this.y - b.y, this.z - b.z);
    }
    /**
     * 3D向量乘法
     * @param	b  另一个向量.
     * @return 新的3D向量
     */
    mul(b) {
      return new Vector3D(this.x * b.x, this.y * b.y, this.z * b.z);
    }
    /**
     * 3D向量除法
     * @param	b  另一个向量.
     * @return 新的3D向量
     */
    div(b) {
      return new Vector3D(this.x / b.x, this.y / b.y, this.z / b.z);
    }
    /**
     * 3D向量缩放(标量乘法)
     * @param	b  另一个向量.
     * @return 新的3D向量
     */
    scale(b) {
      return new Vector3D(this.x * b, this.y * b, this.z * b);
    }
    /**
     * 3D向量点乘
     * @param	b  另一个向量.
     * @return 两个向量的点乘值(未规一化)
     */
    dot(b) {
      return this.x * b.x + this.y * b.y + this.z * b.z;
    }
    /**
     * 3D向量求距离
     * @param	b  另一个向量.
     * @return 两个向量之间的距离
     */
    distance(b) {
      const dx = this.x - b.x;
      const dy = this.y - b.y;
      const dz = this.z - b.z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    /**
     * 3D向量取模长
     * @return 向量的模长 
     */
    magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * 3D向量归一化
     * @return 新的3D向量
     */
    normalize() {
      const len = this.magnitude();
      if (len == 0) {
        return new Vector3D(0, 0, 0);
      }
      return new Vector3D(this.x / len, this.y / len, this.z / len);
    }
    // /**
    //  * 3D向量求角度
    //  * @return 向量角度
    //  */
    // public toAngle(): number {
    //   var angle = Math.atan2(this.y, this.x) * 180 / Math.PI;
    //   if (angle < 0) {
    //     angle += 360;
    //   }
    //   return angle;
    // }
    /**
     * 3D向量旋转
     * @param	axis  旋转轴
     * @param	angle  旋转角度
     * @return 新的3D向量
     */
    rotate(axis, angle) {
      let radians = angle * Math.PI / 180;
      let cos = Math.cos(radians);
      let sin = Math.sin(radians);
      let newX = this.x * (cos + (1 - cos) * axis.x * axis.x) + this.y * ((1 - cos) * axis.x * axis.y - sin * axis.z) + this.z * ((1 - cos) * axis.x * axis.z + sin * axis.y);
      let newY = this.x * ((1 - cos) * axis.x * axis.y + sin * axis.z) + this.y * (cos + (1 - cos) * axis.y * axis.y) + this.z * ((1 - cos) * axis.y * axis.z - sin * axis.x);
      let newZ = this.x * ((1 - cos) * axis.x * axis.z - sin * axis.y) + this.y * ((1 - cos) * axis.y * axis.z + sin * axis.x) + this.z * (cos + (1 - cos) * axis.z * axis.z);
      return new Vector3D(newX, newY, newZ);
    }
    /**
     * 求两个3D向量夹角
     * @param	b  另一个向量.
     * @return 两个向量之间的角度
     */
    angleTo(vector) {
      let thisLength = this.magnitude();
      let vectorLength = vector.magnitude();
      let dotProduct = this.dot(vector);
      let cosAngle = dotProduct / (thisLength * vectorLength);
      return Math.acos(cosAngle) * 180 / Math.PI;
    }
    /**
     * 复制一个新的3D向量
     * @return 新的3D向量
     */
    copy() {
      return new Vector3D(this.x, this.y, this.z);
    }
    /**
     * 转为系统默认的Vector3
     * @return 默认的新Vector3
     */
    toVector3() {
      return new Laya.Vector3(this.x, this.y, this.z);
    }
    /**
     * 按文本输出Vector3D
     * @return Vector3D字符串
     */
    toString() {
      return `Vector3D(X: ${this.x}, Y: ${this.y}, Z: ${this.z})`;
    }
    //静态版本
  };
  __name(Vector3D, "Vector3D");
  /**零向量,禁止修改*/
  Vector3D.ZERO = new Vector3D(0, 0, 0);
  /**一向量,禁止修改*/
  Vector3D.ONE = new Vector3D(1, 1, 1);
  /**上向量,禁止修改*/
  Vector3D.UP = new Vector3D(0, 1, 0);
  /**下向量,禁止修改*/
  Vector3D.DOWN = new Vector3D(0, -1, 0);
  /**左向量,禁止修改*/
  Vector3D.LEFT = new Vector3D(-1, 0, 0);
  /**右向量,禁止修改*/
  Vector3D.RIGHT = new Vector3D(1, 0, 0);
  /**左向量,禁止修改*/
  Vector3D.Front = new Vector3D(0, 0, -1);
  /**右向量,禁止修改*/
  Vector3D.BACK = new Vector3D(0, 0, 1);
  Vector3D = __decorateClass([
    regClass7("9617496d-363c-4a20-ad0d-cba63c909506", "../src/Vector2D\u6570\u5B66/Vector3D.ts")
  ], Vector3D);
})();
//# sourceMappingURL=bundle.js.map
