const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Remove cover1 card - use exact string with quotes to avoid matching cover10, cover11 etc
const cover1Card = `

                <div class="project-card" onclick="openProject('cover1')">
                    <img src="./images/cover1.jpg" class="project-cover-img">
                </div>`;

if (content.includes(cover1Card)) {
    content = content.replace(cover1Card, '');
    fs.writeFileSync('index.html', content, 'utf8');
    console.log('SUCCESS - cover1 removed');
} else {
    // Try with \r\n
    const cover1CardCRLF = cover1Card.replace(/\n/g, '\r\n');
    if (content.includes(cover1CardCRLF)) {
        content = content.replace(cover1CardCRLF, '');
        fs.writeFileSync('index.html', content, 'utf8');
        console.log('SUCCESS (CRLF) - cover1 removed');
    } else {
        console.log('NOT FOUND');
        // Show nearby context
        const idx = content.indexOf("openProject('cover1')");
        console.log('cover1 index:', idx);
        if (idx > -1) console.log(JSON.stringify(content.substring(idx - 50, idx + 120)));
    }
}
