var t;
var timerCount  = 0;
var timeStamp = performance.now();
var timeCallback = function (){
  timerCount++;
  var now = performance.now();
  timeSlapse = now - timeStamp;
  timeStamp = now;
  print("fired: " + timerCount + ", timeSlapse: " + timeSlapse);
}

var startTimer = function(){
  t = setInterval(timeCallback, 1000);
}

var stopTimer = function(){
  clearInterval(t);
}
var handleClick = function(e) {
  for (var i = 0; i < 1; ++i){
    print("click");
  }
}

var handleMove = function(e) {
  for (var i = 0; i < 1; ++i){
    print("move");
  }
}

var handleDrag = function(e){
  print("drag");
}

var handleEvent = function (e){
  var type = e.type;
  print("event: " + type + ", {" + e.clientX + ", " + e.clientY + "}");
}

var registerEvent = function(){
  var e = document.getElementById("event-div");

  e.addEventListener("click", handleEvent);
  e.addEventListener("mousedown", handleEvent);
  e.addEventListener("mouseenter", handleEvent);
  e.addEventListener("mouseleave", handleEvent);
  e.addEventListener("mousemove", handleEvent);
  e.addEventListener("mouseout", handleEvent);
  e.addEventListener("mouseover", handleEvent);
  e.addEventListener("mouseup", handleEvent);
  e.addEventListener("mousewheel", handleEvent);

  e.addEventListener("drag", handleEvent);
  e.addEventListener("dragend", handleEvent);
  e.addEventListener("dragenter", handleEvent);
  e.addEventListener("dragleave", handleEvent);
  e.addEventListener("dragover", handleEvent);
  e.addEventListener("dragstart", handleEvent);
  e.addEventListener("drop", handleEvent);

  // e.addEventListener("gestureflingstart", handleEvent);
  // e.addEventListener("gesturelongpress", handleEvent);
  // e.addEventListener("gesturescrollend", handleEvent);
  // e.addEventListener("gesturescrollstart", handleEvent);
  // e.addEventListener("gesturescrollupdate", handleEvent);
  // e.addEventListener("gestureshowpress", handleEvent);
  // e.addEventListener("gesturetap", handleEvent);
  // e.addEventListener("gesturetapdown", handleEvent);
  // e.addEventListener("gesturetapunconfirmed", handleEvent);
  // e.addEventListener("gotpointercapture", handleEvent);

  // e.addEventListener("pointercancel", handleEvent);
  // e.addEventListener("pointerdown", handleEvent);
  // e.addEventListener("pointerenter", handleEvent);
  // e.addEventListener("pointerleave", handleEvent);
  // e.addEventListener("pointerlockchange", handleEvent);
  // e.addEventListener("pointerlockerror", handleEvent);
  // e.addEventListener("pointermove", handleEvent);
  // e.addEventListener("pointerout", handleEvent);
  // e.addEventListener("pointerover", handleEvent);
  // e.addEventListener("pointerup", handleEvent);
}

var Load = function(){
  registerEvent();
}
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var start = null;
var d = document.getElementById('SomeElementYouWantToAnimate');
// function step(timestamp) {
//   if (start === null) start = timestamp;
//   var progress = timestamp - start;
//   d.style.left = Math.min(progress/10, 200) + "px";
//   if (progress < 2000) {
//     requestAnimationFrame(step);
//   }
// }

var callbackCount = 0;
function step() {
  callbackCount++;
  print("callback: " + callbackCount);
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
