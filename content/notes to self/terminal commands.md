---
title: terminal commands
---

# foundry
SSH:
`ssh -i key.key ubuntu@IP address`

restart:
`sudo shutdown -r now`

update instance with security patches:
`sudo apt update && sudo apt upgrade -y`

# quartz
build and run on localhost:
`npx quartz build --serve`

sync with github:
`npx quartz sync`

# yt-dlp
download a playlist at 1080p and number the files sequentially:
`yt-dlp <video link> -o "%(playlist_index)s-%(title)s.%(ext)s" -S "res:1080"`