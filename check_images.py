import os
import re

# Get list of images on disk
images_on_disk = set(os.listdir('images'))

# Check index.html
print("Checking index.html...")
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    # Find src="./images/..."
    matches = re.findall(r'src="\./images/([^"?]+)', content)
    for match in matches:
        if match not in images_on_disk:
            print(f"Broken in index.html: {match}")

# Check js/app.js
print("\nChecking js/app.js...")
with open('js/app.js', 'r', encoding='utf-8') as f:
    content = f.read()
    # Find { src: '...' }
    matches = re.findall(r"src:\s*'([^'?]+)", content)
    for match in matches:
        if match not in images_on_disk:
            print(f"Broken in js/app.js: {match}")
