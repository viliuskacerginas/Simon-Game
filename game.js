// color sequence          color sequence                       color sequence
var random = [],
  player = [];
// color sequence          color sequence                       color sequence

// random number generator                             random number generator
function rng() {
  let randomnumber = Math.floor(Math.random() * 4);
  randomnumber = random.push(randomnumber);
};
// random number generator                             random number generator

// sound                       sound                        sound
var btn = [new Audio('sounds/green.mp3'), new Audio('sounds/red.mp3'), new Audio('sounds/yellow.mp3'), btn = new Audio('sounds/blue.mp3')];
var wrong = new Audio('sounds/wrong.mp3');
// sound                       sound                        sound

// keyboard start/restart     keyboard start/restart     keyboard start/restart
$(document).on("keypress", function() {
  if (random.length === 0) {
    rng();
    $('h1').text("Level 1")
    $(".btn").each(function(index) {
      if (random[0] === (index)) {
        let fade = $(".btn")[index]
        btn[index].play();
        $(fade).fadeOut(75).fadeIn(75).fadeOut(75).fadeIn(75);
      }
    })
  }
});
// keyboard start/restart     keyboard start/restart     keyboard start/restart

// after click on color continuation                after click on color continuation
$('.btn').on("click", function(e) {
  // click on any collor                                  click on any collor
  switch (e.target) {
    case green:
      $(green).addClass("pressed");
      player.push(0);
      btn[0].currentTime = 0;
      btn[0].play();
      break;
    case red:
      $(red).addClass("pressed");
      player.push(1);
      btn[1].currentTime = 0;
      btn[1].play();
      break;
    case yellow:
      $(yellow).addClass("pressed");
      player.push(2);
      btn[2].currentTime = 0;
      btn[2].play();
      break;
    case blue:
      $(blue).addClass("pressed");
      player.push(3);
      btn[3].currentTime = 0;
      btn[3].play();
      break;
  };
  setTimeout(function() {
    $("*").removeClass("pressed")
  }, 200);
  // click on any collor                                  click on any collor

  //                         successful guess or level completion
  let numberR = random[player.length - 1];
  let numberP = player[player.length - 1];
  if (numberR === numberP) {
    if (random.length === player.length) {
      player = [];
      rng();
      let fade = $(".btn")[random[random.length - 1]];
      let sound = random[random.length - 1];
      setTimeout(function() {
        if (random.length >=  1) {
        $(fade).fadeOut(75).fadeIn(75).fadeOut(75).fadeIn(75);
        btn[sound].play();
      }}, 1100);
      $('h1').text('level ' + random.length);
    }
  }
  //                         successful guess or level completion

  // unsuccessful guess                unsuccessful guess          unsuccessful guess
  else {
    random = [];
    player = [];
    $('h1').text('Game Over, Press Any Keyboard Key to Restart');
    wrong.play();
    $('body').addClass("game-over");
    setTimeout(function() {
      $('body').removeClass("game-over")
    }, 250);

  }
  // unsuccessful guess                unsuccessful guess          unsuccessful guess

});
// after click on color continuation                after click on color continuation
