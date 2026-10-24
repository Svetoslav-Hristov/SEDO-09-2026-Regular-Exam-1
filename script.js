document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});
document.getElementById('apply-btn').addEventListener('click', function() {
  var color = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = color;
});