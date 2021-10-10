// 사용자 이름 alert로 받아오기
var user_name

// 사용자 이름 받아오기
swal({
    content: {
      element: "input",
      attributes: {
        placeholder: "이름을 작성해 주세요:)",
        type: "name",
      },
    },
  })
  .then((name) => {
    swal(`${name}님, 오늘도 열공하세요:)`);
    text1.textContent = `${name}님은 오늘,` + " "
  });

var isPlay = false;
var isMute = false;

//타이머 관련 속성
var sec = 0;
var min = 0;
var hrs = 0;
var t;

//Play버튼 클릭 이벤트 처리
play_button.onclick = function() {
    if(isPlay) {
        waveSnd.pause(); fireSnd.pause();
        isPlay = false;

        back.style.animationPlayState = "paused";

        clearTimeout(t);

        play_button_img.src = "img/play.png";
    } else {
        waveSnd.play(); fireSnd.play();
        isPlay = true;

        back.style.animationPlayState = "running";

        timer();

        play_button_img.src = "img/pause.png";
    }
}

//Sound버튼 클릭 이벤트 처리
sound_button.onclick = function() {
    if(isMute) {
        waveSnd.volume = vol.value / 100;
        fireSnd.volume = vol.value / 100;
        sound_button_img.src = "img/volume.png"
        isMute = false;
    } else {
        waveSnd.volume = 0;
        fireSnd.volume = 0;
        sound_button_img.src = "img/mute.png"
        isMute = true;
    }
}

//볼륨 조절
vol.oninput = function() {
    waveSnd.volume = vol.value / 100;
    fireSnd.volume = vol.value / 100;
}

//타이머
function timer() {
    t = setTimeout(add, 1000);
}

function add() {
    tick();
    time.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + "시간 " + (min > 9 ? min : "0" + min)
       		 + "분 " + (sec > 9 ? sec : "0" + sec)
             + "초 ";

    timer();
}

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}