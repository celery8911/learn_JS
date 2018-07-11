function checkFlightSchedule(weixin) {
    console.log('开始查看航班');
    
    //模拟构建航班的时间信息
    var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou'
    };

    weixin(scheduleInfo.start);
}

function wxin(startTime) {
    console.log(startTime);
}

checkFlightSchedule(wxin);