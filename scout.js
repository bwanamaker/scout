const https = require('https');
const fs = require('fs');
const source = fs.readFileSync('./poi-list.json');
const urlList = JSON.parse(source);

Object.values(urlList).forEach(poi => {
    https.get(poi.url, res => {
        if (res.statusCode != 200) {
            console.log(`${res.statusCode}: ${poi.url}`);
        }
    });
    console.log(".");
});
