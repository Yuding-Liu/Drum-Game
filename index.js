buttuns = document.querySelectorAll('.drum');
for (var i = 0; i < buttuns.length; ++i) {
  buttuns[i].addEventListener('click', handleClick);
}

function handleClick() {
  var audio;
  playSoune(this.innerHTML);
  buttomAnimation(this.innerHTML);
}



function handleKey(e) {
  playSoune(e.key);
  buttomAnimation(e.key);
}

document.addEventListener('keydown', handleKey);





function playSoune(c) {
  switch (c) {
    case 'w':
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'a':
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case 's':
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case 'd':
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case 'j':
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 'k':
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case 'l':
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
  }
}



function buttomAnimation(c) {
  var activeButton = document.querySelector('.' + c);
  activeButton.classList.add('pressed');

  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}
