function personA() {
    console.log('1');
    personB();
}

function personB() {
    console.log('2');
    personC();
}

function personC() {
    console.log('3');
    personD();
}

function personD() {
    console.log('4');
    personE();
}

function personE() {
    console.log('5');
}

function startSoundOff(){
    personA();
}

startSoundOff();