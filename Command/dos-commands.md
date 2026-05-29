# tree /f | findstr ".pdf"

Finds all files with .pdf string in name. No need of wildcard characters.

# mkdir info && cd info & echo ipconfig/displaydns > dns_cache.log

Make folder INFO [IF SUCCESS]: Write DNS CACHE into a 'dns_cache.log' file.

# move og_name name

Rename from 'og_name' to 'name'.

# del \*.pdf || del NC ??????.pdf

Delete all PDF [IF FAIL]: Delete PDF with 'NC '--random char/number--'.pdf'.

# ipconfig/registerdns

Send DNS Query and refresh DNS Cache to latest with new TTL.

# ipconfig/flushdns

Remove the DNS cache of websites and servers before the TTL ends.

# ipconfig/release[4/6]

Drop the IP [4/6]. Disconnects temporarily.

# ipconfig/renew[4/6]

Drop and provide new IP [4/6].
