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

  // src/DragMove.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Sprite = Laya.Sprite;
  var DragMove = class extends Laya.Script {
    get sprite() {
      return this._sprite;
    }
    set sprite(value) {
      this._sprite = value;
    }
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
    property2({ type: Sprite })
  ], DragMove.prototype, "sprite", 1);
  DragMove = __decorateClass([
    regClass2("ad0e797a-dc3d-491a-bba5-ab456c661981", "../src/DragMove.ts")
  ], DragMove);

  // src/Main.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
  };
  __name(Main, "Main");
  Main = __decorateClass([
    regClass3("7bad1742-6eed-4d8d-81c0-501dc5bf03d6", "../src/Main.ts")
  ], Main);

  // src/shootBullet.ts
  var { regClass: regClass4, property: property4 } = Laya;
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
    property4(String)
  ], Script2.prototype, "text", 2);
  __decorateClass([
    property4(Laya.Prefab)
  ], Script2.prototype, "bulletPrefab", 2);
  __decorateClass([
    property4(Laya.Sprite)
  ], Script2.prototype, "birthplace", 2);
  Script2 = __decorateClass([
    regClass4("9f85d930-3b2b-4ed7-b880-968bc868bb6f", "../src/shootBullet.ts")
  ], Script2);

  // src/Touching.ts
  var { regClass: regClass5, property: property5 } = Laya;
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
    property5(String)
  ], Touching.prototype, "text", 2);
  Touching = __decorateClass([
    regClass5("daf2f70e-d217-4a17-b1d9-41ffcab1b6b3", "../src/Touching.ts")
  ], Touching);

  // src/ScreenHalf.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var Left = class extends Laya.Script {
    constructor() {
      super();
      this.text = "";
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
        console.log(Laya.stage.width);
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
      console.log(this.owner.name);
    }
  };
  __name(Left, "Left");
  __decorateClass([
    property6(String)
  ], Left.prototype, "text", 2);
  Left = __decorateClass([
    regClass6("86cee8ba-e66a-4ce5-93a0-4e55ef2bdec5", "../src/ScreenHalf.ts")
  ], Left);
})();
//# sourceMappingURL=bundle.js.map
