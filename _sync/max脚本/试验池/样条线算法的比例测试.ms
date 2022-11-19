-- oldvalue = #(getdis(),curveLength l 1)
(
dl = #($T00,$T01,$T02,$T03)
l = $L00

fn getdis ary:dl = 
(
	dis = 0
	for i = 2 to ary.count do dis += distance ary[i-1] ary[i] 
	dis
)
local newvalue = #(getdis(),curveLength l 1)
print #("手柄长度:",newvalue[1],"曲线长度:",newvalue[2]) #nomap
s1=newvalue[1] / oldvalue[1]
s2=newvalue[2] / oldvalue[2]
print #("比例分别为:",s1,s2,s1/s2) #nomap
oldvalue = #(getdis(),curveLength l 1)\
ok
)