preview_name = (getDir #preview)+"/quickpreview.avi"
 view_size = getViewSize()
 anim_bmp = bitmap view_size.x view_size.y filename:preview_name
 for t = animationrange.start to animationrange.end do
 (
  sliderTime = t
  dib = gw.getViewportDib()
  copy dib anim_bmp
  save anim_bmp
 )
 close anim_bmp
 gc()
 ramplayer preview_name ""