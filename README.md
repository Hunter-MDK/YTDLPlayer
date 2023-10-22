# YTDLPlayer
## What does it do?
YTDLPlayer is a firefox extension for linux that pipes youtube videos to YTDL or MPV. YTDL will store the files in $HOME/ytdl It uses native messaging to send the current tab url to either program. This means you shouldnt use it on playlists, or you could if you wanted to download all files.
## How does it work?
When a youtube video is on your active tab you can open the addon and choose either program.
There is no indicator for success or failure, so read the installation carefully.
## Installation
### Prerequisites
1. ytdl
2. mpv

thats it, make sure you have them.
If you use yt-dlp you need to run:
```
cp /bin/yt-dlp /bin/ytdl
```
### File paths
```
/usr/lib64/mozilla/native-messaging-hosts/ytdlplayer.json
/usr/lib64/mozilla/native-messaging-hosts/ytdlplayer.sh
```
The actual addon will be provided on the firefox store, however the addon folder in the repo is usable as well.
