
windows.snapshot {<int_HWND>|#max} captureAlpha:<bool> gammaCorrect:<bool> captureScreenPixels:<bool> 

windows.addChild <int_HWND> <int_HWND>
windows.getMAXHWND()
windows.getDesktopHWND()
windows.getChildrenHWND {<int HWND>|{<int HWND>|#maxmax}  parent:{<int HWND>| int HWND>| #max}

windows.sendMessage <int HWND> <int message> <int messageParameter1> <int messageParameter2>
windows.postMessage <int HWND> <int message> <int messageParameter1> <int messageParameter2> 
windows.processPostedMessages()()