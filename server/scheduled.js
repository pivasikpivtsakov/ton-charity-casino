const CronJob = require("node-cron");


exports.runEveryMinute = (action) => {
  const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
    console.log("Executing action");
    action();
  });

  scheduledJobFunction.start();
}