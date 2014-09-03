window.onload = function(){
  function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }

  var size12 = makeSizer(12);
  var size14 = makeSizer(14);
  var size16 = makeSizer(16);

  document.getElementById('size-12').addEventListener("click", size12);
  document.getElementById('size-14').addEventListener("click", size14);
  document.getElementById('size-16').addEventListener("click", size16);
}