deleteKeys (getcurrentselection())--清除关键帧 #allKeys (default)
deleteKeys o.rotation.controller #selection 
deleteKeysByRange obj.position.controller (interval 0f 100f)

selectKeys o.pos.controller 0f 500f
selectKeys  $

moveKeys <controller> <time> [#selection]
addNewKey <controller> <time> [#select](#select表示添加并选择)
biped.addNewKey $.controller 1  [#select]--注意： Biped COM 和道具的控制器不可键控。(官方文档这么提示了一句)

--获取关键帧就没那么智能了,只能针对控制器,而且分层的只支持子控制器
numKeys $
getKey <controller> <index_integer> 
getKeyTime <controller> <index_integer> 




lable居中对齐
文档是正确的。
Alignment 属性适用于 UI 控件，而不适用于里面的文本。
如果您使用#pos，则忽略#align。
PS 另外，如果您希望 Label 内的文本出现在中心，则不要使用 #width

正常应该是13421772[8],估计有一位是符号
13421772最大帧数,超出会崩溃
-13421772最小帧数,超出会崩溃
故,用这个数字清除无限帧就好了