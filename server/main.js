const express = require("express");
const scheduledFunctions = require('./scheduled');
const app = express();
app.set("port", process.env.PORT || 3000);

scheduledFunctions.runEveryMinute(() => console.log("no funny"));

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
