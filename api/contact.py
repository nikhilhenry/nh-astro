from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):

  def do_POST(self):
    self.send_response(200,"contacting...")
    self.end_headers()
    return