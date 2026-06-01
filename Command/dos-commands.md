# tree /f | findstr ".pdf"

Finds all files with .pdf string in name. No need of wildcard characters.

# mkdir info && cd info & echo ipconfig/displaydns > dns_cache.log

Make folder INFO [IF SUCCESS]: Write DNS CACHE into a 'dns_cache.log' file.

# ipconfig/registerdns

Send DNS Query and refresh DNS Cache to latest with new TTL.

# ipconfig/flushdns

Remove the DNS cache of websites and servers before the TTL ends.

# ipconfig/release[4/6]

Drop the IP [4/6]. Disconnects temporarily.

# ipconfig/renew[4/6]

Drop and provide new IP [4/6].

ping → "Can I reach it?"
tracert → "How do I reach it?"
pathping → "Where is quality being lost?"

# ping -a [IP]

Get to know its domain name or hostname as per NetBIOS cache over TCP/IP. or use another command:
nbtstat -a [IP]. Same purpose but no pinging.

# nbtstat -n

View NetBIOS Local Name Table for Adapters and specific service written inside <> which are service codes.

```color
INTERFACE:
Node IpAddress: [IP ADDRESS] Scope Id: []

                NetBIOS Local Name Table

       Name               Type         Status
    ---------------------------------------------
    HOSTNAME       <20>  UNIQUE      Registered
    HOSTNAME2      <00>  UNIQUE      Registered
    WORKGROUP      <00>  GROUP       Registered
```
