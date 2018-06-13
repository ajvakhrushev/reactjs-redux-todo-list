const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const entryPoint = `${__dirname}/index.html`;

app.use('/static',  express.static(`${__dirname}/static`));

app.get(/^.*$/, function (req, res) {
  res.sendFile(entryPoint);
});

app.listen(port, function () {
  console.log(`App Server running on port ${port}`);
});
