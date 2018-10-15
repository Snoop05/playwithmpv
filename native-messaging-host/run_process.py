#!/usr/bin/env python3

from nativemessaging import getMessage
import subprocess

url = getMessage()
subprocess.Popen(['mpv', url], creationflags=subprocess.CREATE_BREAKAWAY_FROM_JOB)
