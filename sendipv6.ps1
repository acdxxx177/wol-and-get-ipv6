# ���������mac��ַ
$hostname = "jsb-xin"

# ��ȡ����IPv6��ַ
$ipv6Addresses = (Get-NetIPAddress -AddressFamily IPv6).IPAddress

# ɸѡ����"240e"��ͷ��IPv6��ַ
$filteredAddresses = $ipv6Addresses | Where-Object { $_ -like "240e*" }

# ����JSON����
$jsonObject = @{
    hostname = $hostname
    ipv6list = $filteredAddresses
}

# ת��ΪJSON�ַ���
$jsonString = ConvertTo-Json -InputObject $jsonObject

# ����HTTP����ͷ
$headers = @{
    'Content-Type' = 'application/json;charset=utf-8'  # ����UTF-8������Ϣ
}

# ����JSON���ݵ�������
$serverUrl = "http://192.168.1.1:7000/Ipv6"
try {
    Invoke-RestMethod -Uri $serverUrl -Method Post -Headers $headers -Body $jsonString
    Write-Host "JSON data sent successfully."
} catch {
    Write-Host "Failed to send JSON data: $_"
}
