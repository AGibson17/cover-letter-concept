#!/bin/bash

# Deployment preparation script for Zimmer Biomet Digital Cover Letter

echo "🚀 Preparing deployment files..."

# Create deployment directory
mkdir -p deployment

# Copy essential files
cp index.html deployment/
cp -r wwwroot deployment/
cp -r js deployment/

echo "✅ Copied main application files"

# Create a simple web server test file (optional)
cat > deployment/test-server.py << 'EOF'
#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🌐 Test server running at http://localhost:{PORT}")
        print("📂 Serving files from the deployment directory")
        print("🛑 Press Ctrl+C to stop the server")
        
        # Automatically open browser
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n✅ Server stopped")
EOF

chmod +x deployment/test-server.py

echo "📦 Created deployment folder with all necessary files"
echo ""
echo "📋 Next steps:"
echo "1. Navigate to the 'deployment' folder"
echo "2. Test locally by running: python3 test-server.py"
echo "3. Upload all files in 'deployment' folder to your web server"
echo "4. Access at: https://andrewjgibson.com/zimmer-biomet/"
echo ""
echo "📁 Files ready for upload:"
echo "   - index.html"
echo "   - wwwroot/ (directory)"
echo "   - js/ (directory)"
