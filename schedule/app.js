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
// var rule = new schedule.RecurrenceRule();
// rule.minute = 5;
//
// var task = schedule.scheduleJob(rule, function () {
//     console.log('05分执行任务');
// });

//一周中的某些天，某个时刻 ex:每周一到周日的14:10
// var rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0,new schedule.Range(0,6)];
// rule.hour = 14;
// rule.minute = 10;
//
// var task = schedule.scheduleJob(rule, function () {
//     console.log('每天10分执行任务');
// });

//每隔10秒执行
var rule = new schedule.RecurrenceRule();
var times = [];
for (var i=1; i<60; i+=10){
    times.push(i);
}
rule.second = times;
var c = 0;
var task = schedule.scheduleJob(rule, function () {
    c+=10;
    console.log(c);
});
