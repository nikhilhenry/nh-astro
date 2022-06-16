from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    self.wfile.write(str("hello world").encode())
    return

  def do_POST(self):
    self.send_response(200,self.bo)
    self.end_headers()
    return