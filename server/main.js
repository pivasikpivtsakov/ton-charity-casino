const express = require("express");
const scheduledFunctions = require('./scheduled');
const app = express();

var globalConfig = {
  channelId: undefined, // Channel ID, for each new channel there must be a new ID
  addressA: undefined, // A's funds will be withdrawn to this wallet address after the channel is closed
  addressB: undefined, // B's funds will be withdrawn to this wallet address after the channel is closed
  initBalanceA: undefined,
  initBalanceB: undefined
}

app.set("port", process.env.PORT || 3000);
app.post("/config", (req, res) => {
  const body = req.body
  res.send(`set body to ${body}`);
  globalConfig = body;
})

app.get("/config", (req, res) => {
  const body = req.body
  res.send(JSON.stringify(body));
})


app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
  scheduledFunctions.runEveryMinute(() => console.log("no funny"));
});


