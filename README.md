# Play with *mpv*

Browser extension using *WebExtensions* API for playing media with mpv https://mpv.io/

Aims to be as minimal and simple as possible.
Motivation for this project was that extension i was using previously had too much stuff i wasn't using, code size was massive (compared to this), had some behavior that annoyed me and (main trigger) one day it simply stopped working, so i decided to write my own.

Compatibility wise, i am personally using latest Firefox Nightly and i don't plan to personally test it on anything else. Of course , i will set minimal required FF version as listed in documentation, depending on WebExtension API's used, but i don't guarantee that i haven't overlooked something (nor that it will actually work even if i haven't). You are free to notify me if the extension works with another browser (please specify version too), or to send a pull request that will make it also compatible with another browser.

Native messaging host (thing that can start **mpv**) is written in Python 3. At the time of writing this ReadMe, version 3.7 to be specific. I don't plan to maintain compatibility with older versions, but as always, you are free to make pull request. (i may write alternative host for out-of-the-box compatibility in the future)

**WIP**
