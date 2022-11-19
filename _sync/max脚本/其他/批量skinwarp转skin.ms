sel = selection as array
for i in sel do (select i;i.modifiers[1].ConvertToSkin true)
select sel

for i in sel do deletemodifier i 2