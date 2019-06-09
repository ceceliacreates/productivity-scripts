const fs = require("fs");

const htmlFile = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`

fs.writeFile("server.js", "", (err) => {
    if (err) throw err;
    console.log('The file has been created!');
  })

fs.mkdir("public", (err) => {
    if (err) throw err;
    console.log('The directory has been created!');
  })

fs.mkdir("public/css", (err) => {
    if (err) throw err;
    console.log('The directory has been created!');
  })

fs.writeFile("public/css/style.css", "", (err) => {
    if (err) throw err;
    console.log('The file has been created!');
  })

fs.mkdir("public/html", (err) => {
    if (err) throw err;
    console.log('The directory has been created!');
  })

fs.writeFile("public/html/index.html", htmlFile, (err) => {
    if (err) throw err;
    console.log('The file has been created!');
  })

fs.mkdir("public/js", (err) => {
    if (err) throw err;
    console.log('The directory has been created!');
  })

fs.writeFile("public/js/app.js", "", (err) => {
    if (err) throw err;
    console.log('The file has been created!');
  })

fs.mkdir("routes", (err) => {
    if (err) throw err;
    console.log('The directory has been created!');
  })

fs.writeFile("routes/html-routes.js", "", (err) => {
    if (err) throw err;
    console.log('The file has been created!');
  })

fs.writeFile("routes/api-routes.js", "", (err) => {
    if (err) throw err;
    console.log('The file has been created!');
  })


