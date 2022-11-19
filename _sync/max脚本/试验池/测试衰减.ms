delete objects

for i = 1 to 100 do 
(
	pos = [(100.0 / i)-1, 0 ,i]
	print pos
	point pos:pos size:1 wirecolor:red
)
for i = 1 to 10 do 
(
	pos = [(10.0 / i)-0.1, 0 ,i]
	print pos
	point pos:pos size:1 wirecolor:red
)
for i = 1 to 100 do 
(
	pos = [(10.0 / i)-0.1, 0 ,i]
	print pos
	point pos:pos size:1 wirecolor:red
)

-- for i = 1 to 100 do 
-- (
-- 	pos = [((100.0 / i)^2)-1, 0 ,i]
-- 	print pos
-- 	point pos:pos size:1 wirecolor:red
-- )

-- for i = 1 to 100 do 
-- (
-- 	pos = [(i / pow i i), 0 ,i]
-- 	print pos
-- 	point pos:pos size:1
-- )

-- for i = 1 to 100 do 
-- (
-- 	point pos:[-log i, 0, i] size:1 wirecolor:red
-- )

-- for i = 1 to 100 do 
-- (
-- 	point pos:[-log10 i, 0, i] size:1 wirecolor:red
-- )
