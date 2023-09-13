const fs = require('fs');
const https = require('https');
const url = require('url');

function downloadPage(urlString) {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(urlString);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.path,
      method: 'GET',
    };

    const req = https.request(options, (res) => {
      let html = '';

      res.on('data', (chunk) => {
        html += chunk;
      });

      res.on('end', () => {
        resolve(html);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

function writeToFile(filename, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function processURLs(filename) {
  fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
      console.error('Couldn\'t read the file:', error);
      process.exit(1);
    }

    const urls = data.trim().split('\n');

    urls.forEach((urlString) => {
      const hostname = url.parwse(urlString).hostname;
      const outputFilename = `${hostname}.txt`;

      downloadPage(urlString)
        .then((html) => {
          return writeToFile(outputFilename, html);
        })
        .then(() => {
          console.log('Wrote to', outputFilename);
        })
        .catch((error) => {
          console.error('Error processing', urlString);
          console.error(error.message);
        });
    });
  });
}

// Get the filename from the command-line argument
const filename = process.argv[2];

if (!filename) {
  console.error('Please provide a filename as an argument.');
  process.exit(1);
}

processURLs(filename);
