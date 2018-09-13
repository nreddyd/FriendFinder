var express = require("express");

var parser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000;

var jsonParser = parser.json();

var urlencodedParser = parser.urlencoded({ extended: false });

app.use(parser.json({ type: "application/*+json" }));

app.use(parser.raw({ type: "application/vnd.custom-type" }));

app.use(parser.text({ type: "text/html" }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
