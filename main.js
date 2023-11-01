const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

//開始時間
let startTime;
//停止時間
let stopTime =0;
//タイムアウトID
let timeoutID;

//時間を表示する関数
function displayTime(){
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const h = String(currentTime.getHours()-1).padStart(2,'0');
    const m = String(currentTime.getMinutes()).padStart(2,'0');
    const s = String(currentTime.getSeconds()).padStart(2,'0');
    const ms = String(currentTime.getMilliseconds()).padStart(3,'0');

    time.textContent = `${h}:${m}:${s}.${ms}`;
    timeoutID = setTimeout(displayTime,10);
}

startButton.addEventListener('click',() => {
startButton.disabled=true;
stopButton.disabled =false;
resetButton.disabled =true;
startTime =Date.now();
displayTime();
});

resetButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    time.textContent = '00:00:00.000';
    stopTime = 0;
  });
stopButton.addEventListener('click',function(){
 startButton.disabled =false;
 stopButton.disabled =true;
 resetButton.disabled =false;
 clearTimeout(timeoutID);
 stopTime +=(Date.now()-startTime);

});
