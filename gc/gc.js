var OneMillon = 1024 * 1024;

var BufferLength = OneMillon; // 1M
var abList = []; // array to refer ArrayBuffer

function allocateArrayBuffer(sizeInMBytes){
  for (var i = 0; i < sizeInMBytes ; ++i){
    var buffer = new ArrayBuffer(BufferLength);
    abList.push(buffer);
  }
}

function releaseArrayBuffer() {
  abList = [];
}

function showArrayBuffer(){
  print("length of ArrayBuffer: " + abList.length + " MB");
}

var ArrayLength = OneMillon;
var arrayList = [];

function allocateArray(sizeInMBytes){
  for (var i = 0; i < sizeInMBytes; ++i){
    var array = new Array(ArrayLength);
    arrayList.push(array);
  }
}

function releaseArray(){
  arrayList = [];
}

function showArray(){
  print("length of Array: " + arrayList.length + " MB");
}

var show = function (){
  showArrayBuffer();
  showArray();
}
