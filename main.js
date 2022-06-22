
window.addEventListener("mousedown", GetStringSelected(), false);
function GetStringSelected(){
  selectedText = window.getSelection().toString();
  alert(selectedText);
}
