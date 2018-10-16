<#
Minimal native messaging library.
#>

function GetMessage
{
	$reader = New-Object -TypeName System.IO.BinaryReader -ArgumentList ([System.Console]::OpenStandardInput())
	$messageLength = $reader.ReadInt32()
	$messageBytes = $reader.ReadBytes($messageLength)
	return [System.Text.Encoding]::UTF8.GetString($messageBytes) | ConvertFrom-Json
}

function SendMessage
{
	param ($message)
	$messageBytes = [System.Text.Encoding]::UTF8.GetBytes(($message | ConvertTo-Json))
	$writer = New-Object -TypeName System.IO.BinaryWriter -ArgumentList ([System.Console]::OpenStandardOutput())
	$writer.Write($messageBytes.Count)
	$writer.Write($messageBytes)
}
