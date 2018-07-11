 function checkFlightSchedule(weixin) {
    console.log('开始查航班信息');
    var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou' };

    setTimeout(function() {
         weixin(scheduleInfo.start)}, 5000);
 }

 function callback(startTime) {
     console.log('通过反馈通道获得了信息');
     console.log(startTime);
 }

 checkFlightSchedule(callback);