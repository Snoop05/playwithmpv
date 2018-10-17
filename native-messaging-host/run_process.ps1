Import-Module -Name ".\nativemessaging.psm1"

$url = GetMessage
Start-Process "mpv.exe" $url -Wait
# TODO: break away from job
