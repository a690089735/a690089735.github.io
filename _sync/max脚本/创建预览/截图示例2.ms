fn getViewportSafeframeDib show:on =
(
 local x = y = 0, v
 local s = getViewSize()
 local k = getRendImageAspect()
 
 if k < (s.x/s.y) then
 (
  v = [s.y*k,s.y]
  x = (s.x-v.x)/2 + 1
 )
 else
 (
  v = [s.x, s.x/k]
  y = (s.y-v.y)/2 + 1
 )
 bmp = bitmap v.x v.y
 pasteBitmap (gw.getViewportDib()) bmp (box2 x y v.x v.y) [0,0]
 if show do display bmp
 bmp
)
getViewportSafeframeDib()