// import { Vector2 } from Laya.Vector2;
const { regClass } = Laya;

@regClass()
export class Vector3D {

  /**零向量,禁止修改*/
  static readonly ZERO: Readonly<Vector3D> = new Vector3D(0.0, 0.0, 0.0);
  /**一向量,禁止修改*/
  static readonly ONE: Readonly<Vector3D> = new Vector3D(1.0, 1.0, 1.0);
  /**上向量,禁止修改*/
  static readonly UP: Readonly<Vector3D> = new Vector3D(0.0, 1.0, 0.0);
  /**下向量,禁止修改*/
  static readonly DOWN: Readonly<Vector3D> = new Vector3D(0.0, -1.0, 0.0);
  /**左向量,禁止修改*/
  static readonly LEFT: Readonly<Vector3D> = new Vector3D(-1.0, 0.0, 0.0);
  /**右向量,禁止修改*/
  static readonly RIGHT: Readonly<Vector3D> = new Vector3D(1.0, 0.0, 0.0);
  /**左向量,禁止修改*/
  static readonly Front: Readonly<Vector3D> = new Vector3D(0.0, 0.0, -1.0);
  /**右向量,禁止修改*/
  static readonly BACK: Readonly<Vector3D> = new Vector3D(0.0, 0.0, 1.0);

  /**X轴坐标*/
  x: number;
  /**Y轴坐标*/
  y: number;
  /**Z轴坐标*/
  z: number;

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
   */// 有参数构建向量
  constructor(x: number, y: number, z: number) {
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
  public add(b: Vector3D): Vector3D {
    return new Vector3D(this.x + b.x, this.y + b.y, this.z + b.z);
  }
  /**
   * 3D向量减法
   * @param	b  另一个向量.
   * @return 新的3D向量
   */
  public sub(b: Vector3D): Vector3D {
    return new Vector3D(this.x - b.x, this.y - b.y, this.z - b.z);
  }
  /**
   * 3D向量乘法
   * @param	b  另一个向量.
   * @return 新的3D向量
   */
  public mul(b: Vector3D): Vector3D {
    return new Vector3D(this.x * b.x, this.y * b.y, this.z * b.z);
  }
  /**
   * 3D向量除法
   * @param	b  另一个向量.
   * @return 新的3D向量
   */
  public div(b: Vector3D): Vector3D {
    return new Vector3D(this.x / b.x, this.y / b.y, this.z / b.z);
  }
  /**
   * 3D向量缩放(标量乘法)
   * @param	b  另一个向量.
   * @return 新的3D向量
   */
  public scale(b: number): Vector3D {
    return new Vector3D(this.x * b, this.y * b, this.z * b);
  }
  /**
   * 3D向量点乘
   * @param	b  另一个向量.
   * @return 两个向量的点乘值(未规一化)
   */
  public dot(b: Vector3D): number {
    return this.x * b.x + this.y * b.y + this.z * b.z;
  }
  /**
   * 3D向量求距离
   * @param	b  另一个向量.
   * @return 两个向量之间的距离
   */
  public distance(b: Vector3D): number {
    const dx = this.x - b.x;
    const dy = this.y - b.y;
    const dz = this.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
  /**
   * 3D向量取模长
   * @return 向量的模长 
   */
  public magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * 3D向量归一化
   * @return 新的3D向量
   */
  public normalize(): Vector3D {
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
  public rotate(axis: Vector3D, angle: number): Vector3D {
    let radians: number = angle * Math.PI / 180;
    let cos: number = Math.cos(radians);
    let sin: number = Math.sin(radians);

    let newX: number = this.x * (cos + (1 - cos) * axis.x * axis.x) +
      this.y * ((1 - cos) * axis.x * axis.y - sin * axis.z) +
      this.z * ((1 - cos) * axis.x * axis.z + sin * axis.y);

    let newY: number = this.x * ((1 - cos) * axis.x * axis.y + sin * axis.z) +
      this.y * (cos + (1 - cos) * axis.y * axis.y) +
      this.z * ((1 - cos) * axis.y * axis.z - sin * axis.x);

    let newZ: number = this.x * ((1 - cos) * axis.x * axis.z - sin * axis.y) +
      this.y * ((1 - cos) * axis.y * axis.z + sin * axis.x) +
      this.z * (cos + (1 - cos) * axis.z * axis.z);

    return new Vector3D(newX, newY, newZ);
  }

  /**
   * 求两个3D向量夹角
   * @param	b  另一个向量.
   * @return 两个向量之间的角度
   */
  public angleTo(vector: Vector3D): number {
    let thisLength: number = this.magnitude();
    let vectorLength: number = vector.magnitude();

    let dotProduct: number = this.dot(vector);
    let cosAngle: number = dotProduct / (thisLength * vectorLength);

    return Math.acos(cosAngle) * 180 / Math.PI;
  }

  /**
   * 复制一个新的3D向量
   * @return 新的3D向量
   */
  public copy(): Vector3D {
    return new Vector3D(this.x, this.y, this.z);
  }

  /**
   * 转为系统默认的Vector3
   * @return 默认的新Vector3
   */
  public toVector3(): Laya.Vector3 {
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

}