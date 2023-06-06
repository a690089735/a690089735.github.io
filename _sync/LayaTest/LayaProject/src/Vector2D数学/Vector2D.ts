// import { Vector2 } from Laya.Vector2;
const { regClass } = Laya;

@regClass()
export class Vector2D {

  /**零向量,禁止修改*/
  static readonly ZERO: Readonly<Vector2D> = new Vector2D(0.0, 0.0);
  /**一向量,禁止修改*/
  static readonly ONE: Readonly<Vector2D> = new Vector2D(1.0, 1.0);
  /**上向量,禁止修改*/
  static readonly UP: Readonly<Vector2D> = new Vector2D(0.0, -1.0);
  /**下向量,禁止修改*/
  static readonly DOWN: Readonly<Vector2D> = new Vector2D(0.0, 1.0);
  /**左向量,禁止修改*/
  static readonly LEFT: Readonly<Vector2D> = new Vector2D(-1.0, 0.0);
  /**右向量,禁止修改*/
  static readonly RIGHT: Readonly<Vector2D> = new Vector2D(1.0, 0.0);

  /**X轴坐标*/
  x: number;
  /**Y轴坐标*/
  y: number;

  /**
   * 创建一个 <code>Vector2D</code> 实例。
   * @param	x = 0  X轴坐标。
   * @param	y = 0  Y轴坐标。
   */
  constructor(); // 无参数构建0向量
  /**
   * 从角度创建一个 <code>Vector2D</code> 实例。
   * @param	angle  旋转角度。
   */
  constructor(angle: number); // 从角度构建向量
  /**
   * 创建一个 <code>Vector2D</code> 实例。
   * @param	x  X轴坐标。
   * @param	y  Y轴坐标。
   */
  constructor(x: number, y: number); // 有参数构建向量

  constructor(xOrAngle?: number, y?: number) {
    if (xOrAngle === undefined && y === undefined) {
      this.x = 0;
      this.y = 0;
    } else if (y === undefined) {
      const angle = xOrAngle as number;
      const radians = angle * (Math.PI / 180);
      this.x = Math.cos(radians);
      this.y = Math.sin(radians);
    } else {
      this.x = xOrAngle as number;
      this.y = y;
    }
  }

  //实例版本
  /**
   * 2D向量加法
   * @param	b  另一个向量.
   * @return 新的2D向量
   */
  public add(b: Vector2D): Vector2D {
    return new Vector2D(this.x + b.x, this.y + b.y);
  }
  /**
   * 2D向量减法
   * @param	b  另一个向量.
   * @return 新的2D向量
   */
  public sub(b: Vector2D): Vector2D {
    return new Vector2D(this.x - b.x, this.y - b.y);
  }
  /**
   * 2D向量乘法
   * @param	b  另一个向量.
   * @return 新的2D向量
   */
  public mul(b: Vector2D): Vector2D {
    return new Vector2D(this.x * b.x, this.y * b.y);
  }
  /**
   * 2D向量除法
   * @param	b  另一个向量.
   * @return 新的2D向量
   */
  public div(b: Vector2D): Vector2D {
    return new Vector2D(this.x / b.x, this.y / b.y);
  }
  /**
   * 2D向量缩放(标量乘法)
   * @param	b  另一个向量.
   * @return 新的2D向量
   */
  public scale(b: number): Vector2D {
    return new Vector2D(this.x * b, this.y * b);
  }
  /**
   * 2D向量点乘
   * @param	b  另一个向量.
   * @return 两个向量的点乘值(未规一化)
   */
  public dot(b: Vector2D): number {
    return this.x * b.x + this.y * b.y;
  }
  /**
   * 2D向量求距离
   * @param	b  另一个向量.
   * @return 两个向量之间的距离
   */
  public distance(b: Vector2D): number {
    const dx = this.x - b.x;
    const dy = this.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  /**
   * 2D向量减法
   * @return 向量的模长 
   */
  public magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * 2D向量归一化
   * @return 新的2D向量
   */
  public normalize(): Vector2D {
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
  public toAngle(): number {
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
  public rotate(angle: number): Vector2D {
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
  public angleTo(b: Vector2D): number {
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
}