// youtube link: https://www.youtube.com/watch?v=hIjAGcMh3QA&list=PLtMugc7g4GaqAVDZwQ_t1H6500ZGJzOgW&index=1
var index = 0;

function changeColor() {
  var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  if (index < colors.length - 1) {
    document.querySelector(".container").style.backgroundColor = colors[index];
    index++;
  } else {
    index = 0;
  }
}
