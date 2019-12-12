const https = require('https');
const fs = require('fs');
const source = fs.readFileSync('./url-list.json');
const urlList = JSON.parse(source);

Object.values(urlList).forEach(list => {
    https.get(list.url, res => {
        if (res.statusCode != 200) {
            console.log(`${res.statusCode}: ${list.url}`);
        }
    });
    console.log(".");
});
