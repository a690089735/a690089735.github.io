rollout hpxtl_rollout1 "Extended Timeline" width:1000 height:25 (
			spinner hpxtl_control_firstframe "" align:#left pos:[0,5] width:50 height:20 type:#integer range:[-100000,100000,hpxtl_animation_start]
			spinner hpxtl_control_lastframe "" align:#left pos:[0,5] width:50 height:20 type:#integer range:[-100000,100000,hpxtl_animation_end]
			spinner hpxtl_control_zoom_firstframe "" align:#left pos:[98,5] width:50 height:20 type:#integer range:[hpxtl_animation_start,(hpxtl_animation_end - 1),hpxtl_animation_zoom_start]
			spinner hpxtl_control_zoom_lastframe "" align:#left pos:[0,5] width:50 height:20 type:#integer range:[(hpxtl_animation_start + 1),hpxtl_animation_end,hpxtl_animation_zoom_end]
			dotnetcontrol hpxtl_form "System.Windows.Forms.ContainerControl" width:500 height:25 pos:[120,1]
			dotnetcontrol hpxtl_presets "System.Windows.Forms.ContainerControl" width:0 height:21 pos:[1,2]
			dotnetcontrol hpxtl_buttons "System.Windows.Forms.ContainerControl" width:24 height:21 pos:[1,2]
			--( EVENTS
				on hpxtl_control_firstframe changed arg do (
					hpxtl_animation_start = arg
					if (arg >= hpxtl_animation_end) then (
						hpxtl_animation_end = arg + 1
						hpxtl_control_lastframe.value = hpxtl_animation_end
						hpxtl_animation_zoom_end = hpxtl_animation_end
					)
					hpxtl_rollout.hpxtl_control_zoom_firstframe.range = [hpxtl_animation_start,hpxtl_animation_end - 1,hpxtl_animation_zoom_start]
					hpxtl_rollout.hpxtl_control_zoom_lastframe.range = [hpxtl_animation_start + 1,hpxtl_animation_end,hpxtl_animation_zoom_end]
					if (hpxtl_animation_zoom_start < hpxtl_animation_start) then (
						hpxtl_animation_zoom_start = hpxtl_animation_start
						if (hpxtl_animation_zoom_end <= hpxtl_animation_zoom_start) then (
							hpxtl_animation_zoom_end = hpxtl_animation_zoom_start + 1
						)
						hpxtl_rollout.hpxtl_control_zoom_firstframe.range = [hpxtl_animation_start,hpxtl_animation_end - 1,hpxtl_animation_zoom_start]
						hpxtl_rollout.hpxtl_control_zoom_lastframe.range = [hpxtl_animation_start + 1,hpxtl_animation_end,hpxtl_animation_zoom_end]
						animationRange = interval hpxtl_animation_zoom_start hpxtl_animation_zoom_end
						hpxtl_rollout.hpxtl_control_zoom_firstframe.value = hpxtl_animation_zoom_start
						hpxtl_rollout.hpxtl_control_zoom_lastframe.value = hpxtl_animation_zoom_end
						setAppData rootNode 98068471 (hpxtl_animation_zoom_start as string)
						setAppData rootNode 98068472 (hpxtl_animation_zoom_end as string)
					)
					hpxtl_setrange_reverse()
					setAppData rootNode 98068461 (arg as string)
					hpxtl_preset_validation()
				)
				on hpxtl_control_lastframe changed arg do (
					hpxtl_animation_end = arg
					if (arg <= hpxtl_animation_start) then (
						hpxtl_animation_start = arg - 1
						hpxtl_control_firstframe.value = hpxtl_animation_start
						hpxtl_animation_zoom_start = hpxtl_animation_start
					)
					hpxtl_rollout.hpxtl_control_zoom_firstframe.range = [hpxtl_animation_start,hpxtl_animation_end - 1,hpxtl_animation_zoom_start]
					hpxtl_rollout.hpxtl_control_zoom_lastframe.range = [hpxtl_animation_start + 1,hpxtl_animation_end,hpxtl_animation_zoom_end]
					if (hpxtl_animation_zoom_end > hpxtl_animation_end) then (
						hpxtl_animation_zoom_end = hpxtl_animation_end
						if (hpxtl_animation_zoom_start >= hpxtl_animation_zoom_end) then (
							hpxtl_animation_zoom_start = hpxtl_animation_zoom_end - 1
						)
						hpxtl_rollout.hpxtl_control_zoom_firstframe.range = [hpxtl_animation_start,hpxtl_animation_end - 1,hpxtl_animation_zoom_start]
						hpxtl_rollout.hpxtl_control_zoom_lastframe.range = [hpxtl_animation_start + 1,hpxtl_animation_end,hpxtl_animation_zoom_end]
						animationRange = interval hpxtl_animation_zoom_start hpxtl_animation_zoom_end
						hpxtl_rollout.hpxtl_control_zoom_firstframe.value = hpxtl_animation_zoom_start
						hpxtl_rollout.hpxtl_control_zoom_lastframe.value = hpxtl_animation_zoom_end
						setAppData rootNode 98068471 (hpxtl_animation_zoom_start as string)
						setAppData rootNode 98068472 (hpxtl_animation_zoom_end as string)
					)
					hpxtl_setrange_reverse()
					setAppData rootNode 98068462 (arg as string)
					hpxtl_preset_validation()
				)
				on hpxtl_control_zoom_firstframe changed arg do (
					hpxtl_animation_zoom_start = arg
					setAppData rootNode 98068471 (hpxtl_animation_zoom_start as string)
					if (hpxtl_animation_zoom_start >= hpxtl_animation_zoom_end) then (
						hpxtl_animation_zoom_end = hpxtl_animation_zoom_start + 1
						hpxtl_control_zoom_lastframe.value = hpxtl_animation_zoom_end
						setAppData rootNode 98068472 (hpxtl_animation_zoom_end as string)
					)
					animationRange = interval hpxtl_animation_zoom_start hpxtl_animation_zoom_end
					hpxtl_setrange_reverse()
				)
				on hpxtl_control_zoom_lastframe changed arg do (
					hpxtl_animation_zoom_end = arg
					setAppData rootNode 98068472 (hpxtl_animation_zoom_end as string)
					if (hpxtl_animation_zoom_end <= hpxtl_animation_zoom_start) then (
						hpxtl_animation_zoom_start = hpxtl_animation_zoom_end - 1
						hpxtl_control_zoom_firstframe.value = hpxtl_animation_zoom_start
						setAppData rootNode 98068471 (hpxtl_animation_zoom_start as string)
					)
					animationRange = interval hpxtl_animation_zoom_start hpxtl_animation_zoom_end
					hpxtl_setrange_reverse()
				)
				on hpxtl_rollout resized arg do (
					hpxtl_resize_interface()
				)
				local hpxtl_dorefresh = true
				on hpxtl_form Paint args do (
					if hpxtl_dorefresh == true then (
						hpxtl_dorefresh = false
						hpxtl_form.refresh()
						hpxtl_presets.refresh()
						hpxtl_buttons.refresh()
						hpxtl_dorefresh = true
					)
				)
			--)
		)
		createdialog hpxtl_rollout1