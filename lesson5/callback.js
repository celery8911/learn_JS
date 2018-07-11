function run(callback) {
    console.log('Celery is running');
    if (typeof callback === 'function'){
        callback();
    } else {
        console.log('callback is not a function.');
    }
}

function callback() {
    console.log('end.')
}

run(callback);