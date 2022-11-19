/* 
1.记录软选择为临时权重(Edit_Poly Edit_Mesh poly mesh poly_select mesh_select)
2.粘贴临时权重到选中骨骼(按比例值)
4.粘贴一组点的权重(按比例值或按临时权重过滤,对于权重骨骼重复的情况区分绝对和相对)
3.临时权重转软选择
*/

$.edit_poly.dataValue

$.edit_poly.dataChannel = 1


/* 
polyop.getNumMapVerts $ 1
polyop.setVDataChannelSupport <Poly poly> <int vdChannel> <布尔支持>
设置是否支持指定的顶点数据通道。<vdChannel> 索引值从 1 开始，前十个通道仅供 Discreet 使用。
通道 1：软选择
通道 2：顶点权重（用于 NURMS MeshSmooth）
通道 3：顶点 Alpha 值
通道 4：用于细分的拐角值

polyop.getVDataValue $ 1 1
polyop.getVDataValue <Poly poly> <int vdChannel> <int vertex_index>
以 <float> 形式返回与顶点数据通道 <vdChannel> 中的顶点 vertex_index 关联的浮点数据值。

polyop.setVDataValue <Poly poly> <int vdChannel> <vertlist> <float>

meshop.getVDataValue $ 1 1
mesh同上

经测试,修改器也支持上列操作(直接对$操作,即取当前类型)
 */
$.edit_poly.LocalDataChanged 2