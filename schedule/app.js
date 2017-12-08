/**
 * Created by liqiaoqiao on 2017/12/8.
 */


var schedule = require("node-schedule");

//2017年12月8日13:59:00执行任务
// var date = new Date(2017,11,8,13,59,0);
// var j = schedule.scheduleJob(date, function () {
//     console.log('执行任务');
// });

//每小时的固定分钟执行任务 ex:05分
var rule = new schedule.RecurrenceRule();
rule.minute = 5;

var task = schedule.scheduleJob(rule, function () {
    console.log('05分执行任务');
});