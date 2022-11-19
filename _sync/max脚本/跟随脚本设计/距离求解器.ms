fn ConstrainDistance point1 anchor1 distance1 =
(
  return (normalize(point1 - anchor1) * distance1) + anchor1
)

-- $[1].pos = ConstrainDistance $[1].pos $[2].pos 10