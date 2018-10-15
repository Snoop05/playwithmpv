"""
Minimal native messaging library.
"""

import json
import struct
import sys


# Read a message from stdin and decode it.
def getMessage():
	raw_length = sys.stdin.buffer.read(4)
	if len(raw_length) == 0:
		sys.exit(0)
	message_length = struct.unpack('@I', raw_length)[0]
	message = sys.stdin.buffer.read(message_length).decode('utf-8')
	return json.loads(message)


# Encode a message and send it to stdout.
def sendMessage(message_content):
	encoded_content = json.dumps(message_content).encode('utf-8')
	encoded_length = struct.pack('@I', len(encoded_content))
	sys.stdout.buffer.write(encoded_length)
	sys.stdout.buffer.write(encoded_content)
	sys.stdout.buffer.flush()
